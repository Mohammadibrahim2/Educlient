import React, { useEffect, useState } from "react";
import card from "../../../../assets/campus.jpg"
import axios from "axios";
import { toast } from "react-toastify";
import { Link, NavLink, useParams } from "react-router-dom";
import CommonDesign from "../../../../component/designComponent";


const SingleCourse= () => {
    
    const [active,setActive]=useState("All Courdes")
    
    const [singleCourse ,setSingleCourse]=useState({})
    const [relatedCourse ,setRelatedCourse]=useState([])
   
const params=useParams()
useEffect(() => {
   if(params?.id) getSingleCourse()
}, [params?.id])
   const getSingleCourse=async()=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/course/single-course/${params?.id}`)

        if(data?.success){
            setSingleCourse(data?.singleCourse)
            getRelatedCourse(data?.singleCourse?._id,data?.singleCourse?.category?._id)
            console.log(singleCourse)
            toast.success(data?.message)
    
        }
    } 
catch(error){
console.log(error)

}
   }
   //get related course
   const getRelatedCourse=async(pid,cid)=>{
    try{
        const {data}=await axios.get(`http://localhost:5000/course/related-course/${pid}/${cid}`)

        if(data?.success){
            setRelatedCourse(data?.relatedCourse)
            console.log(data?.relatedCourse)
            toast.success(data?.message)
    
        }
    } 
catch(error){
console.log(error)

}
   }



 
   
 
const defining = {
    com: "Home/Course",
    h: "Course",
    sh: singleCourse?.tittle
}

 

    return (
        <div className="main-container">
            <CommonDesign defining={defining}/>
            {
                singleCourse&&


                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-9 py-4 lg:w-[95%] mx-auto">
                   
                        <div class="card card-box lg:w-80 w-[95%] mx-auto  bg-white hover:shadow-2xl ">
                       
                    <figure class=" w-full h-1/3">
                      <img src={`http://localhost:5000/course/course-photo/${singleCourse?._id}`} alt="Shoes" className="w-full h-full" />
                    </figure>
                    <div class="py-7 px-4   text-black">
                      <h2 class=" text-xl font-semibold ">{singleCourse?.tittle}</h2>
                      <div className="text-left py-3">
                        <span>{singleCourse?.description}</span>
                       
                      </div>
                      <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
                      <Link to={``}>   <span className="px-3 bg-blue-700 text-white rounded-md" 
                      style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Details </span></Link>
                        <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span>
                     
                        <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span> </div>
                    </div>
                  </div>
                 
                </div>
                
            }
         


<div className="text-center">
    <button className=" bg-gradient-to-r from-blue-950 to-blue-500  
     text-white px-5 py-2 rounded-md font-semibold">Related Courses</button>
     <div>
     <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-9 py-4 lg:w-[95%] mx-auto">
        {relatedCourse&&
            relatedCourse?.map(c=>
             <div class="card card-box lg:w-80 w-[95%] mx-auto  bg-white hover:shadow-2xl ">
           
        <figure class=" w-full h-1/3">
          <img src={`http://localhost:5000/course/course-photo/${c?._id}`} alt="Shoes" className="w-full h-full" />
        </figure>
        <div class="py-7 px-4   text-black">
          <h2 class=" text-xl font-semibold ">{c?.tittle}</h2>
          <div className="text-left py-3">
            <span>{c?.description}</span>
           
          </div>
          <div class=" flex flex-row-reverse justify-around font-semibold w-full" >
          <NavLink to={`./singleCourse/${c?._id}`}>   <span className="px-3 bg-blue-700 text-white rounded-md" 
          style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Details </span></NavLink>
            <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span>
         
            <span className="px-2 py bg-blue-950 text-white  rounded-md" style={{fontSize:"10px",paddingTop:"4px",paddingBottom:"4px"}}>Buy Now</span> </div>
        </div>
      </div>
      )
        }
    </div>
       
     </div>
</div>

        </div>
    )

}
export default SingleCourse