import React from 'react';
import './App.css';
// import Login from  './composents/auth/login'
import Login from "./composents/authPage/Login";
import Home from "./composents/HomePage";
import Register from "./composents/authPage/Register";
import VerifyEmail from "./composents/VerifyEmail";
import ForgetPassword from "./composents/authPage/ForgetPassword";
import VerifyEmailforgPass from "./composents/VerifyEmailforgPass";
import Dashboard from "./composents/authPage/Dashboard";
import Profile from "./composents/users/Profile";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./composents/layout/Header";
import ProtectRoute from "./Utils/ProtectRoute"
import NewPassword from "./composents/authPage/NewPassword"



function App() {
  return (
  
  <Router>
  <div className="">
    
    <Header/>
     
   <Routes>
    {/* public routes */}
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/VerifyEmail/:token" element={<VerifyEmail/>}/>
   <Route path="/forgetPassword" element={<ForgetPassword/>}/>
   <Route path="/VerifyEmailforgPass/:token" element={<VerifyEmailforgPass/>}/>
   <Route path="/newPassword/:token" element={<NewPassword/>}/>


   {/* private routes */}
   <Route  element={<ProtectRoute/>}>
    <Route path="/Dashboard" element={<Dashboard/>} />
    <Route path="/profile" element={<Profile/>} />
   </Route>




   </Routes>

    </div>
  </Router>
 
  );
}

export default App;
