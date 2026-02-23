import React from "react";
import Applayout from "./components/Applayout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home  from "./pages/Home";
import Search from "./pages/search";
import Offer from "./pages/Offer";
import Help from "./pages/Help";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart"
import  Other from "./pages/Others"
import Resto from "./components/Resto";

function App(){
  return(
    <div>
   
      <BrowserRouter>
      <Routes>
         <Route path="/" element={  <Applayout/>} >
         <Route path="/" element={<Home/>}></Route>
         <Route path="/Search" element={<Search/>}></Route>
         <Route path="/Offer" element={  <Offer/>} ></Route>
         <Route path="/Cart" element=  {<Cart/>} ></Route>
         <Route path="/Help" element={  <Help/>} ></Route>
         <Route path="/Signin" element={  <Signin/>} ></Route>
         <Route path="/Others" element={  <Other/>} ></Route>
         <Route path="/resto-list/:id" element={<Resto/>}></Route>

         </Route> 
        {/* <Route path="/Search" element={  <Search/>} ></Route> 
        <Route path="/Cart" element=  {<Cart/>} ></Route>
        <Route path="/Offer" element={  <Offer/>} ></Route>
        <Route path="/Help" element={  <Help/>} ></Route>
        <Route path="/Signin" element={  <Signin/>} ></Route>
        <Route path="/Others" element={  <Other/>} ></Route>
         */}
 



       
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  

      )
    
}

      export default App