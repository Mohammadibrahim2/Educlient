import React, { useEffect, useState } from "react";
import card from "../../../../assets/campus.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import moment from 'moment';
const  Posts= () => {
    
    const [active,setActive]=useState("All Courdes")
    
    const [posts,setPosts]=useState([])
   

   const getAllPosts=async()=>{
    try{
        const {data}=await axios.get('http://localhost:5000/posts/get-posts')

        if(data?.success){
            setPosts(...posts,data?.posts)
            toast.success(data?.message)
    
        }
    } 
catch(error){
console.log(error)

}
   }
useEffect(() => {
    getAllPosts()
}, [])


 
   
 


 

    return (
        <div className="main-container ">
            <div >
                <h1 className="text-center pt-6 py-2">LATEST NEWS</h1>
        <h1 className="text-center  lg:text-3xl text-xl font-bold">
        Have a look on our <span className="text-blue-600 ">News</span></h1></div>

    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-9 py-4 lg:w-[95%] mx-auto">
        { posts&&
        posts?.map(p=>
         <div class="card card-box lg:w-80 w-[95%] mx-auto  bg-white h-[330px] ">
           
        <figure class=" w-full h-2/3 relative ">
          <img src={`http://localhost:5000/posts/posts-photo/${p?._id}`} alt="Shoes" className="w-full h-full" />
      
        </figure> 
        <div class="pt-2 px-4   text-black  ">
            <p className="flex place-items-center text-md font-semibold">
                
            <span className="mr-2 text-blue-600"><SlCalender />
            </span>{moment(p?.createdAt).format(' Do MMMM  YYYY')}</p>
        <Link to={`singleCourse/${p?._id}`}>
             <h2 class=" text-xl font-bold capitalize text-indigo-950 hover:text-blue-600  ">
            {p?.tittle}</h2></Link>
          
          <div class=" font-semibold w-full my-2 capitalize" >
            <p><span>{p?.description.substring(0, 40)}...
             <Link to={`singleCourse/${p?._id}`}> 
          Read more </Link></span> </p>
          </div>
         
        </div>
      </div>
      )
        }
    </div>

        </div>
    )

}
export default Posts