const mongoose=require('mongoose')
const User = new mongoose.Schema({
name:
    {
        type:String
    },
password:
    {
        type:String
    }

})
const user = mongoose.model('user',User)
module.exports=user
