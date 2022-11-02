import React from "react";
import { Navigate } from "react-router-dom";

function Protected(){
const token = localStorage.getItem("token");

           if(!token)
           {
            return<Navigate to ="/Login" />
           }
    return(
        <div className="">
          <center><h1>Welcom to Dashboard</h1></center>  
        </div>
    )
}

export default Protected;