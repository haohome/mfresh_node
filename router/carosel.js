const pool = require('../pool');
const express = require('express');
let router = express.Router();

router.get('/product',function(req,res){
  pool.query("SELECT * FROM mf_product WHERE pid<=5 ",function(err,result){
    res.json(result)
  })
})

module.exports = router;