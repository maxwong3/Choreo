"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Group = {
  id: number;
  name: string;
  description: string;
  location: string;
  thumbnail_url: string | null;
};

export default function ViewGroupPage() {
  const params = useParams();
  const groupId = params.groupId;

  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const response = await fetch(
          `http://localhost:5000/api/v1/groups/${groupId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch group");
        }

        const data = await response.json();

        setGroup(data);
      } catch (err) {
        console.error("Error fetching group:", err);
        setError("Unable to load this group.");
      } finally {
        setLoading(false);
      }
    };

    if (groupId) {
      fetchGroup();
    }
  }, [groupId]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Loading group...
      </div>
    );
  }

  if (error || !group) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h2>Group not found</h2>

        <Link
          href="/groups"
          style={{
            color: "#EB5786",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Back to groups
        </Link>
      </div>
    );
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

        {/* Header Icons */}
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
            href="/profile"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              display: "block",
            }}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Back */}
        <Link
          href="/groups"
          style={{
            display: "inline-block",
            marginBottom: "28px",
            color: "#555555",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 600,
          }}
        >
          ← Back to groups
        </Link>

        {/* Group Header */}
        <section
          style={{
            borderRadius: "40px",
            overflow: "hidden",
            background: "linear-gradient(180deg, #EB5786 0%, #B0B0B0 100%)",
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "100%",
              height: "360px",
              backgroundColor: "#D9D9D9",
              backgroundImage: group.thumbnail_url
                ? `url(${group.thumbnail_url})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!group.thumbnail_url && (
              <span
                style={{
                  fontSize: "64px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  textShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                }}
              >
                {group.name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Group Information */}
          <div
            style={{
              padding: "32px 40px 40px",
              color: "#FFFFFF",
            }}
          >
            <h1
              style={{
                margin: "0 0 10px",
                fontSize: "42px",
                fontWeight: 800,
                lineHeight: "1.1",
                textShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
              }}
            >
              {group.name}
            </h1>

            <div
              style={{
                fontSize: "16px",
                marginBottom: "22px",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              📍 {group.location}
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: "750px",
                fontSize: "17px",
                lineHeight: "27px",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {group.description}
            </p>
          </div>
        </section>

        {/* Group Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            marginTop: "28px",
          }}
        >
          {/* Members */}
          <div
            style={{
              backgroundColor: "#F4F4F4",
              borderRadius: "28px",
              padding: "28px",
              minHeight: "160px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              Members
            </h2>

            <p
              style={{
                margin: 0,
                color: "#777777",
                fontSize: "15px",
              }}
            >
              Group members will appear here.
            </p>
          </div>

          {/* Projects */}
          <div
            style={{
              backgroundColor: "#F4F4F4",
              borderRadius: "28px",
              padding: "28px",
              minHeight: "160px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              Projects
            </h2>

            <p
              style={{
                margin: 0,
                color: "#777777",
                fontSize: "15px",
              }}
            >
              Group projects will appear here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
