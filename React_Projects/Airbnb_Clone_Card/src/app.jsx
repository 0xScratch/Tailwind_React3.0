import React from "react"
import Navbar  from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import data from "./data"

export default function App(){
    const dataElements = data.map(n => {
        return <Card 
                    key={n.id} 
                    {...n}
                    />
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <div className="arrange">
                {dataElements}
            </div>
        </div>
    )
}