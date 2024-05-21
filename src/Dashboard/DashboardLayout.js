import React from "react";



import Dashboard from "./Dashboard";
import Navbar from "../SheredPages/Navbar/Navbar/Navbar";
import Footer from "../SheredPages/Footer/Footer/Footer";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {

    return (
        <div className="bg-white overflow-hidden">
            <Navbar/>
     
            <div className="">
                <Toaster position="top-center"></Toaster>
              <Dashboard></Dashboard>
                <Footer></Footer>
            </div>
        

        </div>
    )
}
export default DashboardLayout