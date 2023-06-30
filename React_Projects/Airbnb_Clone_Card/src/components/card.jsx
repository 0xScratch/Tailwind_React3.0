import React from "react";
import Star from "../images/star.png"
import card from "../images/pic1.jpg"

export default function Card(props){
    let badgetext
    if (props.openSpots == 0){
        badgetext = "SOLD OUT"
    }else if (props.location == "Online"){
        badgetext = "ONLINE"
    }

    console.log(props)

    return(
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img src={card} alt="Mountain_Bike" width={140} className="card--image"/>
            <div className="card--stats">
                <img src={Star} alt="Star" width={10} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}