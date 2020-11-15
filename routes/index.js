var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stingray', function(req, res, next) {
  res.render('stingray', { language: 'spa'} );
});
router.get('/corefit', function(req, res, next) {
  res.render('corefit');
});

router.get('/metrix', function(req, res, next) {
  res.render('metrix');
});

router.get('/rgb', function(req, res, next) {
  res.render('rgb');
});
router.get('/lomha', function(req, res, next) {
  res.render('lomha');
});

router.get('/cardenas', function(req, res, next) {
  res.render('cardenas');
});

router.get('/briella', function(req, res, next) {
  res.render('briella');
});

router.get('/eb', function(req, res, next) {
  res.render('eb');
});
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
