import React from 'react';
import {Link} from "react-router-dom"
import "../Home/Home.css"
import './Nav.css'

export default function Nav() {
    return (
    <nav className = "navbar">
        <Link to="/" className = "nav-item">
            <span >Home</span>
        </Link>

        <Link to="/availability" className = "nav-item">
            <span >Availability</span>
        </Link>

        <Link to ="/tour" className = "nav-item">
            <span >Drop By</span>
        </Link>
        
        <Link to ="/about" className = "nav-item">
            <span >About Us</span>
        </Link>
    </nav>
)}