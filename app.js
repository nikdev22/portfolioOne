const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var indexRouter = require('./router/index');


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use("/",indexRouter);


app.listen(process.env.PORT, process.env.IP, ()=>{
  console.log('server started');
    
  );
