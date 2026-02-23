import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Resto() {
    const [listArray, setListArray] = useState([])
    const { id } = useParams

    async function Swigyrestolist() {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656&catalog_qa=undefined&submitAction=ENTER`)
        const result = await response.json()
        setListArray(result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards)
        console.log(result)
    }

    useEffect(() => {
        Swigyrestolist()
    }, [])

    return <div>
        {
            listArray.map((x) => {
                return (
                    <div className="realtive">
                        <div className="list-items">
                            <div className="list-text">
                                <h3>{x?.card?.info?.name}</h3>
                                <p><span className="cut"><i className="bi bi-currency-rupee"></i>{x?.card?.info?.price / 100}</span><i className="bi bi-currency-rupee"></i>{x?.card?.info?.finalPrice / 100}</p>
                                <p><i className="bi bi-star-fill"></i>{x?.card?.info?.ratings?.aggregatedRating?.rating} {x?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}</p>
                                <p>{x?.card?.info?.description}</p>
                            </div>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${x?.card?.info?.imageId}`} alt="" />
                        </div>


                        <div>
                            <button className="add-btn">ADD</button>
                        </div>

                    </div>)
            })
        }
    </div>

}
export default Resto