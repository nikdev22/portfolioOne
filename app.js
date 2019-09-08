const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var indexRouter = require('./router/index');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.get("/",indexRouter);

app.listen(8080);