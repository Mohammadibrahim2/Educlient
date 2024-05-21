import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {GoThreeBars} from "react-icons/go"
import {FiX } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import logo from "././../../../assets/logo.png";
import { useAuth } from "../../../context/auth";
import { HiMiniBars3BottomRight } from "react-icons/hi2"
const Navbar3=()=>{
    const [scrollnav,setScrollnav]=useState(false)
    const [auth,setAuth]=useAuth()

    const [toggle,setToggle]=useState(true)
    const changenav=()=>{
        if(window.scrollY >48){
            setScrollnav(true)
        }
        else{
            setScrollnav(false)
        }

    }
    window.addEventListener("scroll",changenav)
const menu=[
   
    <Link to="/"><li className=" ">
    <a href="https://templates.hibootstrap.com/fafo/default/index-1-without-revolution.html" target="_blank">Home</a></li></Link>,
    <Link to="/"><li className="">About us</li></Link>,
    <Link to="/services"><li className="k">Our courses</li></Link>,
    <Link to="/"><li className="">Reviews</li></Link>,
    <Link to="/login"><li className="">FAQ</li></Link>,
    <Link to="/myreviews"><li className="">Our Teachers</li></Link>,
    <Link to="/contact" ><li className="">Contact Us</li></Link>,
    <Link to="/profile" >
    <img src={`http://localhost:5000/user/user-photo/${auth?.user?._id}`} 
    className="w-[50px] h-[50px] rounded-full object-cover hidden lg:flex" ></img>
    <span className="capitalize hidden lg:flex">{auth?.user?.name}</span>
    </Link>,
    

]
    return(
        <div className={` z-10  relative w-full px-8 flex flex-row justify-between py-[10px] z-20 text-black  mb-0 w-full`} >
               <div className="left">
          <a href="#">
            <img src={logo} alt="logo" className="w-20"></img>
          </a>

          </div>
            <div className=" hidden lg:flex flex-row justify-around  items-center w-full z-20 list-none links  font-semibold">
               
        
                {menu}

            </div>
            <div className={`font-semibold links lg:hidden absolute ${toggle?"left-[-600px]" :"left-0 "} top-[80px] 
            w-full flex flex-col justify-between items-start
             h-[350px] py-5 px-8 z-40 bg-blue-600 text-white list-none`}>
                {menu}
                
            </div>
           <div className="lg:hidden flex flex-row-reverse items-center">

          
            {toggle?
              
            <button onClick={()=>setToggle(false)} className={` lg:hidden text-3xl ${scrollnav?"  activetext":" unactivetext"}`}><HiMiniBars3BottomRight /></button>:
            <button onClick={()=>setToggle(true)} className={` lg:hidden text-3xl  ${scrollnav?"  activetext":" unactivetext"}`}><FiX/></button>
              
        }
         
           
        <Link to="/profile" >
        <img src={`http://localhost:5000/user/user-photo/${auth?.user?._id}`} 
         className=" w-[50px] h-[50px] rounded-full object-cover mr-3" ></img></Link>
         <div>
        <h2 className="capitalize mr-2 font-semibold">{auth?.user?.name}</h2>
    </div>
  
          </div>
        </div>
    )
}
export default Navbar3
