const mongoose=require('mongoose')
const URI=process.env.MONGODB_URI
const connection= mongoose.connect(URI).then(()=>{
    console.log('connected successfully')
}).catch((e)=>{
    console.log('there is a server error',e.message)
})

module.exports=connection