import React from "react";
import headersideImg from "../../../../assets/Hedaer-side-img.png";
import design from "../../../../assets/design.png"
import "./Header.css"
const Header = () => {
    return (
        <div className=" header w-full lg:h-[90vh] h-auto  z-50 flex lg:flex-row flex-col  pt-10 justify-center   ">
            <div className="left lg:w-1/2 w-full px-5 ">
                <h1 className="text-5xl font-semibold text-indigo-950">The <span className="text-sky-600">largest</span> online learning platform for improve skills</h1>
                <h2 className="text-xl font-semibld text-zinc-700 my-6">This theme includes all the necessary pages of the onlineLorem
                    ipsum gravida nibh vel velit auctor aliquetn</h2>
                <button className=" hover:bg-indigo-950 bg-sky-600 text-white px-5 py-3 font-semibold rounded-md">Get Started for Free</button>

            </div>
            <div className="right h-[100%]  ">
                <div className="h-full front relative  ">
                    <img src={headersideImg} alt="header-image" className="h-full z-10 "></img>
                </div>
                <div className=" absolute top-48 left-[-32] back w-full  ">
                    <img src={design} alt="header-image" className="z-0 hidden lg:block" ></img>
                </div>
                <div className="extraDesign absolute middle lg:w-1/5 w-2/3  h-auto lg:right-[-8]  lg:top-[70%] 
                bottom-[-60%] lg:bottom-0 bg-white  py-5 px-3 rounded-md shadow-5xl">
                    <div className="h-2/3 my-auto ">
                    <h1 className="text-indigo-950 font-semibold text-xl mb-3">
                    Best <span className="text-sky-600">Learning Platform </span> for anyone & everything</h1>
                    <h1>
                    James Medeiros
                    </h1>
                    </div>
                   
                </div>

            </div>
        </div>


    )


}
export default Header

