const pool = require('../pool');
const express = require('express');
let router = express.Router();

router.get("/list/:pno",function(req,res){
  //获取页码
  let pno=parseInt(req.params.pno);
  let outPut={
    totalSize:0,    //新闻总条数
    pageSize:5,     //页面显示条数
    pageCount:0,    //总页数
    pno,            //当前页码
    data:[],        //当前页新闻数据
  }
  pool.query("SELECT COUNT(*) AS c FROM mf_news",function(err,result){
    if(err)throw err;
    outPut.totalSize=result[0]['c'];
    res.json(outPut);
  })
})
module.exports = router;