
const jwt = require('jsonwebtoken')
const dotenv =require('dotenv')
const local_storage =require('local-storage')


function verify(){
   
  
    return(req,res,next)=>{


        if(local_storage('token')){
       

            if(jwt.verify(local_storage('token'),process.env.SECRET))
            {
                

                
                let  token=jwt.verify(local_storage('token'),process.env.SECRET)
                req.user=token
                console.log(req.user)
               
                    next()
            }
        }else{
            res.send('anauthenticated // token is not her')
        }
    }
    
}

module.exports={verify}

