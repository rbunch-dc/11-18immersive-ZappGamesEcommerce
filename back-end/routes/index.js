var express = require('express');
var router = express.Router();
const passport = require('passport');
const pgp = require('pg-promise')();
const config = require('../config');
const connection  = config.pg;
const db = pgp(connection);

const jwt = require('jsonwebtoken');

router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/github/callback',passport.authenticate('github'),(req,res)=>{
  const selectQuery = `SELECT * FROM users WHERE username = $1`;
  const pgPromise = db.query(selectQuery,[req.user.username]);
  // console.log(pgPromise);
  pgPromise.then((data)=>{
    if(data.length === 0){
      console.log("Not Found")
      const insertQuery = `INSERT into users (username) VALUES ($1) returning id`;
      db.query(insertQuery,[req.user.username]).then((id)=>{
        const payload = {id, username: req.user.username}
        const token = jwt.sign(payload, config.jwtSecret, {expiresIn: "1d"});
        sendToken(res,token);
      }).catch((error)=>{
        res.json(error)
      })
    }else{
      console.log("Found")
      const payload = {id: data.id, username: data.username};
      const token = jwt.sign(payload, config.jwtSecret, {expiresIn: "1d"});
      console.log(token)
      sendToken(res, token);
    }
  }).catch((error)=>{
    res.json(error)
  })
})


function sendToken(res,token){
  res.send(
    `
        <script>
        window.opener.postMessage(
            {
            payload: ${JSON.stringify(token)},
            status: 'success'
            },
            window.opener.location
        );
    </script>
    `
    )
}

module.exports = router;
