var express = require('express');
var router = express.Router();
const db = require('../database');

// /cart/getCart
router.get('/getCart',(req, res)=>{
    res.json("test");
})

module.exports = router;