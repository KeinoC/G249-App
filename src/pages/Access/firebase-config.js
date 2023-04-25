import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUZQEQHDvLLmYdK9bqB-crKOFStpULkmk",
    authDomain: "g249api.firebaseapp.com",
    databaseURL: "https://g249api-default-rtdb.firebaseio.com",
    projectId: "g249api",
    storageBucket: "g249api.appspot.com",
    messagingSenderId: "966250425627",
    appId: "1:966250425627:web:096151ed1fd4dce5e077be",
    measurementId: "G-QW1PG8GZ59",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
            console.log(error);
        });
};
