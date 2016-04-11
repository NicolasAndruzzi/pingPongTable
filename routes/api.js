var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

function Users() {
  return knex('users');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  Users().select().then(function (users) {
    res.json(users);
  })
});

module.exports = router;
