var express = require('express');
var app = express();

app.get('/',function(req,res)
{
    res.render('regi');
});

module.exports = app;