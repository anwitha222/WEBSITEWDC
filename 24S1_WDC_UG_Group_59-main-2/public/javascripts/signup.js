const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'compassioncrew2'
});

const app = express();
var parseUrl = require('body-parser');

let encodeUrl = parseUrl.urlencoded({ extended: false });

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/signup.html'));
});


app.post('/signup', encodeUrl, (req, res) => {
    var userType = req.body.userType;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;

    db.connect(function (err) {
        if (err) {
            console.log(err);
        };
        db.query(`SELECT * FROM users WHERE email = '${email}' AND password  = '${password}'`, function (err, result) {
            if (err) {
                console.log(err);
                res.sendFile(path.join(__dirname + '/login.html'));
            };
            if (Object.keys(result).length > 0) {
                res.sendFile(path.join(__dirname + '/login.html'));
            } else {
                function profile() {
                    req.session.user = {
                        usertype: userType,
                        firstname: firstName,
                        lastname: lastName,
                        email: email,
                        password: password
                    };
                    var sql = `INSERT INTO users (usertype, firstname, lastname, email, password) VALUES ('${userType}', '${firstName}', '${lastName}', '${email}', '${password}')`;
                    db.query(sql, function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            profile();
                            res.sendFile(path.join(__dirname + '/home-logged.html'));
                            console.log('yayyyy');
                        };
                    });

                };
            };


        });
    });
});


function handleSignUp() {
    console.log('hadnleSIGNUP function called');
    const userType = document.querySelector('input[name="Login"]:checked').value;
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;

    if (!email.includes('@')) {
        alert('Email must contain @');
        return;
    }

    if (password !== passwordConfirm) {
        alert('Passwords do not match');
        return;
    }

    const data = { userType, username, firstName, lastName, email, password };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(result => {
        if (result.success) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = '/profile';
        } else {
            alert('Sign up failed: ' + (result.message || 'Unknown error'));
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
}


function handleGoogleSignUp(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    var userType = prompt('Are you signing up as a volunteer or a manager?').toLowerCase();
    var username = prompt('Please enter a username');
    var firstName = profile.getGivenName();
    var lastName = profile.getFamilyName();
    var email = profile.getEmail();

    var data = { userType, username, firstName, lastName, email, id_token };

    fetch('/google-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(result => {
        if (result.success) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = 'home-logged.html';
        } else {
            alert('Sign up failed: ' + (result.message || 'Unknown error'));
        }
    }).catch(error => {
        alert('An error occurred: ' + error.message);
    });
}

function onSignIn(googleUser) {
    handleGoogleSignUp(googleUser);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        localStorage.removeItem("isLoggedIn");
        window.location.href = "home.html";
    });
}
