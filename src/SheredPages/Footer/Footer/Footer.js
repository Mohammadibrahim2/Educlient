import React from "react";
import { Link } from "react-router-dom";
// import NewsLetter from "../../Home/ExtraSection/News/Newsletter";
import { FaFacebookF, FaLinkedinIn , FaTwitter, FaYoutube} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail,IoLocation } from "react-icons/io5";
// import ExtraBannar from "../../../Pages/Home/Home/ExtraBannar/ExtraBannar";
const Footer = () => {

  return (
    <div className="w-full lg:h-[70vh] text-white flex flex-col justify-end bg-slate-950 relative mt-12 lg:mt-10" style={{ fontSize: "14px" }}>
      {/* <ExtraBannar/> */}

      <div className="flex lg:flex-row lg:justify-around  lg:items-end flex-col justify-around items-start lg:pb-5 px-4 w-full  mt-32 ">
        <div className="firts-f-section text-start leading-10 text-gray-300">

          <h2 className="text-2xl font-bold font-sans text-white">CONTACT INFOMATION</h2>
          <p>Call Us 24/7 Free</p>
          <h2 className="text-2xl text-extrabold text-yellow-600 flex flex-row items-center "><span className=""><BiSolidPhoneCall /></span>+8899854767</h2>
          <h2 className="flex flex-row items-center"><span className="pr-2"><IoLocation /></span>Powro bazar,Maijdee Noakhali</h2>
          <h2 className="flex flex-row items-center"><span className="pr-2"><IoMail /></span> Zahid321@gmail.com</h2>


        </div>
        {/* end first-sectiojn:- */}
        <div className="second-f-section text-gray-300">
          <h1 className="text-xl font-semibold text-white">Information</h1>
          <div className="list-none text-start leading-8">
            <li>Delevary</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Stores</li>
            <li>Secure Payment</li>
          </div>

        </div>
        {/* end second-sectiojn:- */}
        <div className="third-f-section text-gray-300">
          <h1 className="text-xl font-semibold text-white">Custom Links</h1>
          <div className="text-start list-none leading-8">


            <Link to="/wishlist"><li className="hover:text-red-600">Wishlist</li> </Link>
            <Link to="/cart"><li className="hover:text-red-600">My Cart</li> </Link>


            <Link to="/shop"><li className="hover:text-red-600">Shop</li></Link>
            <Link to="/blog"><li className="hover:text-red-600">Blog</li></Link>
            <Link to="/contact"><li className="hover:text-red-600">Contact Us</li></Link>
          </div>


        </div>


        <div className="third-f-section lg:mt-0 mt-2  flex flex-col justify-start h-[200px]">
          <h1 className="text-2xl font-bold lg:text-center text-start  ">Education</h1>
         
          <p className=" my-3 font-semibold">Edubin perfect for online courses and other institutes.<br></br>
            It’s a complete solution with lms functionalities.</p>
          <div className="social-icons w-[70%] lg:mx-auto flex flex-row  ">
            <a href="" target="_blank" className="py-3 px-3 rounded-full bg-blue-950 text-white">   <FaFacebookF /></a>
            <a href="#" className="py-3 px-3 rounded-full bg-blue-950 text-white mx-2">   <FaTwitter /></a>
            <a href="#" className="py-3 px-3 rounded-full bg-blue-950 text-white">   <FaLinkedinIn/></a>
            <a href="#" target="_blank" className="py-3 px-3 rounded-full bg-blue-950 text-white mx-2 ">   <FaYoutube /></a>

          </div>

        </div>



      </div>

      <div className="flex lg:flex-row flex-col justify-between w-full lg:items-end items-start py-5 px-8 bg-black">
        <h2 className="lg:mb-0 mb-2  ">©Copyrigth by <span className="text-amber-500">Mohammad Ibrahim</span> ,2023</h2>
        <div className="flex flex-row font-semibold text-md ">
          Privacy | Terms | Purchase
        </div>
      </div>
    </div>
  )


}
export default Footer
 {/* <img src="https://i.ibb.co/c8tV7Kt/location.webp" className="h-[170px] w-auto py-2"></img> */}