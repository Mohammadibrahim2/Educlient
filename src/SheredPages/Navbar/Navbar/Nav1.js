import React from "react";
import {FaFacebook , FaLinkedinIn , FaTwitter, FaInstagramSquare} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail,IoLocation } from "react-icons/io5";
import { useAuth } from "../../../context/auth";
const Navbar1=()=>{
  const [auth,setAuth]=useAuth()
  const handleLogout=()=>{
     setAuth({
      ...auth,
      user:null,
      token:""
    })
    localStorage.removeItem("auth")
  }
    return(
   
  <>
<div className="bg-indigo-950  flex flex-row justify-between lg:px-12   text-white w-full py-2 lg:py-0  " >
  <div className="lg:flex flex-row items-center py-2 hidden ">
  <h2 className="flex flex-row items-center">
  <span className="pr-2 text-yellow-500"><IoMail /></span> Zahid321@gmail.com</h2>
  <h2 className=" text-extrabold  flex flex-row items-center ml-6 ">
    <span className="text-yellow-500 mr-2"><BiSolidPhoneCall /></span>+8899854767</h2>

  </div>
 
   
    <div className="flex flex-row items-center  w-1/2 mx-auto lg:mx-0 lg:w-1/3 ">
    
        <div className="social-icons flex flex-row items-center   w-auto lg:mr-8 ">
          <span className="mr-2 hidden lg:block" >Follow Us : </span>
     <a href="https://thepixelcurve.com/wp/edubin/lp-home-classic-lms/" target="_blank">  <FaFacebook /></a>
     <Link to="two" className="mx-3">   <FaTwitter /></Link>
     <Link to="link">   <FaLinkedinIn /></Link>
     <a href="" target="_blank" className="mx-3">   <FaInstagramSquare /></a>
        
        </div>
        {
          !auth.user? (
            <>
            <Link to="/register" className="text-md text-yellow-500 font-semibold">Signin / Join Now</Link>
            </>
          ):(<Link to="/login"
          onClick={handleLogout}
           className="text-md text-yellow-500 font-semibold">Log out</Link>)
        }
        
      </div>
    
 

</div>
  </>
      
    )

}
export default Navbar1