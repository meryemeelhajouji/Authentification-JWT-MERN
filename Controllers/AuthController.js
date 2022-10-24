const User = require('../Models/user')
const Role = require('../Models/role')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv =require('dotenv')
const local_storage =require('local-storage')
const nodelailer =require('nodemailer')
// const asyncHandler = require('express-async-handler')





// method : post
// route : api/auth/login
// acces : Public
const login =  (req,res) => {
const {body} = req
User.findOne({email:body.email}).populate({path:'roleid',model:Role}).then((e)=>{
    const user= e
    if(e){
        bcrypt.compare(body.password,e.password).then((e)=>{
            if(e){
                const token = jwt.sign({user},process.env.SECRET,{expiresIn:'120m'})
                local_storage('token',token)
                              res.send(local_storage('token')) 
                            // res.redirect('/hi')                           
            }else{
                res.status(401).send('passsord invalid // unauthorized')
            }           
        }) .catch(()=>{
            res.send('not hashed')
        })     
    }else{
        res.status(404).send('user not found')
    }
})
}





//mail sender details
var transporter = nodelailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'meryemelhajouji.99@gmail.com',
           pass: 'lziotdvrispagndk'
       }
   });



//verify email 
//route: api/auth/verify-email/:token
const verifyEmail = async (req,res) => {
    const token = req.params.token  
    const userf= await User.findOne({token: token})
      userf.status = "valid"
     await userf.save()
      res.send('email is valide')  
} 
  


  
 // method : post
// route : api/auth/Register
// acces : Public
const register =  (req,res) => {
    const {body} = req
    User.findOne({email:body.email}).then((e)=>{
                if(!e){
                    const token=jwt.sign({id: User._id},process.env.SECRET)
                    body.token  = token
                     bcrypt.hash(body.password,10).then((hashPassword)=>{
                        body.password  = hashPassword
                        const mailOptions = {
                            from: 'meryemelhajouji.99@gmail.com', // sender address
                            to:  body.email , // list of receivers
                            subject: 'Verify your email', 
                            html: `<a href="http://${req.headers.host}/api/auth/verify-email/${body.token}">verify your email </a>`//plain ,text body
                          };
                            User.create({...body}).then(()=>{
                                res.status(201).send('created')
                                transporter.sendMail(mailOptions, function (err, info) {
                                    if(err)
                                      console.log(err)
                                    else
                                      console.log(info);
                                 });
                            }).catch(()=>{
                                res.send('not created // something woring ')
                            })
                     }).catch(()=>{
                      res.send('error in hash')

                     })
                }else{
                    res.send('can not create // email déja existe')
                }
                    })

}



//update Password 
//route: /api/auth/updatePassword/:token
const updatePassword = async (req,res) => {
    const token = req.params.token 
    const tokens=jwt.verify(token,process.env.SECRET)
    const newpassword= await bcrypt.hash(req.body.password,10)
    const userf= await User.findOneAndUpdate({_id:tokens.user._id},{'password':newpassword})
      res.send(userf)
   
} 
  
 

// method : post
// route : api/auth/ForgetPassword
// acces : Public
const forgetPassword =  (req,res) => {
    const {body} =req
    User.findOne({email:body.email}).then((e)=>{
        const user= e
        if(e){
            const token = jwt.sign({user},process.env.SECRET,{expiresIn:'30m'})
            local_storage('token', token)
            const mailOptions = {
                from: 'meryemelhajouji.99@gmail.com', 
                to:  body.email , 
                subject: 'Forget Password', 
                html: `<a href="http://${req.headers.host}/api/auth/updatePassword/${token}">update  your password </a>`
              }
              transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
              
        }else{
           res.send('user not found')
        }
    })
}



// method : post
// route : api/auth/resetpassword/:token
// acces : Public
const resetPassword =  (req,res) => {
    res.json(' reset Password function of')
}



module.exports = {
    login,
    register,
    forgetPassword,
    resetPassword,
    verifyEmail,
    updatePassword
}