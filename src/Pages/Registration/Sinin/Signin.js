import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



const Register=()=>{
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[passwordHash,setPassword]=useState('')
    const[isAdmin,setisAdmin]=useState(' ')
    const[photo,setPhoto]=useState('')
    const[role,setRole]=useState('')
   
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault();
    
       
       try{
        const userData=new FormData()
        userData.append("name",name)
        userData.append("email",email)
        userData.append("passwordHash",passwordHash)
        userData.append("isAdmin",isAdmin)
        userData.append("phone",phone)
        userData.append("photo",photo)
        userData.append("role",role)
      

       
       
          const {data}=await axios.post('http://localhost:5000/user/register',userData)
    
            if(data?.success){
                navigate("/login")
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
    return(
        <div className="mt-12  mb-5 lg:w-1/3 w-full shadow-lg">
            <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>
                    
                    <h1 className="text-indigo-950 font-semibold text-4xl pb-4">Register</h1>
                    {/* <div className="mb-3 w-full h-auto">
                            {
                                photo&&(
                                    <div className="text-center w-[100px] h-[100px]  border mx-auto"> 
                                    <img src={URL.createObjectURL(photo)} alt="user_iamge" className="w-full h-full object-cover"/>
                                    </div>
                                )
                            }

                           </div> */}

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text   text-black " style={{fontSize:"14px"}}>Full Name  <strong >*</strong> </span>
                                </label>
                                <input type="name" name="name" 
                                 placeholder="Full Name"
                                  className=" py-2 px-3 bg-white border " 
                                  onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="form-control  text-black overflow-hidden ">
                                <label className="label">
                                    <span className="btn btn-outline-primary w-full  text-black " style={{fontSize:"14px"}}>{photo? photo.name:"Upload Photo"}</span>
                                    <input type="file"
                                     name="photo"
                                     accept="image/*" 
                                    onChange={(e)=>setPhoto(e.target.files[0])} className="w-full py-2 px-3  border hidden  " />
                                </label>
                              
                              
                            </div>
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
                                   placeholder="enter password"
                                    className=" py-2 px-3 bg-white border  " />
                              
                            </div>
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Mobile Number </span>
                                </label>
                                <input type="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone Number" className=" py-2 px-3 bg-white border  " />
                              
                            </div>
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Admin </span>
                                </label>
                                <select type="phone" name="isAdmin"   onChange={(e)=>setisAdmin(e.target.value)}
                                 className=" py-2 px-3 bg-white border  ">
                                    <option value={true} >Yes</option>
                                    <option value={false}>No</option>
                                </select>
                              
                            </div>
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Role </span>
                                </label>
                                <select type="text" name="role"   onChange={(e)=>setRole(e.target.value)}
                                 className=" py-2 px-3 bg-white border  ">
                                    <option disabled selected>Select a role</option>
                                    <option value="teacher" >Teacher</option>
                                    <option value="student">Student</option>
                                    <option value="gardian">Gardian</option>
                                    <option value="other">Other</option>
                                </select>
                              
                            </div>
                         

                           
                            <div className="form-control mt-6">
                            <button type="submit" className="  text-white bg-indigo-950 w-full rounded-md py-2 font-semibold hover:bg-yellow-500 hover:text-indigo-950"  >Register</button>
                            </div>
                            <h1 className="mt-2 text-indigo-950 font-semibold">All ready have an account? then <Link to="/login">Log in</Link></h1>
                       
                        </form>

        </div>
    )
}

export default Register
