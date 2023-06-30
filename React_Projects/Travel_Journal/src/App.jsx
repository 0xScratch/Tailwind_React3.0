import React from "react";
import Nav from "./components/nav";
import Card from "./components/card";
import data from "./components/data"

export default function App(){
  const elements = data.map(loc => {
    return(
      <Card {...loc}/>
    )
  })
  return(
    <div>
      <Nav />
      <div className="card--section">
        {elements}
      </div>
    </div>
  )
}