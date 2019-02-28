var express = require('express');
var router = express.Router();
const db = require('../database');
// games is already implied, because this
// middleware is only applied at /games
// /games/getHome
router.get('/getHome',(req, res)=>{
    const gameQuery = `SELECT * FROM games
        WHERE screenshot_url IS NOT NULL
        ORDER BY RANDOM() desc 
        limit 4;
    `;
    db.query(gameQuery).then((results)=>{
        res.json(results)
    }).catch((error)=>{
        if(error){throw error}
    })
})

router.get('/:gid',(req, res)=>{
    const gid = req.params.gid;
    const selectQuery = `SELECT * FROM games WHERE id = $1;`;
    db.query(selectQuery,[gid]).then((gameData)=>{
        res.json(gameData);
    }).catch((error)=>{
        if(error){throw error;}
    })
})

module.exports = router;

