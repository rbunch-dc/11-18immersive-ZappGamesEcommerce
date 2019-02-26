var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/auth/github',passport.authenticate('github'));

module.exports = router;
