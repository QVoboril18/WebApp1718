var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('student', { title: 'KDS TurnItIn Student' });
});

module.exports = router;
