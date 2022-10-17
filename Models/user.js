const mongoose=require('mongoose')


const User = new mongoose.Schema({
name:
    {
        type:String,
        required:true,
        minLength:[4,'Name should be minimum of 4 characters']
    },
email:
    {
        type:String,
        required:true,
        unique:true,
    },
password:
    {
        type:String,
        required:true,
        minLength:[8,'Password should be minimum of 8 characters']
    },
status:
    {
        type:String
    },
token:
    {
        type:String
    },
    

  
})
const user = mongoose.model('user',User)
module.exports=user
