import { signInWithGoogle } from "./firebase-config";
import React, {useState, useContext} from "react"
import {DataContext} from "../../redux/DataContext"

function GoogleAccess() {

    const {user, setUser} = useContext(DataContext)

    return (
        <div className="App">
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
            {/* <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("profilePic")} /> */}
        </div>
    );
}

export default GoogleAccess;
