import React from 'react';
import './App.css';
// import Login from  './composents/auth/login'
import Login from "./composents/authPage/Login";
import Home from "./composents/authPage/HomePage";
import Register from "./composents/authPage/Register";
import VerifyEmail from "./composents/VerifyEmail";
import ForgetPassword from "./composents/authPage/ForgetPassword";
import VerifyEmailforgPass from "./composents/VerifyEmailforgPass";
import Dashboard from "./composents/Dashboard"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./composents/Header";
import Protected from "./composents/Protected"


function App() {
  return (
  
  <Router>
  <div className="">
    <Header/>
     
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/VerifyEmail/:token" element={<VerifyEmail/>}/>
   <Route path="/forgetPassword" element={<ForgetPassword/>}/>
   <Route path="/VerifyEmailforgPass/:token" element={<VerifyEmailforgPass/>}/>


   <Route path="/Dashboard" 
   element=
   {<Protected>
   <Dashboard/>
   </Protected>}
   />



   </Routes>

    </div>
  </Router>
 
  );
}

export default App;
