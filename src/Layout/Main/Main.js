import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../SheredPages/Navbar/Navbar/Navbar";
import Footer from "../../SheredPages/Footer/Footer/Footer";
import About from "../../Pages/Home/Home/About/About";
import Course from "../../Pages/Home/Home/Course/Course";
import Reviews from "../../Pages/Home/Home/Reviews/Reviews";
import Faq from "../../Pages/Home/Home/FAQ/Faq";
import Teachers from "../../Pages/Home/Home/Teachers/Teachers";
import Header from "../../Pages/Home/Home/Header/Header";
import { Toaster } from "react-hot-toast";


const Main = () => {

    return (
        <div className="bg-white overflow-hidden">
            <Navbar/>
     
            <div className="">
              <Toaster/>
                <Outlet ></Outlet>
                <Footer></Footer>
            </div>
        

        </div>
    )
}
export default Main