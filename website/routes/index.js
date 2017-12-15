var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var mongo = require('mongodb');

var url = 'mongodb://localhost:27017/test';

=======
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;
>>>>>>> 6980f2d72567903ddd2b4b538074700cfc01d0a6

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KDS TurnItIn' });
});
router.get('/get-data', function(req, res, next) {

});
router.post('/teacher', function (req, res, next) {
    var item = {
      user: req.body
    }
})




module.exports = router;
