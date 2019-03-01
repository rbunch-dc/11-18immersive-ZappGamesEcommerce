var express = require('express');
var router = express.Router();
const db = require('../database');

// /cart/getCart
router.post('/getCart',(req, res)=>{
    // res.json("test");
    const token = req.body.token;
    console.log(token)
    const getUser = `SELECT id from users WHERE token = $1`
    db.query(getUser,[token]).then((results)=>{
        if(results.length === 0){
            // This is a bad token. User is confused or a liar or a locationvar.
            res.json({
                msg: "badToken"
            })
        }else{
            const uid = results[0].id;
            const getCartTotals = `SELECT * FROM cart 
                INNER JOIN games on games.id = cart.gid
                WHERE uid = $1`;
            db.query(getCartTotals,[uid]).then((results)=>{
                const totals = `SELECT SUM(price) as totalPrice, count(price) as totalItems
                    FROM cart
                    INNER JOIN games on games.id = cart.gid
                    WHERE uid = $1`;
                    db.query(totals,[uid]).then((totalNumbers)=>{
                        const responseData = {
                            contents: results,
                            total: totalNumbers.totalPrice,
                            items: totalNumbers.totalItems
                        }
                        res.json(responseData);
                    })
            })
        }
    }).catch((error)=>{
        if(error){throw error;} 
    })
})

// /cart/getCart
router.post('/updateCart',(req, res)=>{
    // res.json("test");
    console.log(req.body);
    const token = req.body.token;
    const itemId = req.body.itemId
    const getUser = `SELECT id from users WHERE token = $1`
    db.query(getUser,[token]).then((results)=>{
        if(results.length === 0){
            // This is a bad token. User is confused or a liar or a locationvar.
            res.json({
                msg: "badToken"
            })
        }else{
            // this is a legit token. I know what user this is.
            const uid = results[0].id;
            const addToCartQuery = `INSERT INTO cart (uid,gid,dateadded)
                VALUES
                ($1,$2,NOW())`
            db.query(addToCartQuery,[uid,itemId]).then(()=>{
                const getCartTotals = `SELECT * FROM cart WHERE uid = $1`
                db.query(getCartTotals,[uid]).then((results)=>{
                    res.json(results)
                }).catch((error)=>{
                    if(error){throw error;}
                })
            }).catch((error)=>{
                if(error){throw error;}
            })
        }
    }).catch((error)=>{
        if(error){throw error;} 
    })
})


module.exports = router;