import React from "react";
import "./designcomponent.css"
const CommonDesign=({defining})=>{
    return(
        <div className="commonHeaderDesign w-full h-[50vh] ">
            <div className="flex flex-col items-center justify-center  h-full  text-white font-semibold ">
                <h1 className="font-bold text-4xl ">{defining.h}</h1>
                <h1 className="mt-2">{defining.com} / {defining.sh}</h1>
            </div>

        </div>
    )
}
export default CommonDesign