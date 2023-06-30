import React from "react";
import Pin from "../images/pin.svg"

export default function Card(props){
    // console.log(props)
    return(
        <div className="travel--card">
            <img src={props.imageUrl} alt="" width={props.width} height={props.height}/>
            <div className="info">
                <div className="location">
                    <img src={Pin} alt="" />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="details">
                    <h1><b>{props.title}</b></h1>
                    <p><b>{props.startDate} - {props.endDate}</b></p>
                    <p className="para">{props.description}</p>
                </div>
            </div>
        </div>
    )
}