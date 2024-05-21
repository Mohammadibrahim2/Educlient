import React, { useEffect, useState } from "react";
import card from "../../../../assets/campus.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CommonDesign from "../../../../component/designComponent";

const AllCourse= () => {
    
    const [active,setActive]=useState("All Courdes")
    
    const [courses,setCourses]=useState([])
   

   const getAllCorses=async()=>{
    try{
        const {data}=await axios.get('http://localhost:5000/course/get-courses')

        if(data?.success){
            setCourses(data?.courses)
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


 
   
const defining = {
    com: "Home",
    h: "Courses",
    sh: "All Courses"
}



 

    return (
        <div className="main-container">
            <CommonDesign defining={defining}/>
            <div><h1 className="text-center py-8 lg:text-3xl text-xl font-bold">We Do What We Love To Do. Find the Best <br></br> Course To Fit Your Needs.</h1></div>



    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-9 py-4 lg:w-[95%] mx-auto">
        { courses&&
            courses?.map(c=> <div class="card card-box lg:w-80 w-[95%] mx-auto  bg-white hover:shadow-2xl ">
           
        <figure class=" w-full h-1/3">
          <img src={`http://localhost:5000/course/course-photo/${c?._id}`} alt="Shoes" className="w-full h-full" />
        </figure>
        <div class="py-7 px-4   text-black">
          <h2 class=" text-xl font-semibold ">{c?.tittle}</h2>
          <div className="text-left py-3">
            <span>{c?.description}</span>
           
          </div>
          <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
          <Link to={`singleCourse/${c?._id}`}>   <span className="px-3 bg-blue-700 text-white rounded-md" 
          style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Details </span></Link>
            <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span>
         
            <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span> </div>
        </div>
      </div>
      )
        }
    </div>




        </div>
    )

}
export default AllCourse