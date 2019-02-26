var express = require('express');
var router = express.Router();
const passport = require('passport');
const pgp = require('pg-promise')();
const config = require('../config');
const connection  = config.pg;
const db = pgp(connection);
router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/github/callback',passport.authenticate('github'),(req,res)=>{
  const selectQuery = `SELECT * FROM users`;
  const pgPromise = db.query(selectQuery);
  // console.log(pgPromise);
  pgPromise.then((data)=>{
    console.log(data);
    res.json(data);
  })
  // res.json(req.user);
})

module.exports = router;
