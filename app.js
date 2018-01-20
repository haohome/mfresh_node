const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const routerCarosel = require('./router/carosel');
let app = express();
let server = http.createServer(app);
server.listen(3000);
app.use( bodyParser.urlencoded({extended:false}) );
app.use('/carosel', routerCarosel);