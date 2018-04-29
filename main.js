const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routerCarosel = require('./router/carosel');
const routerNews = require('./router/news');
let app = express();
let server = http.createServer(app);
server.listen(3000);
app.use( bodyParser.urlencoded({extended:false}) );

app.use( cors({
  origin: ["http://127.0.0.1:8080","http://127.0.0.1:5500","http://localhost:8080"],
  credentials: true
}) );
app.use('/carosel', routerCarosel);
app.use('/news', routerNews);