const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 3000
const db=require('./database/database')
const courseRouter=require('./routes/courseRoutes')
const departmentRouter=require('./routes/departmentRoutes')
app.use(express.json())
app.use(courseRouter)
app.use(departmentRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})