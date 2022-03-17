const email = document.querySelector('.login-email');
const password = document.querySelector('.login-pass');
const loginForm = document.querySelector('.login-form');
const errorMsg = document.querySelector('.error-msg');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      email: email.value,
      password: password.value,

    }),

  }).then((res) => res.json()).then((result) => {
    if (result.msg === 'logIn successfully') {
      window.location.assign('/home');
    } errorMsg.textContent = result.message;
  });
});
