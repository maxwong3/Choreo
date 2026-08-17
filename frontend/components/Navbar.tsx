"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const onGroupsTab = pathname.startsWith("/groups");
  const onCoversTab = pathname.startsWith("/covers");
  const onProjectsTab = pathname.startsWith("/projects");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
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
              backgroundColor: onGroupsTab ? "#FFFFFF" : "transparent",
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
              backgroundColor: onCoversTab ? "#FFFFFF" : "transparent",
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
          <Link
            href="/projects"
            style={{
              backgroundColor: onProjectsTab ? "#FFFFFF" : "transparent",
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

      {/* Right Header Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>💬</span>
        <span style={{ fontSize: "20px", cursor: "pointer" }}>📷</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            {/* Profile Button */}
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            ></button>

            {/* Dropdown */}
            {profileOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "54px",
                  right: "0",
                  width: "190px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
                  padding: "10px",
                  zIndex: 100,
                }}
              >
                {/* Login Status */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: isLoggedIn ? "#2E8B57" : "#777777",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: isLoggedIn ? "#2E8B57" : "#AAAAAA",
                    }}
                  />

                  {isLoggedIn ? "Logged in" : "Not logged in"}
                </div>

                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#E5E5E5",
                    margin: "4px 0",
                  }}
                />

                {isLoggedIn ? (
                  <>
                    <Link
                      href="/profile"
                      style={{
                        display: "block",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        color: "#000000",
                        textDecoration: "none",
                        fontSize: "15px",
                      }}
                    >
                      My Profile
                    </Link>

                    <button
                      onClick={() => {
                        localStorage.removeItem("accessToken");
                        window.location.reload();
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "10px 12px",
                        border: "none",
                        backgroundColor: "transparent",
                        borderRadius: "10px",
                        color: "#000000",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    style={{
                      display: "block",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      color: "#000000",
                      textDecoration: "none",
                      fontSize: "15px",
                    }}
                  >
                    Log In
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
