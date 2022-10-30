import React from "react";

function Login(){
    return(
      <div>

      <div className="Auth-form-container  ">
     <form className="Auth-form">

       <div className="Auth-form-content">
         {/* <img src={logo} alt='jgjhg'className='rounded-circle w-50 h-50 ' /> */}
         <h3 className="Auth-form-title">Sign In</h3>
         <div className="form-group mt-3">
           <label>Email address</label>
           <input
             type="email"
             className="form-control mt-1"
             placeholder="Enter email"
           />
         </div>
         <div className="form-group mt-3">
           <label>Password</label>
           <input
             type="password"
             className="form-control mt-1"
             placeholder="Enter password"
           />
         </div>
         <div className="d-grid gap-2 mt-3">
           <button type="submit" className="btn btn-primary">
             Submit
           </button>
         </div>
         <p className="forgot-password text-right mt-2">
           Forgot password?
         </p>
       </div>
     </form>
   </div>
     </div>
    )
}

export default Login;