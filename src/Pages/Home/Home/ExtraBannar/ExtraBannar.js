import React from "react";
import footerBannar from"../../../../assets/Extrabannar.png"
const ExtraBannar=()=>{
    return(<div className=" lg:block  hidden absolute top-[-30%] w-full mx-auto  h-[40vh] py-6">
        <div className="h-full  w-[95%] mx-auto ">
            <img src={footerBannar} className="object- w-full h-full object-fill">
            </img>

        </div>

    </div>)
}
export default ExtraBannar