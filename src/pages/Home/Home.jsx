import React, {useState, useEffect} from 'react';
import "./Home.css"
import Nav from "../Nav/Nav"
import {Link} from 'react-router-dom'





export default function Home({users}) {
    
    const url = "https://node-g249-api-git-main-keinoc.vercel.app/api/"

    const [testUser, setTestUser] = useState({})

    useEffect(() => {
        fetch(url+"users")
            .then(res => res.json())
            .then(data => setTestUser(data))
    }, [])


    return (
        <div className = "homepage">
            <>
            <Nav />
            {/* <h1>{testUser[0].name}</h1> */}
                <div className = "garden">GARDEN</div>
                <div className = "num">249</div>
            </>

            
        </div>
        

    )
}