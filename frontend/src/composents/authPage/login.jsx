import React from "react";
import {useState}from 'react';
import  axios from 'axios';
import { useNavigate } from "react-router-dom";
import Alert from '../../Utils/Alert'

function Login(){
  const navigate = useNavigate()
  const [user, setUser] = useState({
  })
  
  const [error, setError] = useState(false)


  const onchange = (e) => {
      setUser((prevState) =>({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  const onSubmit = (e) => {
      console.log(user);
      e.preventDefault()
      axios.post("http://localhost:5000/api/auth/login",user)
      .then( (response) => {
       
        localStorage.setItem("token", response.data.token) 
        localStorage.setItem("role", response.data.role) 

  
        console.log(response.data.role)
        navigate("/Dashboard")
      })
      .catch(function (error) {
        setError(error.response.data.message)
        // console.log(error);
      });
  }



     
return(
<div>


<div className="Auth-form-container  ">
<div className="Auth-form">

 <div className="Auth-form-content">
   {/* <img src={logo} alt='jgjhg'className='rounded-circle w-50 h-50 ' /> */}
   <h3 className="Auth-form-title">Login</h3>
   {/* <p className="text-center">Please create your account </p> */}
   <Alert error={error} />
       <form onSubmit={onSubmit}>
     
      <div className="form-group mt-3">
          <label>Email</label>
          <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter your email"
              name="email"
              id="email"
              // value={email}
              onChange={onchange}
           />
      </div>
      <div className="form-group mt-3">
          <label>Password</label>
          <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter your password"
              name="password"
              id="password"
              // value={password}
              onChange={onchange}
           />
      </div>
     
  
      <div className="form-group d-grid gap-2 mt-3">
          <button 
              type="submit" 
              className="btn btn-dark">
              Submit
          </button>
      </div>
  
   <p className="forgot-password text-right mt-2">
     Forget password?
   </p>
       </form>
 </div>
</div>
</div>
</div>
)
}

export default Login;