var express = require('express');
var router = express.Router();

/**
*  post '/' will receive 'password' from the tablet,
*  then check whether data is valid first.
*  and query to database 'Users', 'list' table.
*  with received row query again 'attend' table.
*  finally respond to client with row data.
*/
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
