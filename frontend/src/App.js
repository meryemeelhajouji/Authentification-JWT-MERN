import React from 'react';
import './App.css';
// import Login from  './composents/auth/login'
import Login from "./authPage/login";
import Register from "./authPage/Register";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./composents/Header";


function App() {
  return (
  
  <Router>
  <div className="">
    <Header/>
     
   <Routes>
   <Route path="/" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>


   </Routes>

    </div>
  </Router>
 
  );
}

export default App;
