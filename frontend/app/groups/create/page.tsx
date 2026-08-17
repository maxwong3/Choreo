"use client";

import Link from "next/link";
import { useState } from "react";

export default function CreateGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [response, setResponse] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

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
        description: description,
        location: location,
        thumbnail_url: imagePreview,
      }),
    });

    const data = await res.json();

    setResponse(JSON.stringify(data, null, 2));

    if (res.ok) {
      setGroupName("");
      setDescription("");
      setLocation("");
      setImagePreview("");
      setResponse("Group successfully created.");
    } else if (data.errors?.length > 0) {
      setResponse(data.errors[0].message);
    } else {
      setResponse("Something went wrong. Please try again later.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Navigation Header */}
      <nav
        style={{
          width: "100%",
          height: "72px",
          backgroundColor: "#D9D9D9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            CHOREO
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Link
              href="/groups"
              style={{
                fontSize: "16px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              groups
            </Link>

            <Link
              href="/covers"
              style={{
                fontSize: "16px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              covers
            </Link>

            <Link
              href="#"
              style={{
                fontSize: "16px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              my projects
            </Link>
          </div>
        </div>

        {/* Right Header Icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <span style={{ fontSize: "20px", cursor: "pointer" }}>💬</span>

          <span style={{ fontSize: "20px", cursor: "pointer" }}>📷</span>

          <Link
            href="/auth/login"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Back Link */}
        <Link
          href="/groups"
          style={{
            display: "inline-block",
            marginBottom: "28px",
            color: "#555555",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 500,
          }}
        >
          ← Back to groups
        </Link>

        {/* Heading */}
        <div style={{ marginBottom: "36px" }}>
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "38px",
              fontWeight: 800,
              color: "#000000",
            }}
          >
            CREATE GROUP
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              color: "#666666",
              lineHeight: "24px",
            }}
          >
            Create a group for dancers to connect, collaborate, and create
            together.
          </p>
        </div>

        {/* Form */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* Group Image */}
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              Group Image
            </label>

            <label
              htmlFor="group-image"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "28px",
                border: "2px dashed #D9D9D9",
                backgroundColor: "#F7F7F7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Group preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    color: "#777777",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "8px",
                    }}
                  >
                    +
                  </div>

                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Add image
                  </div>
                </div>
              )}
            </label>

            <input
              id="group-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* Group Name */}
          <div>
            <label
              htmlFor="group-name"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              Group Name
            </label>

            <input
              id="group-name"
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder=""
              style={{
                width: "100%",
                height: "52px",
                padding: "0 18px",
                boxSizing: "border-box",
                border: "2px solid #D9D9D9",
                borderRadius: "16px",
                outline: "none",
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                color: "#000000",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="group-description"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              Description
            </label>

            <textarea
              id="group-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell dancers about your group..."
              rows={5}
              style={{
                width: "100%",
                padding: "16px 18px",
                boxSizing: "border-box",
                border: "2px solid #D9D9D9",
                borderRadius: "16px",
                outline: "none",
                resize: "vertical",
                fontSize: "16px",
                lineHeight: "24px",
                fontFamily: "'Inter', sans-serif",
                color: "#000000",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="group-location"
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              Location
            </label>

            <input
              id="group-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                width: "100%",
                height: "52px",
                padding: "0 18px",
                boxSizing: "border-box",
                border: "2px solid #D9D9D9",
                borderRadius: "16px",
                outline: "none",
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                color: "#000000",
                backgroundColor: "#FFFFFF",
              }}
            />
          </div>

          {/* Create Button */}
          <button
            type="button"
            onClick={createGroup}
            style={{
              width: "100%",
              height: "58px",
              marginTop: "8px",
              border: "none",
              borderRadius: "100px",
              backgroundColor: "#EB5786",
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "0.3px",
              cursor: "pointer",
              boxShadow: "0px 5px 12px rgba(235, 87, 134, 0.2)",
            }}
          >
            CREATE GROUP
          </button>
        </div>
      </main>
    </div>
  );
}
