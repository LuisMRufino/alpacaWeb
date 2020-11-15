var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stingray', function(req, res, next) {
  res.render('stingray');
});

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
