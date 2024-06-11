const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "babyName":{type:String,required:true},
        "gender":{type:String,required:true},
        "motherName":{type:String,required:true},
        "fatherName":{type:String,required:true},
        "address":{type:String,required:true},
        "dob":{type:String,required:true},
        "phno":{type:String,required:true},
        "intrest":{type:String,required:true},
        "img":{type:String,required:true}
    }
)

let playschoolmodel = mongoose.model("playschool",schema);
module.exports = {playschoolmodel}