import React from "react"
import Navbar  from "./components/Header"
import Main from "./components/Main"

export default function App(){
    return(
        <div className="Container">
            <Navbar />
            <Main />
        </div>
    )
}