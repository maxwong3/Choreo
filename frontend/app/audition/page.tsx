"use client";

import Link from "next/link";

export default function AuditionPage() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Header Navigation */}
      <nav
        style={{
          width: "100%",
          height: "89px",
          backgroundColor: "#D9D9D9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 39px",
          boxSizing: "border-box",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <span
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            CHOREO
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/groups"
              style={{
                fontSize: "20px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              groups
            </Link>

            <Link
              href="/covers"
              style={{
                fontSize: "20px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              covers
            </Link>

            {/* Vertical Separator */}
            <div
              style={{
                width: "1px",
                height: "45px",
                backgroundColor: "#000000",
              }}
            />

            <Link
              href="/projects"
              style={{
                fontSize: "20px",
                color: "#000000",
                textDecoration: "none",
              }}
            >
              my projects
            </Link>
          </div>
        </div>

        {/* Right Nav Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg
            width="32"
            height="31"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            style={{ cursor: "pointer" }}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            style={{ cursor: "pointer" }}
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>

          <div
            style={{
              width: "57px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </nav>

      {/* Main Workspace Layout */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 80px",
          boxSizing: "border-box",
          gap: "40px",
        }}
      >
        {/* Left Side: Reference Video & Takes */}
        <div style={{ flex: 1, maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 700,
              margin: "0 0 20px 0",
              color: "#000000",
            }}
          >
            REFERENCE VIDEO
          </h1>

          {/* Video Placeholder Box */}
          <div
            style={{
              width: "100%",
              height: "338px",
              backgroundColor: "#222222",
              borderRadius: "50px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#888888", fontSize: "18px" }}>
              [ Reference Video Placeholder ]
            </span>
          </div>

          {/* Video Timeline Control */}
          <div
            style={{
              width: "100%",
              height: "36px",
              backgroundColor: "#D9D9D9",
              borderRadius: "50px",
              margin: "24px 0 28px 0",
              position: "relative",
            }}
          >
            {/* Active timeline section */}
            <div
              style={{
                width: "171px",
                height: "36px",
                backgroundColor: "#676767",
                borderRadius: "50px",
                position: "absolute",
                left: "158px",
              }}
            />
            {/* Knob handle */}
            <div
              style={{
                width: "42px",
                height: "42px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                position: "absolute",
                left: "259px",
                top: "-3px",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* Action Control Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            <button
              style={{
                width: "180px",
                height: "50px",
                backgroundColor: "#D8D6D6",
                border: "none",
                borderRadius: "100px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Loop
            </button>

            {/* Play Button */}
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "2px solid #000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000000">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>

            <button
              style={{
                width: "180px",
                height: "50px",
                backgroundColor: "#D8D6D6",
                border: "none",
                borderRadius: "100px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Change Speed
            </button>
          </div>

          {/* My Takes & Upload Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingTop: "10px",
            }}
          >
            {/* Takes Stack Column */}
            <div>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  margin: "0 0 24px 0",
                  color: "#000000",
                }}
              >
                MY TAKES
              </h2>

              {/* Rotated Card Stack */}
              <div
                style={{
                  position: "relative",
                  width: "210px",
                  height: "210px",
                }}
              >
                {/* Back card */}
                <div
                  style={{
                    position: "absolute",
                    width: "130px",
                    height: "209px",
                    backgroundColor: "#9D9D9D",
                    borderRadius: "30px",
                    transform: "rotate(-16.53deg)",
                    top: "10px",
                    left: "0px",
                  }}
                />
                {/* Middle card */}
                <div
                  style={{
                    position: "absolute",
                    width: "130px",
                    height: "209px",
                    backgroundColor: "#B9B9B9",
                    borderRadius: "30px",
                    transform: "rotate(-10.91deg)",
                    top: "0px",
                    left: "35px",
                  }}
                />
                {/* Top card with Pink Border */}
                <div
                  style={{
                    position: "absolute",
                    width: "130px",
                    height: "209px",
                    backgroundColor: "#D9D9D9",
                    border: "5px solid #EB5786",
                    borderRadius: "30px",
                    top: "12px",
                    left: "75px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* Upload & Submit Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  margin: "0 0 20px 0",
                  color: "#000000",
                }}
              >
                UPLOAD
              </h2>

              {/* Upload Icon */}
              <div
                style={{
                  margin: "10px 0 30px 0",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>

              {/* Submit Button */}
              <button
                style={{
                  width: "176px",
                  height: "51px",
                  backgroundColor: "#DEDEDE",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "32px",
                  cursor: "pointer",
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Camera View & Settings */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* Settings Button */}
          <button
            style={{
              width: "190px",
              height: "51px",
              backgroundColor: "#DEDEDE",
              border: "none",
              borderRadius: "50px",
              fontSize: "32px",
              marginBottom: "14px",
              cursor: "pointer",
            }}
          >
            settings
          </button>

          {/* Camera Card View */}
          <div
            style={{
              width: "482px",
              height: "787px",
              backgroundColor: "#1A1A1A",
              borderRadius: "51px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingBottom: "40px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                color: "#666666",
                fontSize: "18px",
              }}
            >
              [ Live Camera Recording View ]
            </span>

            {/* Record Control Button */}
            <div
              style={{
                width: "134px",
                height: "134px",
                borderRadius: "50%",
                border: "10px solid #FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#AD3535",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}