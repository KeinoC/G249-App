import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const handleLogin = async () => {
        try {
            // Create a FormData object to send the data in the request body
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            // const url = "g249-django-git-main-keinoc.vercel.app/api/"
            const url = "https://g249-firebase-node-js-server.vercel.app/";

            // Send a POST request to the Django view for user authentication
            const response = await fetch(url + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Update with the appropriate content type
                    "X-CSRFToken": getCookie("csrftoken"),
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                // Handle successful response, e.g., redirect to dashboard
                console.log("User logged in successfully");
            } else {
                // Handle error response, e.g., show an error message
                console.error("Failed to log in user");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Failed to log in user", error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
