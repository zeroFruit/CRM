var express = require('express');
var router = express.Router();

/**
*  ROUTE '/enroll'
*  will deal with register new user.
*  fill the form then INSERT to 'Users'db 'list' table.
*/
router.get('/enroll', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/enroll', function(req, res, next) {
   // get form data, then INSERT to db

});

/**
*  ROUTE 'list'
*  show users list
*/
router.get('/list', function(req, res, next) {
   // get 'list' table rows, then render
});

/**
*  ROUTE 'attend'
*  show list of users who are attend
*/
router.get('/attend', function(req, res, next) {
   
});


module.exports = router;
