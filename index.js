var express = require("express");
var mongoose = require('mongoose');
var bodyParser=require('body-parser');
var path = require('path');// connect
var app = express();

 var collegeRouter=
require('./routes/collegeRouter');

 var studentRouter =
 require('./routes/studentRouter');

 
// connect
 app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
 });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));          //connect


 app.use('/api/colleges',collegeRouter);
mongoose.connect("mongodb://localhost/mydb",{
  uerNewUrlParser : true })
  .then(function(){
    console.log("database connected");
  })
  .catch(function(err){
    console.log("could not connect"
    )});


    app.use('/api/students',studentRouter);
mongoose.connect("mongodb://localhost/mydb",{
  uerNewUrlParser : true })
  .then(function(){
    console.log("student database connected");
  })
  .catch(function(err){
    console.log("student database could not connect"
    )});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});
