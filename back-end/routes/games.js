var express = require('express');
var router = express.Router();

// games is already implied, because this
// middleware is only applied at /games
// /games/getHome
router.get('/getHome',(req, res)=>{
    res.json("Games");
})

module.exports = router;

