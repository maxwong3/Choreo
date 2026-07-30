// Page for backend testing

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

  const [loginResult, setLoginResult] = useState("");
  const [myProfileResponse, setMyProfileResponse] = useState("");

  // Profile
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [pfpUrl, setPfpUrl] = useState("");
  const [instaUrl, setInstaUrl] = useState("");
  const [ytUrl, setYtUrl] = useState("");
  const [ttUrl, setTtUrl] = useState("");
  const [expLevel, setExpLevel] = useState("");
  const [danceStyles, setDanceStyles] = useState("");

  const [updateResponse, setUpdateResponse] = useState("");

  async function register() {
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

    if (res.ok) {
      setUsername("");
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }

    const data = await res.json();

    console.log(data);

    setToken(data.accessToken);
    localStorage.setItem("accessToken", data.accessToken);
  }

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

    console.log("STATUS:", res.status);
    console.log("CONTENT TYPE:", res.headers.get("content-type"));

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);
    setToken(data.accessToken);

    if (res.status === 200) {
      setLoginResult("Login Successful!");
      setLoginUsername("");
      setLoginPassword("");
    } else setLoginResult("Invalid Username or Password.");
    localStorage.setItem("accessToken", data.accessToken);
  }

  async function testMe() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:5000/api/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    setResponse(JSON.stringify(data, null, 2));
  }

  // Profile routes
  async function getMyProfile() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch("http://localhost:5000/api/v1/profile/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (res.status === 200) setMyProfileResponse(JSON.stringify(data, null, 2));
    else setMyProfileResponse("You must login to see your Profile!");
  }

  async function updateProfile() {
    const token = localStorage.getItem("accessToken");
    const res = await fetch("http://localhost:5000/api/v1/profile/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bio: bio,
        location: location,
        instagramUrl: instaUrl,
        youtubeUrl: ytUrl,
        tiktokUrl: ttUrl,
        experienceLevel: expLevel,
      }),
    });

    if (res.ok) {
      setUpdateResponse("Profile updated!");
      setBio("");
      setLocation("");
      setInstaUrl("");
      setYtUrl("");
      setTtUrl("");
      setExpLevel("");
      setDanceStyles("");
    } else {
      setUpdateResponse("Invalid or empty input.");
    }
  }

  return (
    <main>
      <h1>For API Testing: Access token expires in 30s.</h1>

      <h2>Register</h2>

      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <h2>Login</h2>

      <input
        placeholder="username"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p>{loginResult}</p>

      <h2>Token</h2>

      <textarea value={token} onChange={(e) => setToken(e.target.value)} />

      <h2>Protected Route</h2>

      <button onClick={testMe}>Test /me</button>

      <pre>{response}</pre>

      <button onClick={getMyProfile}>Your Profile</button>

      <pre>{myProfileResponse}</pre>

      <h2>Edit Profile</h2>

      <div>
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <textarea
          placeholder="Enter bio here."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <div>
        <select value={expLevel} onChange={(e) => setExpLevel(e.target.value)}>
          <option value="">Select an Experience Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <div>
        <input
          placeholder="Profile Picture URL"
          value={pfpUrl}
          onChange={(e) => setPfpUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Instagram URL"
          value={instaUrl}
          onChange={(e) => setInstaUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Youtube URL"
          value={ytUrl}
          onChange={(e) => setYtUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Tiktok URL"
          value={ttUrl}
          onChange={(e) => setTtUrl(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Dance Styles (not implemented in the frontend currently)"
          value={danceStyles}
          onChange={(e) => setDanceStyles(e.target.value)}
        />
      </div>

      <button onClick={updateProfile}>Save</button>
      <pre>{updateResponse}</pre>
    </main>
  );
}
