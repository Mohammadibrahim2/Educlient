import React, { useState } from "react";
import about from "../../../../assets/campus.jpg"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger"
const About=()=>{
  const [counterOn,setCounterOn]=useState(false)
    return(
     
   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

  
     <div className="w-full h-auto">
  
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-[90%] lg:py-8">
    <h1 className="lg:text-3xl text-xl font semibold"> THE ONLINE EDUCATION PORTAL </h1>
      <h1 className="lg:text-5xl text-3xl font-bold">EDUMART ONLINE</h1>
      <p className="py-6">Building on Edumart Group’s rich experience with online MBA at Edumart University
       Online! Designing and delivering both graduate and post-graduate programs across a variety of disciplines, Edumart University Online, offering online MBA has worked upon the knowledge-base created by our highly qualified faculties, our research,
             publishing and training experience, to create online MBA programs that offer a rich learning experience.</p>
<div className="flex flex-row"> 
             <h1 className="text-2xl font-semibold">
              {counterOn && <CountUp className="text-blue-600" start={0} end={100} duration={3} delay={0}/>}+ Students
              
             </h1>
             <h1 className="text-2xl font-semibold lg:mx-8">
              {counterOn && <CountUp className="text-blue-600" start={0} end={30} duration={3} delay={0}/>}+ Courses
              
             </h1>
         
             <h1 className="text-2xl font-semibold">
              {counterOn && <CountUp className="text-blue-600" start={0} end={80} duration={3} delay={0}/>}+ Reviews
              
             </h1></div>
    </div>
    <div className="card  lg:w-2/3 w-full shadow-2xl bg-base-100">
    <img src="https://thepixelcurve.com/wp/edubin/wp-content/uploads/2019/07/HEL9999-470x274.jpeg" alt="about-img" className="" />
    </div>
  </div>
</div>

     
     </div>
     </ScrollTrigger>  

    )

}
export default About

{/* <div className="right w-1/2 ">
            <h1>
            THE ONLINE EDUCATION PORTAL
            </h1>
            <h1></h1>
            <p</p>

           
        </div> */}
