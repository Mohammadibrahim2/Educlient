import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import Course from "../Course/Course";
import Reviews from "../Reviews/Reviews";
import Faq from "../FAQ/Faq";
import Teachers from "../Teachers/Teachers";
import ScrollToTop from "react-scroll-to-top";
import Posts from "../Posts/Posts";
import ExtraBannar from "../ExtraBannar/ExtraBannar";
const Home=()=>{
return(
    <div >
    <Header/>
    <ScrollToTop smooth top="100" color="#000000" style={{backgroundColor:"yellow" ,padding:"5px",fontWeight:"700"}}>
    
    </ScrollToTop>
    <About/>
    <Course/>
    <Reviews/>
    <Faq/>
    <Posts/>
    <Teachers/>
 
    </div>
)
}
export default Home