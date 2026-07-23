"use client";

import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Login state
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [token, setToken] = useState("");
    const [response, setResponse] = useState("");

    async function register() {
        const res = await fetch(
            "http://localhost:5000/api/v1/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    firstName,
                    lastName
                })
            }
        );

        const data = await res.json();

        console.log(data);

        setToken(data.accessToken);
        localStorage.setItem(
            "accessToken",
            data.accessToken
        );
    }

    async function login() {
        const res = await fetch(
            "http://localhost:5000/api/v1/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: loginUsername,
                    password: loginPassword
                })
            }
        );

        console.log("STATUS:", res.status);
        console.log("CONTENT TYPE:", res.headers.get("content-type"));

        const data = await res.json();

        setToken(data.accessToken);
        localStorage.setItem(
            "accessToken",
            data.accessToken
        );
    }


    async function testMe() {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(
            "http://localhost:5000/api/v1/auth/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await res.json();

        setResponse(
            JSON.stringify(data, null, 2)
        );
    }


    return (
        <main>
            <h1>For API Testing: Access token expires in 30s.</h1>

            <h2>Register</h2>

            <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
            />

            <button onClick={register}>
                Register
            </button>


            <h2>Login</h2>

            <input 
              placeholder="username"
              onChange={(e)=> setLoginUsername(e.target.value)}
            />

            <input
              placeholder="password"
              onChange={(e)=> setLoginPassword(e.target.value)}
            />

            <button onClick={login}>
                Login
            </button>


            <h2>Token</h2>

            <textarea
                value={token}
                onChange={(e) => setToken(e.target.value)}
            />


            <h2>Protected Route</h2>

            <button onClick={testMe}>
                Test /me
            </button>


            <pre>
                {response}
            </pre>
        </main>
    );
}