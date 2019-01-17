var express = require('express');
const app = express();
var router = express.Router();
const Student=require('../models/student');

///localhost:3000/api/students
router.get('/', function(req,res){
    Student.find({})
    .populate("college")
    .then(student => {
        res.json(student);
    }).catch(function(err){
        console.log(err);
    });
});


//save a database
// localhost:3000/api/students
router.post('/',function(req,res) {
    var student_name = req.body.name;
    var student_email =  req.body.email;
    var student_regno = req.body.regno;
    var student_college_id = req.body.college_id;

    var student2 = new Student({               //student2 is object name of Student Model
       name : student_name,
        email : student_email,
        regno : student_regno,
        college_id : student_college_id  
    });
    student2.save().then (function() {
        res.json(student2);
    });
});



// to get a student using a given id

/*router.get('/:id', function(req,res){
    Student.findOne({_id : req.params.id}, function(err,student)
    {
        res.json(student);
    });
});*/


//get
// router.get('/', function(req,res){
//     Student.find({}).populate('college',"name - _id").then(student => {
//         res.json(student);
//     }).catch(function(err){
//         console.log(err);
//     });
// });


//Delete
 //localhost:3000/api/students/id
router.delete('/:id', function(req,res){
    Student.findOneAndDelete({_id : req.params.id}, function(err,student)
    {
        res.send('Deleted successfully');
    });
});

module.exports = router;