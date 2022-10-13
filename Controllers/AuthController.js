// method : post
// route : api/auth/login
// acces : Public
const login =  (req,res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('entre votre text')
}
    res.status(200).json({message:'function login'})
}

// method : post
// route : api/auth/Register
// acces : Public
const register =  (req,res) => {
    res.json('register function')
}
// method : post
// route : api/auth/ForgetPassword
// acces : Public
const forgetPassword =  (req,res) => {
    res.json(' Forget Password function')
}
// method : post
// route : api/auth/resetpassword/:token
// acces : Public
const resetPassword =  (req,res) => {
    // token = req.params.id
    res.json(' reset Password function of')
}



module.exports = {
    login,
    register,
    forgetPassword,
    resetPassword
}