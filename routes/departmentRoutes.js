const router= require('express').Router()
const {createDepartment,allDepartment,oneDepartment,updateDepartment,deleteDepartment}=require('../controller/departmentController')
const {createDepartmentValidation,updateDepartmentValidation}=require('../middleware/departmentValidation')

router.post('/newDepartment',createDepartmentValidation,createDepartment)
router.get('/allDepartment',allDepartment)
router.get('/oneDepartment/:id',oneDepartment)
router.put('/updateDepartment/:id',updateDepartmentValidation,updateDepartment)
router.delete('/deleteDepartment/:id',deleteDepartment)

module.exports=router