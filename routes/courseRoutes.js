const router= require('express').Router()
const {createCourse,getAllCourses,getOneCourse,updateCourse,deleteCourse}=require('../controller/courseController')
const {createCourseValidation,updateCourseValidation}=require('../middleware/courseValidation')

router.post('/newCourse/:id',createCourseValidation,createCourse)
router.get('/allCourse',getAllCourses)
router.get('/oneCourse/:id',getOneCourse)
router.put('/updateCourse/:id',updateCourseValidation,updateCourse)
router.delete('/deleteCourse/:id',deleteCourse)

module.exports=router