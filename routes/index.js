var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fusion - Music' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Fusion - Music' });
});

/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Fusion - Music' });
});


module.exports = router;
