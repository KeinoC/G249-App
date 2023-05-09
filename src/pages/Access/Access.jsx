import { useState, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import firebase from 'firebase/app';
import { auth } from "./firebase-config";
import GoogleAccess from "./GoogleAccess";
import { DataContext } from "../../redux/DataContext";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Access.css"

function Access() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(DataContext);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    //     if(user) {
    //         navigate("/dashboard")
    //     } else {
    //         navigate("/login")
    //     }
    // });



    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            navigate("/dashboard");
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser({});
        navigate("/login");
    };

    return (
        <div className="App">
            <Nav />
            <div className = "access-container">
                <h3> Register User </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />

                <button onClick={register}> Create User</button>
            </div>

            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />

                <button onClick={login}> Login</button>
                <GoogleAccess />
            </div>

            <h4> User Logged In: </h4>
            {user?.email}

            <button onClick={() => logout()}> Sign Out </button>
        </div>
    );
}

export default Access;
