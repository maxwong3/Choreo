"use client";

import Link from "next/link";

const groupsData = [
  {
    id: 1,
    name: "FRESA",
    gradient: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
    buttonText: "VIEW",
  },
  {
    id: 2,
    name: "CMU KPDC",
    gradient: "linear-gradient(180deg, #ED5E90 0%, #B0B0B0 100%)",
    buttonText: "JOIN",
  },
  {
    id: 3,
    name: "MANCHESTER UNITED D.C. (DANCE CLUB)",
    gradient: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
    buttonText: "JOIN",
  },
  {
    id: 4,
    name: "BALLET IN NYC",
    gradient: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
    buttonText: "VIEW",
  },
  {
    id: 5,
    name: "PSU KMPD",
    gradient: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
    buttonText: "VIEW",
  },
  {
    id: 6,
    name: "REAL DANCERS MADRID",
    gradient: "linear-gradient(180deg, #ED5E90 0%, #B0B0B0 100%)",
    buttonText: "VIEW",
  },
];

export default function GroupsPage() {
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

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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

      {/* Main Content Area */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 20px 60px 20px",
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            height: "48px",
            backgroundColor: "#D9D9D9",
            borderRadius: "100px",
            margin: "0 auto 40px auto",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            boxSizing: "border-box",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "18px", color: "#1E1E1E" }}>🔍</span>
          <input
            type="text"
            placeholder="search groups"
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              outline: "none",
              fontSize: "16px",
              color: "#000000",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          <span
            style={{ fontSize: "18px", color: "#1E1E1E", cursor: "pointer" }}
          >
            ⚙️
          </span>
        </div>

        {/* Groups Cards Grid - Locked 3-Column Desktop View */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px 20px",
            justifyItems: "center",
          }}
        >
          {groupsData.map((group) => (
            <div
              key={group.id}
              style={{
                width: "100%",
                maxWidth: "310px",
                height: "410px",
                borderRadius: "40px",
                background: group.gradient,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "32px 20px",
                boxSizing: "border-box",
              }}
            >
              {/* Group Title */}
              <h2
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textAlign: "center",
                  textShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
                  lineHeight: "34px",
                  marginTop: "8px",
                }}
              >
                {group.name}
              </h2>

              {/* Action Button */}
              <button
                style={{
                  width: "170px",
                  height: "60px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "100px",
                  border: "none",
                  fontSize: "26px",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "#000000",
                  cursor: "pointer",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {group.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
