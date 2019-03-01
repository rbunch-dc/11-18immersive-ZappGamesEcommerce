var express = require('express');
var router = express.Router();
const db = require('../database');

// /cart/getCart
router.post('/getCart',(req, res)=>{
    // res.json("test");
    const token = req.body.token;
    const getUser = `SELECT id from users WHERE token = $1`
    db.query(getUser,[token]).then((results)=>{
        if(results.length === 0){
            // This is a bad token. User is confused or a liar or a locationvar.
            res.json({
                msg: "badToken"
            })
        }
    }).catch((error)=>{
        if(error){throw error;} 
    })

})

module.exports = router;