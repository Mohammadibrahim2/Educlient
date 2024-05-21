import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";


const CreateCategory=()=>{
    const [auth,setAuth]=useAuth()
    const[name,setName]=useState('')
  
    const handleSubmit=async(e)=>{
        e.preventDefault();
       
       try{
          const {data}=await axios.post('http://localhost:5000/category',{name})
            if(data?.success){
               console.log({data})
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
        <div className="mt-3  mb-5 lg:w-[90%] w-full shadow-lg">
            <form className="px-8 py-8  border w-full" onSubmit={handleSubmit}>
                    
                    <h1 className="text-indigo-950 font-semibold text-4xl pb-4">Create Category</h1>
                   
                            
                           
                            <div className="form-control  text-black ">
                                <label className="label">
                                    <span className="label-text  text-black " style={{fontSize:"14px"}}>Create Category <strong >*</strong> </span>
                                </label>
                                <input type="name" name="name"
                                 required  placeholder="Write Category Name"
                                  className=" py-2 px-3 bg-white border  "
                                  onChange={(e)=>setName(e.target.value)} />
                              
                            </div>
                          
     
                            <div className="form-control mt-6">
                            <button type="submit" className=" text-white bg-indigo-950 w-full rounded-md py-2 font-semibold hover:bg-yellow-500 hover:text-indigo-950" >
                                Create</button>
                            </div>
                          
                       
                        </form>

        </div>
    )
}

export default CreateCategory