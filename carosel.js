const http=require('http');
const express=require('express');
let app=express();
let server=http.createServer(app).listen(3000);