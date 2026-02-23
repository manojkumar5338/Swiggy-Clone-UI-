import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


function Navbar(){
    const data=useSelector((store)=>{
        return store.cartStore
    })
    return <nav className="navbar">
        <div className="logo-sec">
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
            <ul>
              <Link to={"./Others"}> <li>Other</li></Link>  
            </ul>

        </div>
        <ul className="nav-items">
            <Link to={"./Swiggycoporate"}><li className="hodding"><i className="bi bi-tv"></i> Swiggy Coporate</li></Link>
            <Link to={"./Search"}><li className="hodding"><i className="bi bi-search"></i> Search</li></Link>
            <Link to={"./Offer"}><li className="hodding"><i className="bi bi-gift"></i> Offers</li></Link>
            <Link to={"./Help"}><li className="hodding"><i className="bi bi-question-octagon"></i> Help</li></Link>
            <Link to={"./SignIn"}> <li className="hodding">Sign In</li></Link>
            <Link to={"./Cart"}> <li className="hodding"><i className="bi bi-cart3"></i> Cart{data.lenght}</li></Link>
               <Link to={"./resto-list/:id"}>REsto </Link>
        </ul>
    </nav>
}

export default Navbar