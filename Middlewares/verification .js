
// const jwt = require('jsonwebtoken')
// const dotenv =require('dotenv')
// const ls =require('local-storage')

// function verify(access){
//     return(req,res,next)=>{
//         if(ls('token')){
//             // res.send('authentificated ').status(200)
//             if(jxt.verify(ls('token'),process.env.SECRET))
//             {
//                 // res.send('hi')
//                 const token=jwt.verify(ls('token'),process.env.SECRET)
//                 req.payload=token
//                  if(access.includes(req.payload.payload.email)){
//                     // res.send('hello')
//                     next()
                    
//                  }else
//                  {
//                     res.send('anauthorised // ma halch token')
//                  }
//             }
//         }else{
//             res.send('anauthenticated // token is not her')
//         }
//     }
    
// }

// module.exports={verify}

