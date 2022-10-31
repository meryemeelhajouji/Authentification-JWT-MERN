import React from "react";
import {useState}from 'react';
import  axios from 'axios'


function Register(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
        })
        const { name, email, password, password2 } = formData

        const onchange = (e) => {
            setFormData((prevState) =>({
                ...prevState,
                [e.target.name]:e.target.value,
            }))
        }

        const onSubmit = (e) => {
            e.preventDefault()
            axios.post("http://localhost:5000/api/auth/register",formData)
            .then( (response) => {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }


    return(
      <div>

      <div className="Auth-form-container  ">
     <div className="Auth-form">

       <div className="Auth-form-content">
         {/* <img src={logo} alt='jgjhg'className='rounded-circle w-50 h-50 ' /> */}
         <h3 className="Auth-form-title">Register</h3>
         <p className="text-center">Please create your account </p>
             <form onSubmit={onSubmit}>
             <div className="form-group mt-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter your name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onchange}
                 />
            </div>
            <div className="form-group mt-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    value={email}
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
                    value={password}
                    onChange={onchange}
                 />
            </div>
            <div className="form-group mt-3">
                <label>Confirm Password</label>
                <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter your password"
                    name="password2"
                    id="password2"
                    value={password2}
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
           Forgot password?
         </p>
             </form>
       </div>
     </div>
   </div>
     </div>
    )
}

export default Register;