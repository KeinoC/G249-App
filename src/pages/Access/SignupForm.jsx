import React, { useState } from "react";

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        // Create a FormData object to send the data in the request body
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        const url = "https://g249-firebase-node-js-server.vercel.app/"

        // Send a POST request to the backend API for user registration
        fetch(url+"users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Update with the appropriate content type
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            if (response.ok) {
                // Handle successful response, e.g., show a success message
                console.log("User registered successfully");
            } else {
                // Handle error response, e.g., show an error message
                console.error("Failed to register user");
            }
        })
        .catch((error) => {
            // Handle network or other errors
            console.error("Failed to register user", error);
        });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleSignup}>
                    Signup
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
