//app.js
//********EVERYONE READ THIS********
//Open your console and move to file with folder containing MongoData
//MAKE SURE IT IS UNZIPPED
//type "mongod --dbpath MongoData" before running program
//API KEY: AIzaSyAftGHvJnejXQm5k1jiLiBRsRwm5SXqzm8
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


//setup express app
const app = express();
app.use(express.static(__dirname + '/public')); //For CSS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs_views'));
app.use(express.urlencoded({extended: true}));

//to use CSS
//app.use('/assets', express.static('assets'));



//start database
require('./models/database');

//export models
const Locations = require('./models/locations');

//use res.render to load up ejs file
//home page(only page in our case)
app.get('/', function(req,res){
    
    Locations.find({}, (err, results) => {
        if (err) {
            return res.render.status(500).send('<h1>ERROR</h1>');
        } else{
            res.render('homePage',{results, Locations, req});
        }
    });
});


//local host connection
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
	console.log('Server started at port', port);
});