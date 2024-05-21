import React from "react";

import Register from "./Sinin/Signin";
import Login from "./Login/Login";
import CommonDesign from "../../component/designComponent";
import ScrollToTop from "react-scroll-to-top";

const Registration = () => {
    const defining = {
        com: "Home",
        h: "Lp Profle",
        sh: "Sin in"
    }
    return (
        <div className="w-full h-auto bg-white">
            <CommonDesign defining={defining} />
            <div className="flex lg:flex-row flex-col justify-center w-full h-auto">
                <ScrollToTop smooth top="100" color="#000000" style={{ backgroundColor: "yellow", padding: "5px", fontWeight: "700" }}>

                </ScrollToTop>




                <Register />




            </div>
        </div>
    )
}
export default Registration