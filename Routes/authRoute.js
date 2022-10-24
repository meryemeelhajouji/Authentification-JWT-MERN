
const express = require('express')
const router = express.Router()
// const {verify} = require('../Middlewares/verification ')

const {login,register,forgetPassword,resetPassword,verifyEmail,updatePassword} = require('../Controllers/authController')

router.post('/login',login)
router.post('/register',register)
router.get('/verify-email/:token',verifyEmail)
router.post('/forgetpassword',forgetPassword)
router.post('/updatePassword/:token',updatePassword)
router.post('/resetpassword/:token',resetPassword)

// router.get('/hi',verify(),(req,res)=>{
//     // res.send("bonjour   "+req.user.user.name + "  votre role est   "+req.user.user.roleid.type)
//     // router.get('')
// })




module.exports = router