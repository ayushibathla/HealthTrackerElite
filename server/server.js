const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require("./config/mongooseconfig");
const activityRoutes = require('./routes/actitvityroutes');
const userRoutes = require('./routes/userroutes');

const app = express();

app.use('/public',express.static('public'));
// Any files within this directory can be accessed via the /public route in your application.

app.use(cookieParser(),express.json(),express.urlencoded({extended:true}));

app.use(cors({credentials:true,origin:"http://localhost:3000"})); // server should accept and respond to requests that include credentials, such as cookies, authorization headers,  and Only allow requests from this origin

app.use('/user',activityRoutes.router);
app.use('activity',userRoutes.router);

const port = process.env.PORT;
app.listen(port,()=>{
  console.log('Server is running');
})

