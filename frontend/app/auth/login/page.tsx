"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginResult, setLoginResult] = useState("");

  async function login() {
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    const data = await res.json();
    console.log("STATUS:", res.status);
    console.log("CONTENT TYPE:", res.headers.get("content-type"));
    console.log("LOGIN RESPONSE:", data);

    if (res.ok) {
      setLoginResult("");
      setLoginUsername("");
      setLoginPassword("");
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/groups");
    } else setLoginResult("Invalid Username or Password.");
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Return Button */}
      <Link
        href="/groups"
        style={{
          position: "absolute",
          top: "54px",
          left: "52px",
          backgroundColor: "transparent",
          border: "none",
          color: "#555555",
          fontSize: "16px",
          fontWeight: 500,
          cursor: "pointer",
          padding: "8px 12px",
        }}
      >
        ← Home
      </Link>
      {/* Title - Scaled from 96px to 64px */}
      <h1
        style={{
          fontSize: "64px",
          fontWeight: 700,
          color: "#000000",
          marginBottom: "24px",
          textAlign: "center",
          lineHeight: "1.1",
        }}
      >
        CHOREO
      </h1>

      {/* Card - Scaled max-width from 658px to 520px */}
      <div
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: "40px",
          width: "100%",
          maxWidth: "520px",
          padding: "36px",
          boxSizing: "border-box",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          {/* Email or username */}
          <div
            style={{
              marginBottom: "12px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="username"
              style={{
                fontSize: "16px",
                color: "#000000",
                marginBottom: "6px",
                paddingLeft: "8px",
              }}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50px",
                border: "none",
                padding: "0 20px",
                fontSize: "16px",
                color: "#000000",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}
          <div
            style={{
              marginBottom: "18px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="password"
              style={{
                fontSize: "16px",
                color: "#000000",
                marginBottom: "6px",
                paddingLeft: "8px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50px",
                border: "none",
                padding: "0 20px",
                fontSize: "16px",
                color: "#000000",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div
            style={{
              textAlign: "center",
              marginBottom: "12px",
              color: "black",
            }}
          >
            <p>{loginResult}</p>
          </div>

          {/* Button - Scaled from 295px x 64px to 220px x 52px */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                width: "220px",
                height: "52px",
                backgroundColor: "#7C7C7C",
                borderRadius: "50px",
                border: "none",
                fontWeight: 700,
                fontSize: "18px",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "16px",
              color: "#888888",
              fontSize: "16px",
            }}
          >
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              style={{
                color: "#555555",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
