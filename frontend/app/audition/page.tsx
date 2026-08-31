"use client";

import Link from "next/link";

export default function AuditionPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header Navigation */}
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
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <span
            style={{
              fontSize: "32px",
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
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                padding: "6px 20px",
                fontSize: "16px",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 500,
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

            {/* Vertical Separator */}
            <div
              style={{
                width: "1px",
                height: "28px",
                backgroundColor: "#000000",
              }}
            />

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

        {/* Right Nav Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ cursor: "pointer" }}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ cursor: "pointer" }}
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>

          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </nav>

      {/* Main Workspace Body - Adjusted Scale */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          padding: "32px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1160px",
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          {/* Left Side: Video Player & Takes */}
          <div style={{ flex: "1 1 520px", maxWidth: "540px" }}>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: 700,
                margin: "0 0 14px 0",
                color: "#000000",
              }}
            >
              REFERENCE VIDEO
            </h1>

            {/* Adjusted Video Box Placeholder */}
            <div
              style={{
                width: "100%",
                height: "290px",
                backgroundColor: "#222222",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#888888", fontSize: "15px" }}>
                [ Reference Video Placeholder ]
              </span>
            </div>

            {/* Adjusted Timeline Progress Bar */}
            <div
              style={{
                width: "100%",
                height: "24px",
                backgroundColor: "#D9D9D9",
                borderRadius: "50px",
                margin: "16px 0 20px 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "140px",
                  height: "24px",
                  backgroundColor: "#676767",
                  borderRadius: "50px",
                  position: "absolute",
                  left: "130px",
                }}
              />
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "220px",
                  top: "-4px",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            {/* Adjusted Loop / Play / Speed Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <button
                style={{
                  width: "130px",
                  height: "40px",
                  backgroundColor: "#D8D6D6",
                  border: "none",
                  borderRadius: "100px",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Loop
              </button>

              <button
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "3px solid #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#000000">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>

              <button
                style={{
                  width: "130px",
                  height: "40px",
                  backgroundColor: "#D8D6D6",
                  border: "none",
                  borderRadius: "100px",
                  fontSize: "15px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Change Speed
              </button>
            </div>

            {/* Adjusted My Takes & Upload Columns */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingRight: "10px",
              }}
            >
              {/* Adjusted My Takes Card Stack */}
              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    margin: "0 0 14px 0",
                    color: "#000000",
                  }}
                >
                  MY TAKES
                </h2>

                <div
                  style={{
                    position: "relative",
                    width: "160px",
                    height: "170px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "155px",
                      backgroundColor: "#9D9D9D",
                      borderRadius: "20px",
                      transform: "rotate(-16deg)",
                      top: "6px",
                      left: "0px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "155px",
                      backgroundColor: "#B9B9B9",
                      borderRadius: "20px",
                      transform: "rotate(-10deg)",
                      top: "0px",
                      left: "26px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "155px",
                      backgroundColor: "#D9D9D9",
                      border: "4px solid #EB5786",
                      borderRadius: "20px",
                      top: "10px",
                      left: "55px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>

              {/* Adjusted Upload & Submit */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    margin: "0 0 10px 0",
                    color: "#000000",
                  }}
                >
                  UPLOAD
                </h2>

                <div style={{ margin: "6px 0 16px 0", cursor: "pointer" }}>
                  <svg
                    width="48"
                    height="48"
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

                <button
                  style={{
                    width: "120px",
                    height: "40px",
                    backgroundColor: "#DEDEDE",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Adjusted Settings & Camera Frame */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/* Settings Button */}
            <button
              style={{
                width: "130px",
                height: "40px",
                backgroundColor: "#DEDEDE",
                border: "none",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 500,
                marginBottom: "14px",
                cursor: "pointer",
              }}
            >
              settings
            </button>

            {/* Adjusted Tall Live Recording Camera Box */}
            <div
              style={{
                width: "400px",
                height: "580px",
                backgroundColor: "#1A1A1A",
                borderRadius: "40px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                paddingBottom: "28px",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "45%",
                  color: "#666666",
                  fontSize: "15px",
                }}
              >
                [ Live Camera Recording View ]
              </span>

              {/* Adjusted Record Button */}
              <div
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  border: "5px solid #FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#AD3535",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}