import React from "react";
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Footer  from "./footer";

function Applayout(){
   return <div className="body">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
}

export default Applayout