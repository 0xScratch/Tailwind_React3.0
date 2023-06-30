import React from "react";
import Globe from "../images/globe.png"

export default function Nav() {
    return(
        <div className="navbar">
            <img src={Globe} alt="Globe icon" width={25}/>
            <span>My Travel Journal</span>
        </div>
    )
}