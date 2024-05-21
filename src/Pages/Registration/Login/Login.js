import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/auth";
import CommonDesign from "../../../component/designComponent";

const Login=()=>{
    const navigate=useNavigate()
    const [auth,setAuth]=useAuth()
    const[email,setEmail]=useState('')
   
    const[passwordHash,setPassword]=useState('')
 
    
 

    const handleSubmit=async(e)=>{
        e.preventDefault();
       
       try{
        const userData=new FormData()
        userData.append("email",email)
        userData.append("passwordHash",passwordHash)
      
          const {data}=await axios.post('http://localhost:5000/user/login',{email,passwordHash})
    
            if(data?.success){
                setAuth({
                    ...auth,
                    user:data?.user,
                    token:data?.token
                })
               console.log({data})
                localStorage.setItem("auth",JSON.stringify(data))
                navigate("/")
                toast.success(data.message)
             
            }
            else{
                toast.error(data.message)
            }
      
       }
       catch(error){
        console.log(error)

       }
        
        

    }
    const defining = {
        com: "Home",
        h: "Lp Profle",
        sh: "Login"
    }
    return(
        <div className=" w-full mx-auto">
              <CommonDesign defining={defining} />
            <form className=" mt-12  mb-5 px-4 py-8 lg:w-1/3 mx-auto border w-full" onSubmit={handleSubmit}>
                    
                    <h1 className="text-indigo-950 font-semibold text-4xl pb-4">Login</h1>
                   
                            
                           
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Email  <strong >*</strong> </span>
                                </label>
                                <input type="email" name="email"
                                 required  placeholder="Enter email"
                                  className=" py-2 px-3 bg-white border  "
                                  onChange={(e)=>setEmail(e.target.value)} />
                              
                            </div>
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Password </span>
                                </label>
                                <input type="password" name="password"
                                 required 
                                  onChange={(e)=>setPassword(e.target.value)} 
                                   placeholder="Enter password"
                                    className=" py-2 px-3 bg-white border  " />
                              
                            </div>
     
                            <div className="form-control mt-6">
                            <button type="submit" className="  text-white bg-indigo-950 w-full rounded-md py-2 font-semibold hover:bg-yellow-500 hover:text-indigo-950"  >Login</button>
                            </div>
                            <h1 className="mt-2 text-indigo-950 font-semibold">Create an account? then <Link to="/register">Register</Link></h1>
                       
                        </form>

        </div>
    )
}

export default Login