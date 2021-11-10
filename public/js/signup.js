async function signupFormHandler (event){
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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);