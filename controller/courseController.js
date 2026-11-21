const department=require('../models/department')
const course=require('../models/courses')


exports.createCourse= async(req,res)=>{
try{
    const {id}=req.params
    const {  courseCode, title, creditUnits}=req.body
    const existingDepartment= await department.findById(id)

    if(!existingDepartment){
       return res.status(404).json({
            message:"department not found"
        })
    }
const data={
 courseCode, title, creditUnits,
 department:id
}

const newCourse= new course(data)
console.log(newCourse)
await newCourse.save()

existingDepartment.courses.push(newCourse._id)
await existingDepartment.save()
res.status(201).json({
    message:'course created successfully',
    data:newCourse
})
}catch(e){
    res.status(500).json({
    message:'there is a server error',
    data:e.message
})
}

}

exports.getAllCourses= async(req,res)=>{
    try{
        const allCourse=await course.find().populate('department')
        res.status(200).json({
            message:`all courses found : ${allCourse.length}`,
            data:allCourse
        })
    }catch(e){
            res.status(500).json({
    message:'there is a server error',
    data:e.message
})
    }
}

exports.getOneCourse= async(req,res)=>{
try{
    const {id}=req.params
const existingCourse= await course.findById(id)
if(!existingCourse){
    return res.status(404).json({
        message:'course not found'
    })
}

res.status(200).json({
    message:"course found sucessfully",
    data:existingCourse
})
}catch(e){
 res.status(500).json({
 message:'there is a server error',
 data:e.message
})
}
}

exports.updateCourse= async(req,res)=>{
try{
    const {id}=req.params
    const {courseCode, title, creditUnits}=req.body
    const data={courseCode, title, creditUnits}

    const courseFinder= await course.findById(id)
    if(!courseFinder){
         return res.status(404).json({
        message:'course not found'
    })
    }

    const updated= await course.findByIdAndUpdate(id,data,{new:true})

    res.status(200).json({
        message:'course updated successfully',
        data:updated
    })
}catch(e){
     res.status(500).json({
 message:'there is a server error',
 data:e.message
})
}
}

exports.deleteCourse= async(req,res)=>{
try{
    const id=req.params.id

    const findCourse= await course.findById(id).populate('department')

    console.log(findCourse)

    if(!findCourse){
        return res.status(404).json({
            message:'course not found'
        })
    }
const length=findCourse.department.courses.length
    findCourse.department.courses.splice(0,length)
    console.log(findCourse && findCourse.department);
    await findCourse.department.save()
const deleted= await course.findByIdAndDelete(id)

res.status(200).json({
    message:"deleted successfully",
    data:deleted
})
}catch(e){
         res.status(500).json({
 message:'there is a server error',
 data:e.message
})
}
}