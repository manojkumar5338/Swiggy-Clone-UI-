import React from "react";
import { Outlet } from "react-router-dom";
function Search(){
    return <div>
        <h1>this is search</h1>
       <Outlet/>
    </div>
}
export default Search