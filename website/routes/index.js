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




var TeacherLogins = [[lhaynes, lhaynesPW], [egaffney, egaffneyPW] ];
var StudentLogins = [[qvoboril, qvoborilPW], [awoodard, awoodardPW]]

var userLoginSchema = new Schema({
    username: String,
    password: String,
}, {collection: 'user-login'});

var UserLogin = mongoose.model('UserLogin', userLoginSchema);

router.get('/get-data', function(req, res, next) {
  if(TeacherLogins.contains([UserLogin.find(username), UserLogin.find(password)])){
    res.render('teacher', {username: UserLogin.find(username)});
  }
  else if(StudentLogins.contains([UserLogin.find(username), UserLogin.find(password)])){
        res.render('student', {username: UserLogin.find(username)});
    }


    // UserData.find()
    //     .then(function(doc) {
    //         res.render('', {items: doc});
    //     });
});




module.exports = router;