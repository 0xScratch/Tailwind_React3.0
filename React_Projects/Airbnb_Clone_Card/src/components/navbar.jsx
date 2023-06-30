import React from 'react'
import AirbnbLogo from "../images/Airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img src={AirbnbLogo} alt="AirbnbLogo" width={80} className='logo'/>
        </nav>
    )
}