var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { OAuth2Client } = require('google-auth-library');
var mysql = require('mysql2');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const PORT = process.env.PORT || 8080;

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const client = new OAuth2Client(CLIENT_ID);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'compassioncrew'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

async function verifyToken(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
}

app.post('/tokensignin', async (req, res) => {
    const token = req.body.token;
    try {
        const payload = await verifyToken(token);
        const googleId = payload.sub;
        const email = payload.email;
        const firstName = payload.given_name;
        const lastName = payload.family_name;

        connection.query('SELECT * FROM accounts WHERE googleId = ?', [googleId], (error, results) => {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = results[0].username;
                res.json({ success: true });
            } else {
                connection.query('INSERT INTO accounts (googleId, email, firstName, lastName) VALUES (?, ?, ?, ?)',
                    [googleId, email, firstName, lastName], (error, results) => {
                        if (error) throw error;
                        req.session.loggedin = true;
                        req.session.username = email;
                        res.json({ success: true });
                    });
            }
        });
    } catch (err) {
        console.error(err);
        res.status(400).send('Login failed');
    }
});

app.post('/auth', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results) {
            if (error) throw error;
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/profile');
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

app.post('/signup', function(req, res) {
    const { userType, username, firstName, lastName, email, password } = req.body;
    connection.query('INSERT INTO accounts (userType, username, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?, ?)',
        [userType, username, firstName, lastName, email, password], function(error, results) {
            if (error) {
                console.error('Error inserting data:', error);
                res.status(500).json({ success: false, message: error.message });
            } else {
                req.session.loggedin = true;
                req.session.username = username;
                res.json({ success: true });
            }
        });
});

app.get('/profile', function(req, res) {
    if (req.session.loggedin) {
        res.sendFile(path.join(__dirname, 'public/profile.html'));
    } else {
        res.status(401).send('Please login to view this page');
    }
});

app.get('/profile-data', function(req, res) {
    if (req.session.loggedin) {
        connection.query('SELECT * FROM accounts WHERE username = ?', [req.session.username], function(error, results) {
            if (error) throw error;
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).send('User not found');
            }
        });
    } else {
        res.status(401).send('Please login to view this page');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/profile');
        }
        res.clearCookie('connect.sid');
        res.redirect('/home');
    });
});

app.get('/login-status', (req, res) => {
    if (req.session.loggedin) {
        res.json({ loggedIn: true, username: req.session.username });
    } else {
        res.json({ loggedIn: false });
    }
});


module.exports = app;
