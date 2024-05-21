import React from "react";
import { useAuth } from "../../context/auth";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute=({children})=>{
    const [auth,setAuth,loading]=useAuth()
    const location=useLocation()

if(loading){
    return <span className="loading loading-spinner text-primary"></span>
}
    if(auth?.user && auth?.user?._id){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
}
export default PrivateRoute