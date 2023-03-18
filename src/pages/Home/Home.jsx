import React from 'react';
import "./Home.css"
import Nav from "../Nav/Nav"
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className = "homepage">
            
            <>
                <div className = "garden">GARDEN</div>
                <div className = "num">249</div>
            </>

            <Nav />
        </div>
        

    )
}