var express = require('express');
var router = express.Router();

/* GET main sounds page. */
router.get('/', function(req, res, next) {
  res.render('sounds.ejs', { title: 'Fusion-Music' });
});

module.exports = router;