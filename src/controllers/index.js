const addUser = require('./signUp');
const logIn = require('./logIn');
const addPost = require('./addPost');
const getUserPost = require('./getUserPost');
const getAllPost = require('./getAllPost');
const signUpPage = require('./pageHandle/signUpPage');
const logInPage = require('./pageHandle/logInPage');
const homePage = require('./pageHandle/homePage');
const profilePage = require('./pageHandle/profilePage');
const logOut = require('./logOut');
const deletePost = require('./deletePost');

module.exports = {
  addUser,
  logIn,
  addPost,
  getUserPost,
  getAllPost,
  signUpPage,
  logInPage,
  homePage,
  profilePage,
  logOut,
  deletePost,
};
