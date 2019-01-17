var express=require('express');
const app= express();
var router= express.Router();
const College = require('../models/college');


router.get('/',function(req,res){
    College.find({},function(err,college){       //find{} brackets use for filter
        res.json(college);
    });
});

router.post('/',function(req,res) {
    console.log(req.body);
    var college_name = req.body.name;
    const college = new College({
        name : college_name
    });
    college.save().then (function() {
        res.json(college);
    });
});
module.exports = router;