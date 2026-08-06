"use client";

import Link from "next/link";
import { useState } from "react";

const reelsData = [
  {
    id: 1,
    username: "judeluver_x3",
    caption: "love to dance! this my dance! caption lorem ipsum dolor sit amet",
    bgGradient: "linear-gradient(180deg, #383838 0%, #222222 100%)",
  },
  {
    id: 2,
    username: "haaland_moves",
    caption: "choreo practice before the game ⚽🕺",
    bgGradient: "linear-gradient(180deg, #4A3A2C 0%, #221810 100%)",
  },
];

export default function CoversPage() {
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [disliked, setDisliked] = useState<Record<number, boolean>>({});

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
                backgroundColor: "#FFFFFF",
                borderRadius: "100px",
                padding: "6px 20px",
                fontSize: "16px",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 500,
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

      {/* Main Feed Container */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0 48px 0",
          gap: "24px",
          scrollSnapType: "y mandatory",
          scrollPaddingTop: "24px", 
        }}
      >
        {reelsData.map((reel) => (
          <div
            key={reel.id}
            style={{
              scrollSnapAlign: "start",
              width: "410px",
              height: "640px",
              borderRadius: "44px",
              position: "relative",
              overflow: "hidden",
              background: reel.bgGradient,
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            {/* Right Action Stack */}
            <div
              style={{
                position: "absolute",
                right: "18px",
                bottom: "230px", /* INCREASED FROM 165px TO MOVE ICONS HIGHER */
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "18px",
                zIndex: 10,
              }}
            >
              {/* Avatar Circle */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              />

              {/* Heart Icon */}
              <button
                onClick={() =>
                  setLiked((prev) => ({ ...prev, [reel.id]: !prev[reel.id] }))
                }
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
                }}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill={liked[reel.id] ? "#FF2D55" : "none"}
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* Thumbs Down Icon */}
              <button
                onClick={() =>
                  setDisliked((prev) => ({
                    ...prev,
                    [reel.id]: !prev[reel.id],
                  }))
                }
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
                }}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill={disliked[reel.id] ? "#FFFFFF" : "none"}
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                >
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3" />
                </svg>
              </button>

              {/* Comment Bubble Icon */}
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))",
                }}
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <line x1="8" y1="8" x2="16" y2="8" />
                  <line x1="8" y1="12" x2="14" y2="12" />
                </svg>
              </button>
            </div>

            {/* Bottom Pink Caption Card */}
            <div
              style={{
                width: "100%",
                height: "135px",
                borderRadius: "36px",
                background: "linear-gradient(180deg, #FFFFFF 0%, #ED5E90 100%)",
                padding: "16px 20px",
                boxSizing: "border-box",
                zIndex: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#000000",
                  marginBottom: "4px",
                }}
              >
                {reel.username}
              </div>

              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "20px",
                }}
              >
                {reel.caption}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}