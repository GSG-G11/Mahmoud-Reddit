const router = require('express').Router();
const {
  addUser, logIn, addPost, getUserPost,
  getAllPost, signUpPage, logInPage,
  homePage, profilePage, logOut, deletePost,
} = require('../controllers');

const clientError = require('../controllers/errors/clientError');
const serverError = require('../controllers/errors/serverError');
const { checkAuthentication } = require('../utilites/ath/authentication');

router.route('/signup').post(addUser).get(checkAuthentication, signUpPage);
router.route('/login').post(logIn).get(checkAuthentication, logInPage);
router.route('/post').post(checkAuthentication, addPost);
router.route('/logout').get(logOut);

router.route('/profileRender').get(checkAuthentication, getUserPost);

router.route('/homeRender').get(getAllPost);
router.get('/home', homePage);
router.get('/profile', checkAuthentication, profilePage);
router.route('/delete/:id').delete(checkAuthentication, deletePost);
router.use(clientError);
router.use(serverError);

module.exports = router;
