import React, { useContext, useRef } from "react";

import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail, IoLocation } from "react-icons/io5";
// import ScrollToTop from "react-scroll-to-top";
// import Navigation from "../Home/ExtraSection/Navigation";
// import ContactHeader from "./ContactHeader.";

// import MyMapLocation from "./MyMapLocation";
// import { motion, useScroll } from "framer-motion"
// import { DarkMood } from "../DarkMood/DarkMood";

// import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import Map from "./Map";
import CommonDesign from "../../component/designComponent";
import ScrollToTop from "react-scroll-to-top";
// import { toast } from "react-toastify";

const Contact = () => {
    const defining = {
        com: "Home",
        h: "Contact",
        sh: "Contact"
    }

    const contactInfo = [
        {
            icon: <RiSendPlaneFill />,
            title: "ADDRESS",
            subtitle: " Powro bazar,Maijdee Noakhali"
        },
        {
            icon: <ImLocation2 />,
            title: "PHONE",
            subtitle: "+88 01632846454"
        },
        {
            icon: <BsFillTelephoneFill />,
            title: "EMAIL",
            subtitle: "noakhaliit432@gmail.com"
        },
        {
            icon: <BsFillTelephoneFill />,
            title: "OPENING TIME",
            subtitle: "8:00Am - 10:00Pm, Sunday Close"
        }
    ]

    const form = useRef();
    const handleEmail = (event) => {
        console.log(event.target.name.value)
        event.preventDefault()

        // emailjs.sendForm('gmail', 'template_iehp8qs', event.target, 'lbfPLwnf1YcRH3-Ac')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        toast.success("eamil is successfully send")
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const date = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const mons = ["January", "February", "March", "April", "May", "Jun", "July", "August", "Septembar", "October", "November", "December"];
        let hour = date.getHours();
        //seting Am/pm
        let po = "null"
        if (hour > 12) {
            po = "P.M"
        }
        else {
            po = "A.M"
        }
        //seting hour
        if (hour > 12) {
            hour = hour - 12
        }
        else {
            hour = hour
        }
        const min = date.getMinutes();


        let day = days[date.getDay()];
        let mon = mons[date.getMonth()];
        const postDate = { hour, min, day, po, mon }

        const inbox = { name, email, subject, message, postDate }
        console.log(inbox)


        event.target.reset()


        fetch(`https://n-mohammadibrahim2.vercel.app/addmessage/${email}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(inbox)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success("Successfully send your mail.Thank you!")

                }
            })



    }

    return (
        <div className={` h-auto w-full  `}>
            <CommonDesign defining={defining} />
            <ScrollToTop smooth top="100" color="#000000" style={{backgroundColor:"yellow" ,padding:"5px",fontWeight:"700"}}>
    
            </ScrollToTop>
            {/* <Navigation title="Contact"></Navigation> */}

            {/* <ScrollToTop smooth top="100" color="#ffffff" style={{backgroundColor:"#ed1d24" ,padding:"5px",fontWeight:"700"}}>
    
            </ScrollToTop> */}

            <div className="flex lg:flex-row-reverse flex-col justify-between items-start py-6 ">
                <div className="lg:w-1/2 w-full">


                    <h1 className=" lg:w-2/3 w-full mx-auto py-5 px-2 lg:px-0 text-3xl font-semibold text-indigo-950">Do you have any questions?</h1>
                    <form ref={form} onSubmit={handleEmail} className={` lg:w-2/3 w-full  mx-auto flex flex-col  "} lg:px-8 px-4 shadow-lg py-8 rounded-lg `}>

                        <div className="w-full  flex  flex-col  my-5 ">

                            <input type="name" name="name" className={` py-2 px-3  border  text-black  w-full `} placeholder="Name*" ></input>
                            <input type="email" name="email" className={` py-2 px-3  border   text-black  lg:my-3 w-full my-2 lg:my-0`} placeholder="Email*" ></input>
                            <input type="subject" name="subject" className={` py-2 px-3  border   text-black  w-full  `} placeholder="Subject*" ></input>
                        </div>
                        <textarea name="message" className={ ` shadow-md my-2 p-3  text-black border`} placeholder="Your message*" rows="5" cols="10" ></textarea>
                        <button className="  text-white bg-indigo-950 w-full rounded-md py-2 font-semibold hover:bg-yellow-500 hover:text-indigo-950"  >Submit</button>

                    </form></div>
                <div className={`contactInfo grid lg:grid-cols-1 gap-3 px-5 lg:mx-auto    lg:w-1/2 font-semibold`} >
                    <h1 className={`text-start px-8 py-5  text-3xl font-semibold text-indigo-950  lg:w-2/3 mx-auto `}>Our contact address</h1>
                    <h1 className=" lg:w-2/3 mx-auto">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
                        for previewing layouts and visual mockups. Lorem ipsum is placeholder text.</h1>
                    <div className="firts-f-section text-start leading-10 text-indigo-950 lg:w-2/3 mx-auto">


                        <h2 className="text-2xl   flex flex-row items-center "><span className="text-yellow-500"><BiSolidPhoneCall /></span>+8899854767</h2>
                        <h2 className="flex flex-row items-center"><span className="pr-2 text-yellow-500"><IoLocation /></span>Powro bazar,Maijdee Noakhali</h2>
                        <h2 className="flex flex-row items-center"><span className="pr-2 text-yellow-500"><IoMail /></span> Zahid321@gmail.com</h2>


                    </div>

                    <div className="locationMap h-[75vh] w-full lg:w-2/3 mx-auto mb-16" >
                        <h1 className="text-start px-8 py-5  text-3xl font-semibold text-indigo-950 ">Find our location</h1>
                        <Map />

                    </div>
                </div>
            </div>

        </div>
    )

}
export default Contact