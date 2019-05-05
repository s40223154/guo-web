var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

router.post('/getData', function(req, res, next) {
  console.log(req.body.passwd);
  res.render('new', { title: 'Express' });
});

module.exports = router;
