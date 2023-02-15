const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/', index);
app.use('/calculadora', personRoute);
module.exports = app;