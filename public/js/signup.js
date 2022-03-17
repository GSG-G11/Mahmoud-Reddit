const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const signUpForm = document.querySelector('.signup-form ');
const errorMsg = document.querySelector('.error-msg');
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: userName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPass.value,
    }),

  }).then((res) => res.json()).then((result) => {
    if (result.msg === 'sign in successfully') {
      window.location.assign('/home');
    } errorMsg.textContent = result.message;
  });
});
