import React from "react";
import {  useState ,useEffect} from "react";


function Cartimages() {
    const [imageArray, setImageArray] = useState([]);

    async function swiggy() {

        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await res.json()
        setImageArray(result?.data?.cards?.[0]?.card?.card?.imageGridCards?.info)
        
    }
   useEffect(()=>{
    swiggy();
   },[])
    

    return (
      <div className="Card">
        <h2>What's on your mind?</h2>
        <div className="scroller">
          {
            imageArray.map((x)=>{
                return (
                <img className="scroller-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${x.imageId}`} alt="" />)
            })
          }
        </div>
      </div>
    )
}

    export default Cartimages