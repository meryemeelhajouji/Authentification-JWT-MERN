
const express = require('express')
const router = express.Router()
const {verify} = require('../Middlewares/verification ')

const {login,register,forgetPassword,resetPassword,verifyEmail} = require('../Controllers/authController')

router.post('/login',login)
router.post('/register',register)
router.get('/verify-email/:token',verifyEmail)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword/:token',resetPassword)

router.get('/hi',verify(),(req,res)=>{
    res.send(req.user.user.roleid.type)
})




module.exports = router