var mongoose = require('mongoose');
var schema = mongoose.Schema;

var studentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String 
    },
    regno : {
        type : String
    },
    college_id : {
        type : schema.Types.ObjectId,
        ref : "College"
    }
});

var student = mongoose.model('Student', studentSchema);
module.exports = student;