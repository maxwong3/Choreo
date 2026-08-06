"use client";

import Link from "next/link";

export default function LoginPage() {
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
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email or username */}
          <div
            style={{
              marginBottom: "16px",
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
              Email or username
            </label>
            <input
              type="text"
              id="username"
              required
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
              marginBottom: "12px",
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
              required
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

          {/* i forgot.... */}
          <Link
            href="#"
            style={{
              fontSize: "16px",
              color: "#888888",
              textDecoration: "none",
              marginBottom: "24px",
              paddingLeft: "8px",
              display: "inline-block",
            }}
          >
            i forgot....
          </Link>

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
        </form>
      </div>
    </div>
  );
}