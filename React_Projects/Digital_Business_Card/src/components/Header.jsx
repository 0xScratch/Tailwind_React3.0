import React from "react"
import hacker from "../images/hacker.jpeg"

export default function Navbar(){
    return(
        <div>
            <img src={hacker} alt="" />
            <div className="text">
                <h1>Aryan Malik</h1>
                <h3>H4CK3R</h3>
                <p>hacker.website</p>
            </div>
            <div className="button">
                <button className="button_content">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </button>
            </div>
        </div>
    )
}