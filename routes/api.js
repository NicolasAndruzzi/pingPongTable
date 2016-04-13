var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var playerOneScore = 0;
var playerTwoScore = 0;


// function Users() {
//   return knex('users');
// }

/* GET home page. */
// router.get('/', function(req, res, next) {
//   Users().select().then(function (users) {
//     res.json(users);
//   })
// });

router.get('/scores/:playerID/:amount', function(req, res, next) {
  if(req.params.playerID == 1) {
    playerOneScore += req.params.amount
  }
  if(req.params.playerID == 2) {
    playerTwoScore += req.params.amount
  }
  res.send(200);
});

router.get('/scores', function(req, res, next) {
  res.send({playerOneScore,playerTwoScore});
});

module.exports = router;
