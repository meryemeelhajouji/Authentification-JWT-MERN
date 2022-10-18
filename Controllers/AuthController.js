const User = require('../Models/user')
const Role = require('../Models/role')
const bcrypt=require('bcryptjs')
// const { copy } = require('../Routes/authRoute')
const user = require('../Models/user')
const jwt = require('jsonwebtoken')
const dotenv =require('dotenv')
const ls =require('local-storage')
const nodelailer =require('nodemailer')




// method : post
// route : api/auth/login
// acces : Public
const login =  (req,res) => {


// if(!req.body.text){
//     res.status(400)
//     throw new Error('entre votre text')
// }
    res.status(200).json({message:'function login'})



    // const {body} =req
    // console.log(body)
    // user.findOne({email:body.email}).then((e)=>{
    //     const payload= e
    //     if(e){
    //         bcrypt.compare(body.password,e.password).then((e)=>{
    //             if(e){
    //                 const token=jwt.sign({payload},process.env.SECRET)
    //                 ls('token',token)
    //                 // res.redirect('/get')

    //                 // res.header('token',token)
    //                 res.send(ls('token'))
    //             }else{
    //                 res.status(401).send('passsord invalid // unauthorized')
    //             }
    //             res.send(e)
    //         }) .catch(()=>{
    //             res.send('not hashed')
    //         }) 
          
    //     }else{
    //         res.status(404).send('user not found')
    //     }
    // })

}


// method : post
// route : api/auth/Register
// acces : Public



//mail sender details
var transporter = nodelailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'meryemelhajouji.99@gmail.com',
           pass: 'lziotdvrispagndk'
       }
   });

//verify email 
//route: api/auth/verifyEemail

const verifyEmail = async (req,res) => {
    const token = req.params.token
// console.log('hello')
   
    const userf= await User.findOne({token: token})
//    console.log("r")
      userf.status = "valid"
     await userf.save()
      res.send('email is valide')
   

} 
  


  
 

const register =  (req,res) => {
    const {body} = req
    user.findOne({email:body.email}).then((e)=>{
                if(!e){
                    const token=jwt.sign({id: User._id},process.env.SECRET)

                    body.token  = token
                     bcrypt.hash(body.password,10).then((hashPassword)=>{
                        body.password  = hashPassword
                        const mailOptions = {
                            from: 'meryemelhajouji.99@gmail.com', // sender address
                            to:  body.email , // list of receivers
                            subject: 'Subject of your email', 
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
    resetPassword,
    verifyEmail
}