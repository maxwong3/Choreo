"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";

export default function GroupsPage() {
  const router = useRouter();
  const [groupsData, setGroupsData] = useState<any[]>([]);
  const [createHovered, setCreateHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
    if (!token) {
      return;
    }
    const fetchGroups = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/groups/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch groups");
        }

        const data = await response.json();

        setGroupsData(data);
      } catch (err) {
        console.error("Error fetching groups:", err);
      }
    };
    fetchGroups();
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
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

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <Link
            href="/groups/create"
            onMouseEnter={() => setCreateHovered(true)}
            onMouseLeave={() => setCreateHovered(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minWidth: "210px",
              height: "52px",
              padding: "0 28px",
              backgroundColor: createHovered ? "#EB5786" : "#FFFFFF",
              border: "2px solid #EB5786",
              borderRadius: "100px",
              color: createHovered ? "#FFFFFF" : "#EB5786",
              textDecoration: "none",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.3px",
              boxShadow: createHovered
                ? "0px 7px 16px rgba(235, 87, 134, 0.28)"
                : "0px 3px 8px rgba(235, 87, 134, 0.15)",
              transform: createHovered ? "translateY(-3px)" : "translateY(0)",
              transition: "all 0.2s ease",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: 1,
                transform: createHovered ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            >
              +
            </span>{" "}
            CREATE GROUP{" "}
          </Link>
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
                background: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
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
                onClick={() => router.push(`/groups/${group.id}`)}
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
                VIEW
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
