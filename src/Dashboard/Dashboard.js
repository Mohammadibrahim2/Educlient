import React, { useState } from "react";
import {CiUser } from 'react-icons/ci';
import {BsKey,BsBookmarkCheck } from 'react-icons/bs';
import {BsCartCheck} from "react-icons/bs"
import { HiArrowRightOnRectangle } from 'react-icons/hi2';

import { Link, Outlet } from "react-router-dom";
import CommonDesign from "../component/designComponent";




const Dashboard=()=>{
    const [active,setActive]=useState("My Account")
    const links=[
        {
            id:1,
            title:"My Account",
            icon:<CiUser/>,
            link:""
        },
        {
            id:2,
            title:"Create Category",
            icon:<BsCartCheck/>,
            link:"createcategory"
        },
        {
            id:3,
            title:"Create Reviews ",
            icon:<BsKey/>,
            link:"createreviews"
        },
        {
            id:4,
            title:"Create Course",
            icon:<BsBookmarkCheck/>,
            link:"createcourse"
        },
        {
            id:5,
            title:"Create Posts",
            icon:<HiArrowRightOnRectangle/>,
            link:"createposts"
        },
        {
            id:7,
            title:"All Posts",
            icon:<HiArrowRightOnRectangle/>,
            link:"allposts"
        },
        {
            id:7,
            title:"All Courses",
            icon:<HiArrowRightOnRectangle/>,
            link:"allcourses"
        },
        {
            id:7,
            title:"All Reviews",
            icon:<HiArrowRightOnRectangle/>,
            link:"allreviews"
        },
        {
            id:7,
            title:"All Users",
            icon:<HiArrowRightOnRectangle/>,
            link:"allusers"
        },
    ]

 
console.log(active)
const defining = {
    com: "Home/Dashboard",
    h: "Dashboard",
    sh: "dashboard"
}
    return(
        <div>
            
           <CommonDesign defining={defining}/>
           
             <div className="grid lg:grid-cols-3  grid-cols-1 lg:gap-4 gap-2 mt-10 px-5">

                <div className="mt-20 w-auto">
                    {
                        links.map(link=>
                       <Link to={link.link}><li className={` ${active===link.title? "text-orange-500":"text-black" } hover:text-orange-600 list-none flex flex-row items-center mb-3 text-black`}>
                            <span className="mr-2">{link.icon}</span>
                            <button onClick={()=>setActive(link.title)}>{link.title}</button></li></Link>)
                    }
                </div>
                <div className="col-start-2 col-span-4">
                <Outlet></Outlet>
                </div>

            </div> 
               
           
        </div>
    )
}
export default Dashboard