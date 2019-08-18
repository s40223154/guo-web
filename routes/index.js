var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('hihihi');
  res.render('index', {
    title: 'Express'
  });
});

router.get('/getData', function(req, res, next) {
  console.log(req.query.red);
  var MongoClient = require('mongodb').MongoClient;
  let data = {
    red: req.query.red,
    green: req.query.green,
    blue: req.query.blue,
    flow: req.query.Flow,
    time: req.query.T
  };

  MongoClient.connect('mongodb://localhost:27017/sensor', function(err, db) {
    if (err) {
      console.log("Please check you db connection parameters");
    } else {
      db.collection('Friend', function(err, collection) {
        if (err) {
          db.close();
          console.log(err);
        }
        collection.insert(data, {
          safe: true
        }, function(err, ebook) {
          db.close();
          if (err) {
            console.log(err);
          }
          console.log("Saved !");
        });
      });
    }
  });

});

router.get('/showToWeb', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
  let data = req.body;
  console.log(req.query.data);

  MongoClient.connect('mongodb://localhost:27017/sensor', function(err, db) {
    if (err) {
      console.log("Please check you db connection parameters");
    } else {
      db.collection('Friend', function(err, collection) {
        if (err) {
          db.close();
          console.log(err);
        }
        collection.find({}, {
          safe: true
        }, function(err, datas) {
          console.log(datas);
          db.close();
          if (err) {
            console.log(err);
          }
          console.log("Saved !");
          res.end();
        });
      });
    }
  });

});

router.get('/new', function(req, res, next) {
  res.render('new', {
    title: 'Express'
  });
});

router.post('/getData', function(req, res, next) {
  console.log(req.body.passwd);
  res.render('new', {
    title: 'Express'
  });
});

module.exports = router;
