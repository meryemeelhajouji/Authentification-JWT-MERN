
const express = require('express')
const router = express.Router()
// const m=require('../Middlewares/verification ')

const {login,register,forgetPassword,resetPassword,verifyEmail} = require('../Controllers/authController')

router.post('/login',login)
router.post('/register',register)
router.get('/verify-email/:token',verifyEmail)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword/:token',resetPassword)

// router.get('/get',m.verify(["meryeme@gmail.com"]),(req,res)=>{
//     res.send('hi')
// })



module.exports = router