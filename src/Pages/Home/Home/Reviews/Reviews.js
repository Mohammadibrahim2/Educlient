import React, { useEffect } from "react";
import { useState } from "react";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannar from "../../../../assets/campus.jpg"
import { FaQuoteRight } from "react-icons/fa";
// import bannar2 from "../../../../assetes/bannar-1000.jpg"
import "./Reviews.css";
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import "../../../../App.css"
import axios from "axios";
import { toast } from "react-toastify";
const Reviews = () => {

 
    const [reviews,setReviews]=useState([])
   

   const getAllReviews=async()=>{
    try{
        const {data}=await axios.get('http://localhost:5000/reviews/get-reviews')

        if(data?.success){
            setReviews(data?.reviews)
            toast.success(data?.message)
            console.log(data?.reviews)
    
        }
    } 
catch(error){
console.log(error)

}
   }
useEffect(() => {
    getAllReviews()
}, [])


    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className=" px-2 py-2   right-4 "
                style={{ position: "absolute", top: "50%", display: "block", padding: "2px ", color: "black", fontSize: "7px", }}
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
                style={{ zIndex: 1, position: "absolute", top: "50%", display: "block",  padding: "2px", color: "black", fontSize: "7px",  }}
                onClick={onClick}
            ><span className="text-4xl text-white  "><IoIosArrowBack /></span></div>
        );
    }



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 2,
        dots:true,
     
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

        <div className=" w-full  h-auto py-4 my-4 bg-zinc-200 my-auto w-full  ">
            <h1 className="text-3xl text-indigo-950 font-bold text-center mt-8 mb-5">
            Our Students <span className="text-blue-600">Stories</span></h1>




            <Slider {...settings} className="w-[95%] mx-auto h-full  " >



                {
                    reviews?.map(r =>
                        
                        <div className={` h-[70vh] text-white py-8 `}>
                            <div className="h-[60%] my-auto w-full flex lg:flex-row flex-col px-4  py-4 ">
                                <div className="imge w-[150px] h-[100px] lg:mr-8 bg-gray-300  relative">
                                    <img src={`http://localhost:5000/user/user-photo/${r?.author?._id}`} 
                                    className="w-full h-full object-cover rounded-lg "/>
                                <span className="text-white bg-blue-600 text-xl
                                 font-bold absolute top-[-25px] right-[-25px] flex  w-[45px] h-[45px] rounded-full">
                                <FaQuoteRight className=" w-1/2 mx-auto my-auto h-1/2" />
                                </span>
                             
 
                                </div>
                                <div className="text-indigo-950 
                                font-semibold text-2xl capitalize flex flex-col justify-between
                                ">
                                    <p className="py-5 lg:py-0" >{r?.review}</p>
                                    <div className="text-xl  capitalize">
                                        <h1 className="text-blue-600">{r?.author?.name}</h1>
                                        <h2 className="text-sm">web desinger.</h2>
                                    </div>
                                </div>
                            </div>

                            


                        </div>




                    )
                }


            </Slider>






        </div>




    )


}
export default Reviews

//<div className="flex flex-col   h-full  ">

{/* <div className=" lg:w-[80%] w-[94%] m-auto reviewsbox rounded-md  shadow-lg 
h-[30vh] pt-5 pl-6 pr-3">
  <h1 className="font-semibolt lg:text-2xl text-xl " >2020 admidion fair going on this week</h1>
  <p className="py-3 lg:text-md text-sm">Lorem ipsum dolor sit, amet consectetur 
  adipisicing elit. Tenetur accusamus hic Tenetur accusamus hic
   ea in autem Tenetur accusamus hic debitis minima.</p>
</div>

<div className="lower-part flex flex-row lg:ml-20 ml-6">
<img src="https://thumbs.dreamstime.com/b/smiling-young-man-looking-camera-37807267.jpg"
className="w-[60px] h-[60px] rounded-full object-cover "></img>
<div className="ml-4">
<p>mr.kalam</p>
<p>Student of class 12</p>
</div>
</div>
</div>  */}