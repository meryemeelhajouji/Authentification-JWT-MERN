import React, {useState} from 'react'
import {useParams, Navigate} from 'react-router-dom';
import axios from 'axios';

function VerifyEmailforgPass(req, res) {

  const [verifyEmail, setVerifyEmail] = useState({})
  
    const api = axios.create({
		baseURL: "http://localhost:5000/api/"
	   });

    const { token } = useParams();
    console.log(token);

    
    api.get(`auth/verify-email/${token}`)
    .then((response)=>{
        res.send(response.data);
        setVerifyEmail(true)
    }).catch((error)=>{
       res.send(error.response.data);
      
    })


  return (
    <div>
       {verifyEmail &&  <Navigate to={'/newPassword/'+token} replace={true} />}
    </div>
  )
}

export default VerifyEmailforgPass