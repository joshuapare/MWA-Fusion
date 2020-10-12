var express = require('express');
var router = express.Router();

/* GET main profile page. */
router.get('/', function(req, res, next) {
  res.render('profile.ejs', { title: 'Fusion-Music' });
});

module.exports = router;