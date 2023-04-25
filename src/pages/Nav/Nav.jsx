import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import "../Home/Home.css"
import './Nav.css'
import { useNavigate, useLocation } from "react-router-dom"
import { DataContext } from "../../redux/DataContext"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../Access/firebase-config";


export default function Nav() {

const navigate = useNavigate()
const location = useLocation()
const { user, setUser } = useContext(DataContext)


const logout = async () => {
    await signOut(auth);
    setUser({})
    navigate("/login")
};

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

        <Link to ="/dashboard" className = "nav-item">
            <span >Dashboard</span>
        </Link>

        <Link to ="/login" className = "nav-item">
            <span >Login</span>
        </Link>

        <Link  className = "nav-item">
            <span onClick={logout}>Logout</span>
        </Link>

    </nav>
)}