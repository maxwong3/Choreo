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

  // Projects
  const [projectTitle, setProjectTitle] = useState("");
  const [projectSong, setProjectSong] = useState("");
  const [projectArtist, setProjectArtist] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectVisibility, setProjectVisibility] = useState("public");
  const [memberLimit, setMemberLimit] = useState("");

  const [projectId, setProjectId] = useState("");
  const [projectResponse, setProjectResponse] = useState("");
  const [myProjectsResponse, setMyProjectsResponse] = useState("");

  // Groups
  // Groups
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupLocation, setGroupLocation] = useState("");

  const [groupId, setGroupId] = useState("");
  const [memberUserId, setMemberUserId] = useState("");

  const [groupResponse, setGroupResponse] = useState("");
  const [membersResponse, setMembersResponse] = useState("");
  const [myGroupsResponse, setMyGroupsResponse] = useState("");

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

  // Project functions
  async function createProject() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:5000/api/v1/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: projectTitle,
        song: projectSong,
        artist: projectArtist,
        description: projectDescription,
        visibility: projectVisibility,
        member_limit: Number(memberLimit),
      }),
    });

    const data = await res.json();

    setProjectResponse(JSON.stringify(data, null, 2));

    if (res.ok) {
      setProjectTitle("");
      setProjectSong("");
      setProjectArtist("");
      setProjectDescription("");
      setMemberLimit("");
    }
  }

  async function getMyProjects() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:5000/api/v1/projects/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    setMyProjectsResponse(JSON.stringify(data, null, 2));
  }

  async function getProject() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(
      `http://localhost:5000/api/v1/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();

    setProjectResponse(JSON.stringify(data, null, 2));
  }

  async function deleteProject() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(
      `http://localhost:5000/api/v1/projects/${projectId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (res.status === 204) {
      setProjectResponse("Member removed successfully.");
      return;
    }

    const data = await res.json();
    setProjectResponse(JSON.stringify(data, null, 2));
  }

  // Group Functions
  async function createGroup() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:5000/api/v1/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: groupName,
        description: groupDescription,
        location: groupLocation,
      }),
    });

    const data = await res.json();

    setGroupResponse(JSON.stringify(data, null, 2));

    if (res.ok) {
      setGroupName("");
      setGroupDescription("");
      setGroupLocation("");
    }
  }

  async function getMembers() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(
      `http://localhost:5000/api/v1/groups/${groupId}/members`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();

    setMembersResponse(JSON.stringify(data, null, 2));
  }

  async function getMyGroups() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch("http://localhost:5000/api/v1/groups/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    setMyGroupsResponse(JSON.stringify(data, null, 2));
  }
  async function addMember() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(
      `http://localhost:5000/api/v1/groups/${groupId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: Number(memberUserId),
        }),
      },
    );

    const data = await res.json();

    setGroupResponse(JSON.stringify(data, null, 2));
  }

  async function removeMember() {
    const token = localStorage.getItem("accessToken");

    const res = await fetch(
      `http://localhost:5000/api/v1/groups/${groupId}/members/${memberUserId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (res.status === 204) {
      setGroupResponse("Member removed successfully.");
      return;
    }

    const data = await res.json();
    setGroupResponse(JSON.stringify(data, null, 2));
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

      <h2>Manage your Projects</h2>

      <h3>Your Projects</h3>

      <button onClick={getMyProjects}>Get My Projects</button>

      <pre>{myProjectsResponse}</pre>

      <h3>Create Project</h3>

      <input
        placeholder="Title"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
      />

      <input
        placeholder="Song"
        value={projectSong}
        onChange={(e) => setProjectSong(e.target.value)}
      />

      <input
        placeholder="Artist"
        value={projectArtist}
        onChange={(e) => setProjectArtist(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />

      <select
        value={projectVisibility}
        onChange={(e) => setProjectVisibility(e.target.value)}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>

      <input
        placeholder="Member Limit"
        value={memberLimit}
        onChange={(e) => setMemberLimit(e.target.value)}
      />

      <button onClick={createProject}>Create Project</button>

      <h3>Get/Delete Project</h3>

      <input
        placeholder="Project ID"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
      />

      <button onClick={getProject}>Get Project</button>

      <button onClick={deleteProject}>Delete Project</button>

      <pre>{projectResponse}</pre>

      <h2>Manage your Groups</h2>

      <h3>Create Group</h3>

      <input
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
      />

      <input
        placeholder="Location"
        value={groupLocation}
        onChange={(e) => setGroupLocation(e.target.value)}
      />

      <button onClick={createGroup}>Create Group</button>

      <h3>Your Groups</h3>

      <button onClick={getMyGroups}>Get Your Groups</button>

      <pre>{myGroupsResponse}</pre>

      <h3>Group Members</h3>

      <input
        placeholder="Group ID"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
      />

      <button onClick={getMembers}>Get Members</button>

      <pre>{membersResponse}</pre>

      <h3>Add/Remove Member</h3>

      <input
        placeholder="User ID"
        value={memberUserId}
        onChange={(e) => setMemberUserId(e.target.value)}
      />

      <button onClick={addMember}>Add Member</button>

      <button onClick={removeMember}>Remove Member</button>

      <pre>{groupResponse}</pre>
    </main>
  );
}
