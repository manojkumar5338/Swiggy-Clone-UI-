import React from "react";
import { useEffect, useState } from "react";

function Cardscroller() {
    const [imageCard, setImageCard] = useState([]);
    useEffect(() => {
        async function swiggy() {
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
               const result = await res.json()
               setImageCard(result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          
        }
        swiggy();
    },[]);
    
  


     return <div>
        <div className="Card-scroller">
        <h2>Top restaurant chains in Bangalore</h2>
        <div className="scroller">
            {
                imageCard.map((x)=>{
                    return <div>
                         <div className="Card">
                         <img className="CardScroller-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${x?.info?.cloudinaryImageId}`} alt="" />
                         </div>
                         <div className="Card-text">
                         <h3 className="type">{x.info?.name}</h3>
                         <h4 className="type"><span><i className="bi bi-star-fill"></i></span> &nbsp; {x.info?.avgRating}<span>{x.info?.sla?.slaString}</span></h4>
                         <p className="type">{x.info?.cuisines}</p>
                         <p  className="type">{x.info?.areaName}</p>
                         </div>
                    </div>

                })
            }


        </div>

        </div>
     </div>
}
export default Cardscroller