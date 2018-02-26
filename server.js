//initalize express app
var express = require('express');
var app = express();

//set up body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//connect static and views folders
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
//designate view engine
app.set('view engine', 'ejs');

//run schema to prep database
require('./server/config/schema')

//configure routes
var router = require('./server/config/routes')
router(app)

//activate server on localhost port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
