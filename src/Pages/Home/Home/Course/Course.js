import React, { useEffect, useState } from "react";
import card from "../../../../assets/campus.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";

const Course= () => {
    
    const [active,setActive]=useState("All Courdes")
    
    const [courses,setCourses]=useState([])
   

   const getAllCorses=async()=>{
    try{
        const {data}=await axios.get('http://localhost:5000/course/get-courses')

        if(data?.success){
            setCourses(...courses,data?.courses)
            toast.success(data?.message)
    
        }
    } 
catch(error){
console.log(error)

}
   }
useEffect(() => {
    getAllCorses()
}, [])


 
   
 


 

    return (
        <div className="main-container">
            <div><h1 className="text-center py-8 lg:text-3xl text-xl font-bold ">
                Most Popula <span className="text-blue-600">Courses</span></h1></div>

        

    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-9 py-4 lg:w-[95%] mx-auto">
        { courses&&
            courses?.slice(0,6).map(c=> <div class="card card-box lg:w-80 w-[95%] mx-auto  bg-white hover:shadow-2xl h-[400px] shadow-lg">
           
        <figure class=" w-full h-1/3 relative ">
          <img src={`http://localhost:5000/course/course-photo/${c?._id}`} alt="Shoes" className="w-full h-full" />
          <span className="absolute left-[20px] top-[15px] 
           bg-blue-600 text-white shadow-md font-semibold   text-md
           capitalize px-2 py rounded-sm">{c?.name}</span>
        </figure> 
        <div class="pt-2 px-4   text-black  ">
        <Link to={`singleCourse/${c?._id}`}> <h2 class=" text-xl font-bold capitalize text-indigo-950  ">
            {c?.tittle}</h2></Link>
          
          <div class=" font-semibold w-full my-2 capitalize" >
            <p><span>{c?.description.substring(0, 40)}...
             <Link to={`singleCourse/${c?._id}`}> 
          Read more </Link></span> </p>
          </div>
          <div className="author flex flex-row my-2 place-items-center bg-yellow h-auto">
          <img src={`http://localhost:5000/user/user-photo/${c?.author?._id}`} 
    className="w-[45px] h-[45px] rounded-full object-cover " ></img>
    <span className="capitalize  font-semibold ml-2">{c?.author?.name}</span>
    
          </div>
          <span className="w-[98%] mx-auto bg-gray-400 h-[1px] block my-2"></span>
          <div className="extra sectuion flex flex-row justify-between font-semibold">
            <div className="flex flex-row">

          <span className="flex flex-row place-items-center font-semibold "><FaBook className="mr-2"/> 5</span>
          <span className="flex flex-row place-items-center font-semibold ml-2"><FaBook className="mr-2"/> 5</span>
          
          </div> 
          <span>Free</span>
          </div>
        </div>
      </div>
      )
        }
    </div>


<div className="text-center">
   <Link to="/allcourse">
     <button className=" bg-gradient-to-r from-blue-950 to-blue-500  
     text-white px-5 py-2 my-6 rounded-md font-semibold">VIEW ALL COURSES</button></Link>
</div>

        </div>
    )

}
export default Course