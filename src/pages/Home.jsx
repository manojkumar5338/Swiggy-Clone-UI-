import React from "react";
import Cartimages from "../components/imagescroller"
import Cardscroller from "../components/Cardscroller";
import GroupCards from "../components/Groupcards";




function Home(){
    return (<div className="home">
        <Cartimages/>
        <Cardscroller/>
        <GroupCards/>

           
        
    </div>

    )
}
export default Home