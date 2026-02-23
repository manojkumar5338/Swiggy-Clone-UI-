import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GroupCards() {
    const [imageCard, setImageCard] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    useEffect(() => {
        async function swiggy() {
            const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const result = await res.json()
            setImageCard(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
        }
        swiggy();
    }, []);


    function Handleratings() {
        const result = imageCard.filter((x) => {
            return x?.info?.avgRating > 4
        })
        setImageCard(result)

    }
    function HandleFast() {
        const result = imageCard.filter((x) => {
            return x?.info?.sla?.deliveryTime < 25
        })
        setImageCard(result)

    }
    function Handlepure() {
        // const result = imageCard.filter(() => {
        //     return x?.info?
        // })
        // setImageCard(result)

    }
    function Handleoffer() {
        // const result = imageCard.filter(() => {
        //     return x?.info?
        // })
        // setImageCard(result)

    }

    function HandleHigh() {
        // const result = imageCard.filter(() => {
        //     return x?.info?
        // })
        // setImageCard(result)

    }
    function HandleLow() {
        // const result = imageCard.filter(() => {
        //     return x?.info?
        // })
        // setImageCard(result)

    }

    function Handlesearch() {
        const result = imageCard.filter((x) => {
            return x?.info?.name.ToLowerCase().inculdes(searchInput.toLowerCase)
        })
        setImageCard(result)

    }












    return <div className="Cardscroller">
        <h2>Restaurants with online food delivery in Bangalore</h2>
        <div className="filter-sec">
            <div className="filter-btn">
                <button onClick={Handleratings}>ratings 4.0+</button>
                <button onClick={HandleFast}>Fast delivery</button>
                <button onClick={Handlepure}>Pure Veg</button>
                <button onClick={Handleoffer}> offers</button>
                <button onClick={HandleHigh}>Rs.300-RS.600</button>
                <button onClick={HandleLow}>Less than Rs,300</button>
            </div>
            <div className="s-con">
                <input type="text" value={searchInput} onChange={(x) => { setSearchInput(x.target.value) }} />
                <button className="search-btn" onClick={Handlesearch}>search</button>
            </div>

        </div>
        <div className="Group-cards">
            {
                imageCard.map((x) => {
                    return (
                        <Link to={`/resto-list/${x?.info?.id}`}>
                            <div className="g-Card">
                                <img className="CardScroller-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${x?.info?.cloudinaryImageId}`} alt="" />
                                <div className="Card-text">
                                    <h3 className="type">{x.info?.name}</h3>
                                    <h4 className="type"><span><i className="bi bi-star-fill"></i></span> &nbsp; {x.info?.avgRating}<span>{x.info?.sla?.slaString}</span></h4>
                                    <p className="type">{x.info?.cuisines}</p>
                                    <p className="type">{x.info?.areaName}</p>
                                </div>
                            </div></Link>
                    )
                }
                )
            }

        </div>
    </div>

}
export default GroupCards