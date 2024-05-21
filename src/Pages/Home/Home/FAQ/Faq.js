import React from "react";


const Faq=()=>{
    return(
  <div className="container  py-5">
    <h1 className="text-3xl text-center font-bold py-4 ">
    FREQUENTLY ASK <span className="text-blue-600">QUESTION</span>
    </h1>
    <div className="w-[80%] mx-auto">
   <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
  </div>
</div>
  </div>
    )

}
export default Faq