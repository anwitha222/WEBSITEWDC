var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

/* GET crews page. */
router.get('/crews', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/crews.html'));
});

/* GET home-logged page. */
router.get('/home-logged', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/home-logged.html'));
});

/* GET about page. */
router.get('/home', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

/* GET profile-org page. */
router.get('/profile-org', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/profile-org.html'));
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/profile.html'));
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

module.exports = router;
