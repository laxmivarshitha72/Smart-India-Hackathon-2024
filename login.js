const signinBtn = document.querySelector('.signinbtn');
const signupBtn = document.querySelector('.signupbtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
const reginbtn = document.querySelector('.box button')



signupBtn.onclick = function(){
    formBx.classList.add('active')
    body.classList.add('active')
}

signinBtn.onclick = function(){
    formBx.classList.remove('active')
    body.classList.remove('active')
}

function showSigninForm() {
    document.querySelector('.formBx').classList.add('active');
}

function showSignupForm() {
    document.querySelector('.formBx').classList.remove('active');
}

function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting
    const username = document.getElementById('Username').value;

    // Check if the username exists in localStorage
    if (localStorage.getItem(username)) {
        // On success:
        localStorage.setItem('currentUser', username);
        window.location.href = 'home.html';
    } else {
        alert('Username does not exist. Please sign up.');
    }
}

function signupUser(event) {
    event.preventDefault(); // Prevent the form from submitting
    const username = document.getElementById('Username').value;

    // Check if the username already exists
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please log in.');
        showSigninForm(); // Redirect to sign-in form
    } else {
        // Store the new user in localStorage
        localStorage.setItem(username, true);
        localStorage.setItem('currentUser', username);
        reginbtn.onclick = function(){
            window.location.href = 'home.html';
        }
    }
}