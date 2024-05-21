import React, { useEffect } from "react";
import { useState } from "react";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannar from "../../../../assets/campus.jpg"
// import bannar2 from "../../../../assetes/bannar-1000.jpg"
import { FaFacebookF, FaLinkedinIn , FaTwitter, FaYoutube} from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import axios from "axios";


const Teachers = () => {

    const [teachers,setTeachers]=useState([])
    const getAllTeachers=async()=>{
  try{
     const {data}= await axios.get(`http://localhost:5000/user/get-teachers/teacher`)
     if(data?.success)
     {
 setTeachers(data?.teachers)
     }
    
  }
  catch(error){
console.log(error)
  }
 
    }
 
    useEffect(()=>{
        getAllTeachers()
    },
    [])
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className=" px-2 py-2   right-4 "
                style={{ position: "absolute", top: "50%", display: "block", padding: "2px ", color: "#000000", fontSize: "7px", }}
                onClick={onClick}
            >
                <span className="text-4xl text-white  "><IoIosArrowForward /></span></div>
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className=" px-2 py-2  left-3 "
                style={{ zIndex: 1, position: "absolute", top: "50%", display: "block", padding: "2px", color: "#000000", fontSize: "7px", }}
                onClick={onClick}
            ><span className="text-4xl text-white  "><IoIosArrowBack /></span></div>
        );
    }





    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,

        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (

        <div className=" w-full  h-auto py-4 my-4  text-black  capitalize">
              <h1 className="text-3xl text-center font-bold py-4 ">
    Our Honourable  <span className="text-blue-600">Teachers</span>
    </h1>



            <Slider {...settings} className="w-full h-full  " >



                {
                    teachers.map(t =>

                        <div className={` h-[70vh] text-black py-8  `}>



                            <div className=" lg:w-[70%] w-[100%] lg:m-auto  rounded-lg    relative
                                  h-[80%]  shadow-lg ">

                                <figure className="w-full h-full rounded-lg ">
                                    <img src={`http://localhost:5000/user/user-photo/${t._id}`} 
                                     className=" w-full h-full object-cover rounded-lg"></img>
                                </figure>
                                <div className="absolute top-[70%] bg-white lg:w-[80%] w-[70%] h-[40%] lg:left-[10%] left-[15%] text-center rounded-md shadow-2xl">
                                    <h1 className="font-semibold lg:text-2xl text-xl " >{t?.name}</h1>
                                    <p className="  text-md font-semibold">{t?.role}.</p>
                                    <div className="social-icons w-[98%] mx-auto flex flex-row justify-around mt-3">
                                        <a href="" target="_blank" className="py-3 px-3 rounded-full bg-sky-700 text-white">   <FaFacebookF  /></a>
                                        <a href="#" className="py-3 px-3 rounded-full bg-cyan-500 text-white">   <FaTwitter /></a>
                                        <a href="#" target="_blank" className="py-3 px-3 rounded-full bg-rose-600 text-white">   <FaYoutube /></a>

                                </div>

                            </div>

                        </div>

                        
                         


                        </div>




    )
}


            </Slider >






        </div >




    )


}
export default Teachers
