const department=require('../models/department')
const course=require('../models/courses')

exports.createDepartment=async(req,res)=>{
try{
const {name,faculty}=req.body
  const data= {
    name,faculty
  }
const newDepartment= await department.create(data)

res.status(201).json({
    message:'department created successfully',
    data:newDepartment
})

}catch(e){
res.status(500).json({
    message:'there is a server error',
    data:e.message
})
}
}

exports.allDepartment=async(req,res)=>{
    try{
  const all= await department.find().populate('courses')

  res.status(200).json({
    message:`all departments found : ${all.length}`,
    data:all
  })

    }catch(e){
        res.status(500).json({
            message:"there is a server error",
            error:e.message
        })
    }
}

exports.oneDepartment=async(req,res)=>{
    try{
        const {id}=req.params
  const existingDepartment= await department.findById(id).populate('courses')
    if(!existingDepartment){
        return res.status(404).json({
            message:"department not found"
        })
    }
    res.status(200).json({
        message:"department found successfully",
        data:existingDepartment
    })

    }catch(e){
        res.status(500).json({
            message:"there is a server error",
            error:e.message
        })
    }
}

exports.updateDepartment=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,faculty}=req.body
        const data={name,faculty}

        const departmentFinder= await department.findById(id)
        if(!departmentFinder){
             return res.status(404).json({
            message:'department not found'
        })
        }

        const updated= await department.findByIdAndUpdate(id,data,{new:true})

        res.status(200).json({
            message:'department updated successfully',
            data:updated
        })
    }catch(e){
         res.status(500).json({
     message:'there is a server error',
     data:e.message
 })
    }
}

exports.deleteDepartment=async(req,res)=>{
    try{
        const {id}=req.params
        const departmentFinder= await department.findById(id).populate('courses')
        if(!departmentFinder){
             return res.status(404).json({
            message:'department not found'
        })
        }
        console.log(departmentFinder)

        const deleted= await department.findByIdAndDelete(id)
        const length=departmentFinder.courses.length
        departmentFinder.courses.splice(0,length)
   

        res.status(200).json({
            message:'department deleted successfully',
            data:deleted
        })
    }catch(e){
        res.status(500).json({
            message:"there is a server error", 
            error:e.message
        })
    }
}