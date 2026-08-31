"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProjectCard {
  id: number;
  title: string;
  artist: string;
  isLeading: boolean;
}

const projects: ProjectCard[] = [
  { id: 1, title: "BAD", artist: "CHRISTOPHER", isLeading: true },
  { id: 2, title: "HEART ATTACK", artist: "CHUU", isLeading: false },
  { id: 3, title: "CHK CHK BOOM", artist: "STRAY KIDS", isLeading: false },
  { id: 4, title: "FANCY", artist: "TWICE", isLeading: false },
  { id: 5, title: "GNARLY", artist: "KATSEYE", isLeading: false },
  { id: 6, title: "WDA", artist: "AESPA", isLeading: false },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"popcorn" | "fresa">("popcorn");
  // Set to null so the hamburger menu shows by default instead of the open 'X' state
  const [openMenuId, setOpenMenuId] = useState<number | null>(null); 

  const toggleMenu = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

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

            {/* Vertical Separator */}
            <div
              style={{
                width: "1px",
                height: "28px",
                backgroundColor: "#000000",
              }}
            />

            {/* Active Pill Link */}
            <Link
              href="/projects"
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

      {/* Main Content Workspace Area */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 32px 48px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1160px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sub-nav Tab Switcher Bar */}
          <div
            style={{
              width: "100%",
              height: "64px",
              backgroundColor: "#D9D9D9",
              borderRadius: "100px",
              marginBottom: "42px",
              display: "flex",
              alignItems: "center",
              padding: "4px",
              boxSizing: "border-box",
            }}
          >
            <button
              onClick={() => setActiveTab("popcorn")}
              style={{
                height: "100%",
                backgroundColor:
                  activeTab === "popcorn" ? "#B4B4B4" : "transparent",
                borderRadius: "100px",
                border: "none",
                padding: "0 28px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000000",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              POPCORN 26&apos;-27&apos;
            </button>

            <button
              onClick={() => setActiveTab("fresa")}
              style={{
                height: "100%",
                backgroundColor:
                  activeTab === "fresa" ? "#B4B4B4" : "transparent",
                borderRadius: "100px",
                border: "none",
                padding: "0 28px",
                fontSize: "28px",
                fontWeight: 700,
                color: "#000000",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              FRESA 26&apos;-27&apos;
            </button>
          </div>

          {/* Cards Grid Container (3 columns) */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "50px",
            }}
          >
            {projects.map((item) => {
              const isMenuOpen = openMenuId === item.id;

              return (
                <div
                  key={item.id}
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1", 
                    borderRadius: "40px",
                    position: "relative",
                    boxSizing: "border-box",
                    border: item.isLeading ? "6px solid #E40282" : "none",
                    backgroundColor: "#C9C9C9",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    // Removed overflow: "hidden" here so the bottom pill isn't clipped
                  }}
                >
                  {/* Pink Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: item.isLeading ? "34px" : "40px",
                      background: item.isLeading
                        ? "linear-gradient(180deg, rgba(237, 94, 144, 0.55) 0%, rgba(255, 255, 255, 0.35) 100%)"
                        : "linear-gradient(180deg, rgba(255, 0, 111, 0.45) 20%, rgba(255, 255, 255, 0.15) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Card Title & Subtitle */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      textAlign: "center",
                      color: "#FFFFFF",
                      textShadow: "0px 3px 6px rgba(0, 0, 0, 0.6)",
                      padding: "0 12px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        margin: 0,
                        lineHeight: "36px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        margin: "4px 0 0 0",
                        lineHeight: "24px",
                      }}
                    >
                      {item.artist}
                    </p>
                  </div>

                  {/* Top-Right Menu / Close Icon */}
                  <button
                    onClick={() => toggleMenu(item.id)}
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "18px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      zIndex: 10,
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isMenuOpen ? (
                      /* Close (X) Icon */
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      /* Hamburger Menu Icon */
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Action Menu */}
                  {isMenuOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "52px",
                        right: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        zIndex: 20,
                        filter: "drop-shadow(0px 3px 6px rgba(0,0,0,0.3))",
                      }}
                    >
                      {item.isLeading ? (
                        <>
                          <button
                            style={{
                              width: "90px",
                              height: "32px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              border: "none",
                              fontSize: "15px",
                              color: "#000000",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            edit
                          </button>
                          <button
                            style={{
                              width: "90px",
                              height: "32px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              border: "none",
                              fontSize: "15px",
                              color: "#000000",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            archive
                          </button>
                          <button
                            onClick={() => setOpenMenuId(null)}
                            style={{
                              width: "90px",
                              height: "32px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              border: "none",
                              fontSize: "15px",
                              color: "#FF0303",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            style={{
                              width: "90px",
                              height: "32px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              border: "none",
                              fontSize: "15px",
                              color: "#000000",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            archive
                          </button>
                          <button
                            style={{
                              width: "90px",
                              height: "32px",
                              backgroundColor: "#FFFFFF",
                              borderRadius: "100px",
                              border: "none",
                              fontSize: "15px",
                              color: "#FF0000",
                              fontWeight: 500,
                              cursor: "pointer",
                            }}
                          >
                            leave..
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {/* "leading" Badge Pill */}
                  {item.isLeading && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-16px",
                        width: "140px",
                        height: "32px",
                        backgroundColor: "#E40282",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 500,
                        zIndex: 10,
                      }}
                    >
                      leading
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}