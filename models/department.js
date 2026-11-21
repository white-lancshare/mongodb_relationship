const mongoose= require('mongoose')

const departmentSchema= new mongoose.Schema({
    name:{
    type:String,
    required:true
    },
    
    faculty:{
    type:String,
    required:true
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses"
    }]
},{
    timestamps:true
})


const departmentModel= mongoose.model('department',departmentSchema)

module.exports=departmentModel