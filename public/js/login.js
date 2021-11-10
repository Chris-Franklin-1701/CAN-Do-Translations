const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

/* async function signupFormHandler (event){
  event.PreventDefault();
}

const username = document.querySelector('#username').value.trim();
const email = document.querySelector('#email').value.trim();
const password = document.querySelector('#password').value.trim();

if (username && email && password) {
  const response = await fetch('/api/users/', {
  method: 'POST',
  body: JSON.stringify({ username, email, password}),
  headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      console.log('Sign Up Successful!');
      document.location.replace('/dashboard/signup');
  } else {
      alert(response.statusText);
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); */

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
