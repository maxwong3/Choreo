"use client";

import Link from "next/link";

export default function GroupsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
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
          position: "sticky",
          top: 0,
          zIndex: 100,
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

      {/* Main Feed Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          gap: "40px",
        }}
      >
        {/* Card 1: AUDITION PROJECT */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "#D9D9D9",
            borderRadius: "44px",
            padding: "36px 40px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Row: Title & Action Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  margin: "0 0 4px 0",
                  color: "#000000",
                }}
              >
                AUDITION PROJECT
              </h2>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  margin: "0 0 20px 0",
                  color: "#000000",
                }}
              >
                FREAK ALARM - ALPHADRIVEONE
              </p>
            </div>

            {/* Heart & Comment Icons */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ cursor: "pointer" }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <svg
                width="28"
                height="28"
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
            </div>
          </div>

          {/* Details Block */}
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              color: "#000000",
              marginBottom: "28px",
            }}
          >
            <p style={{ margin: "2px 0" }}>
              <strong>Leader:</strong> John Pork
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Number of Members:</strong> 6
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Duration:</strong> 6-7 weeks
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Leading style:</strong> Members learn mostly on their own
              between practices
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Audition criteria:</strong> 0:51-1:24
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Looking for</strong> accuracy, sharpness, energy!
            </p>
          </div>

          {/* Bottom Section: Video Preview & Action Column */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            {/* Video Thumbnail Placeholder */}
            <div
              style={{
                width: "400px",
                height: "220px",
                backgroundColor: "#1A1A1A",
                borderRadius: "16px",
                border: "1px solid #000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FF3B30",
                fontSize: "20px",
                fontWeight: 700,
                textAlign: "center",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              Dance Practice Mirrored
            </div>

            {/* Due Date & Action Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#000000",
                  lineHeight: "1.2",
                  marginBottom: "4px",
                }}
              >
                DUE: MONDAY,
                <br />
                JULY 6
              </div>

              <Link
                href="/audition"
                style={{
                  width: "160px",
                  height: "48px",
                  backgroundColor: "#FAFAFA",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#000000",
                  textDecoration: "none",
                  fontWeight: 400,
                }}
              >
                audition
              </Link>

              <button
                style={{
                  width: "160px",
                  height: "48px",
                  backgroundColor: "#FAFAFA",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "18px",
                  color: "#000000",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                message
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: QUICK PROJECT */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "#D9D9D9",
            borderRadius: "44px",
            padding: "36px 40px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Row: Title & Action Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  margin: "0 0 4px 0",
                  color: "#000000",
                }}
              >
                QUICK PROJECT
              </h2>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  margin: "0 0 20px 0",
                  color: "#000000",
                }}
              >
                LITTLE MISS - GIRLSET
              </p>
            </div>

            {/* Heart & Comment Icons */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ cursor: "pointer" }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <svg
                width="28"
                height="28"
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
            </div>
          </div>

          {/* Details Block */}
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              color: "#000000",
              marginBottom: "28px",
            }}
          >
            <p style={{ margin: "2px 0" }}>
              <strong>Leader:</strong> Jude Bellingham and Joshua Nathan Lo
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Number of Members:</strong> 1000000
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Duration:</strong> 6-7 weeks
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Leading style:</strong> Members learn mostly on their own
              between practices
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Audition criteria:</strong> 0:51-1:24
            </p>
            <p style={{ margin: "2px 0" }}>
              <strong>Looking for</strong> accuracy, sharpness, energy! NO
              BRITISH ACCENTS
            </p>
          </div>

          {/* Bottom Section: Video Preview & Action Column */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            {/* Video Thumbnail Placeholder */}
            <div
              style={{
                width: "400px",
                height: "220px",
                backgroundColor: "#2B2B2B",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00E5FF",
                fontSize: "24px",
                fontWeight: 800,
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              JUDF OFFICIAL
            </div>

            {/* Due Date & Action Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  textAlign: "center",
                  color: "#000000",
                  lineHeight: "1.2",
                  marginBottom: "4px",
                }}
              >
                DUE: THURSDAY,
                <br />
                JULY 2
              </div>

              <button
                disabled
                style={{
                  width: "160px",
                  height: "48px",
                  backgroundColor: "#EDEDED",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "18px",
                  color: "#9F9F9F",
                  fontWeight: 400,
                  cursor: "not-allowed",
                }}
              >
                audition
              </button>

              <button
                style={{
                  width: "160px",
                  height: "48px",
                  backgroundColor: "#FAFAFA",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: "18px",
                  color: "#000000",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}