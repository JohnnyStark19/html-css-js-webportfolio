'use strict';

document.getElementsByClassName('submit').onclick = () => {

  document.addEventListener('click', submitForm);

  function submitForm(s) {
    const email = document.getElementsByClassName('email').value;
    const password = document.getElementsByClassName('pass').value;

    if (email.value === '' && password.value === '')
    {
      document.getElementsByClassName('emailErr').innerHTML = 'You seem to have forgotten your username and password.';
      document.getElementsByClassName('passErr').innerHTML = 'You seem to have forgotten your username and password.';
    }
    else {
      document.getElementsByClassName('emailGood').innerHTML = 'Welcome back Admin!';
      document.getElementsByClassName('passGood').innerHTML = 'Welcome back Admin!';
    }

    s.preventDefault();
  }
};