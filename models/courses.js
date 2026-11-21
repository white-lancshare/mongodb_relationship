const mongoose= require('mongoose')

const courseSchema= new mongoose.Schema({
    courseCode:{
    type:String,
    required:true
    },
    
    title:{
    type:String,
    required:true
    },
   creditUnits:{
    type:String,
    required:true
    },
  department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"department"
    }
},{
    timestamps:true
})


const courseModel= mongoose.model('courses',courseSchema)

module.exports=courseModel