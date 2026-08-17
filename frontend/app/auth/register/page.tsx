"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [registerResult, setRegisterResult] = useState("");

  async function register() {
    if (password != confirmPassword) {
      setRegisterResult("Passwords do not match.");
      return;
    }
    const res = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        firstName,
        lastName,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setRegisterResult("");
      localStorage.setItem("accessToken", data.accessToken);
      router.push("/auth/login");
    } else if (res.status === 409) {
      setRegisterResult(data.error.message);
    } else if (data.errors?.length > 0) {
      setRegisterResult(data.errors[0].message);
    } else {
      setRegisterResult("Something went wrong. Please try again later.");
    }
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
        padding: "30px 20px",
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

      {/* Register card */}
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
            register();
          }}
        >
          {/* Username */}
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
              Username
            </label>

            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          {/* First + Last Name */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            {/* First Name */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="firstName"
                style={{
                  fontSize: "16px",
                  color: "#000000",
                  marginBottom: "6px",
                  paddingLeft: "8px",
                }}
              >
                First Name
                <span
                  style={{
                    color: "#888888",
                    fontSize: "13px",
                    marginLeft: "5px",
                  }}
                >
                  Optional
                </span>
              </label>

              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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

            {/* Last Name */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="lastName"
                style={{
                  fontSize: "16px",
                  color: "#000000",
                  marginBottom: "6px",
                  paddingLeft: "8px",
                }}
              >
                Last Name
                <span
                  style={{
                    color: "#888888",
                    fontSize: "13px",
                    marginLeft: "5px",
                  }}
                >
                  Optional
                </span>
              </label>

              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
          </div>

          {/* Email */}
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="email"
              style={{
                fontSize: "16px",
                color: "#000000",
                marginBottom: "6px",
                paddingLeft: "8px",
              }}
            >
              Email
              <span
                style={{
                  color: "#888888",
                  fontSize: "13px",
                  marginLeft: "5px",
                }}
              >
                Optional
              </span>
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              marginBottom: "16px",
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Confirm Password */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label
              htmlFor="confirmPassword"
              style={{
                fontSize: "16px",
                color: "#000000",
                marginBottom: "6px",
                paddingLeft: "8px",
              }}
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            <p>{registerResult}</p>
          </div>

          {/* Create Account */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
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
              Create Account
            </button>
          </div>
        </form>

        {/* Sign in */}
        <div
          style={{
            textAlign: "center",
            marginTop: "16px",
            color: "#888888",
            fontSize: "16px",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/auth/login"
            style={{
              color: "#555555",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
