var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/github',passport.authenticate('github'));

router.get('/auth/github/callback',passport.authenticate('github'),(req,res)=>{
  res.json(req.user);
})

module.exports = router;
