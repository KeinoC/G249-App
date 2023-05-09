import HomeSlide from "./HomeSlide"
import React from "react";
import "./Home.css"
import Nav from "../Nav/Nav.jsx";




export default function Home () {


    return (
        <div
        className="home-container"
        >
            <header>
                <Nav />
            </header>
      
            <HomeSlide />
        </div>
    )
}