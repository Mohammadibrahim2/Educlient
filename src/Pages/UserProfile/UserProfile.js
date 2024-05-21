import React from "react";
import { useAuth } from "../../context/auth";
import profilePic from "../../assets/demoProfile.jpg"
import CommonDesign from "../../component/designComponent";
const Profile=()=>{
  const defining = {
    com: "Home",
    h: "Lp Profle",
    sh: "My Profile"
}
    const [auth,setAuth]=useAuth()
    return(
        <div className="bg-base-200 capitalize">
          <CommonDesign defining={defining} />
           <div className="w-auto py-4 bg-base-200">
  <div className=" ">
    <div className="text-center ">
    <div className="avatar online">
  <div className="w-28 rounded-full ">
    {
      auth? <img src={`http://localhost:5000/user/user-photo/${auth?.user?._id}`}  
      className="w-full h-full" /> :
      <img src={profilePic} className="w-full h-full" />
   
    }
  </div>
</div>

      <h1 className="text-3xl font-bold capitalize">{auth?.user?.name}</h1>
      <p className="py-2 font-semibold"> <span>Id :</span>{auth?.user?._id}</p>
      <p className="font-semibold"><span>Email :</span>{auth?.user?.email}</p>
      <p className="py-2 font-semibold"><span>Phone :</span>{auth?.user?.phone}</p>
      <p className="font-semibold"> <span>Role :</span>{auth?.user?.role}</p>

    </div>
    
  </div>
  <div>
    
  </div>
</div>
        </div>
    )
}
export default Profile