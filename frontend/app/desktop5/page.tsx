"use client";

import Link from "next/link";

export default function MyProjectsPage() {
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

            <Link
              href="/my-projects"
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

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          padding: "32px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {/* Page Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <h1
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#000000",
                margin: 0,
              }}
            >
              BAD - CHRISTOPHER
            </h1>
            <span
              style={{ fontSize: "32px", fontWeight: 400, cursor: "pointer" }}
            >
              +
            </span>
          </div>

          {/* Grid Workspace */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT COLUMN: Calendar, Outfit Inspo, Member Assignments */}
            <div
              style={{
                width: "250px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                flexShrink: 0,
              }}
            >
              {/* Calendar Widget */}
              <div
                style={{
                  backgroundColor: "#E2E2E2",
                  borderRadius: "20px",
                  padding: "16px",
                  fontSize: "12px",
                  color: "#000000",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  <span>&lt;</span>
                  <span>Sep 2025 v</span>
                  <span>&gt;</span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "6px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#777" }}>Su</span>
                  <span style={{ color: "#777" }}>Mo</span>
                  <span style={{ color: "#777" }}>Tu</span>
                  <span style={{ color: "#777" }}>We</span>
                  <span style={{ color: "#777" }}>Th</span>
                  <span style={{ color: "#777" }}>Fr</span>
                  <span style={{ color: "#777" }}>Sa</span>

                  <span></span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span
                    style={{
                      backgroundColor: "#333",
                      color: "#FFF",
                      borderRadius: "50%",
                    }}
                  >
                    9
                  </span>
                  <span>10</span>
                  <span>11</span>
                  <span>12</span>
                  <span
                    style={{
                      backgroundColor: "#333",
                      color: "#FFF",
                      borderRadius: "50%",
                    }}
                  >
                    13
                  </span>
                  <span>14</span>
                  <span>15</span>
                  <span>16</span>
                  <span>17</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                </div>
              </div>

              {/* Outfit Inspo Box */}
              <div
                style={{
                  backgroundColor: "#E2E2E2",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    margin: "0 0 8px 0",
                    color: "#000000",
                  }}
                >
                  Outfit Inspo
                </h3>
                <a
                  href="#"
                  style={{
                    color: "#60A5FA",
                    fontSize: "18px",
                    textDecoration: "underline",
                    fontStyle: "italic",
                    wordBreak: "break-all",
                  }}
                >
                  docs.google/masterdoc
                </a>
              </div>

              {/* Member Assignments Box */}
              <div
                style={{
                  backgroundColor: "#E2E2E2",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    margin: "0 0 16px 0",
                    color: "#000000",
                    lineHeight: "1.2",
                  }}
                >
                  Member Assignments
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <div>
                    <span style={{ color: "#3B82F6" }}>Chris (Leader)</span>
                    <span style={{ color: "#000", fontWeight: 400 }}>
                      {" "}
                      - John Pork
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#06B6D4" }}>Topher</span>
                    <span style={{ color: "#000", fontWeight: 400 }}>
                      {" "}
                      - Sephiroth
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#EC4899" }}>Baddie</span>
                    <span style={{ color: "#000", fontWeight: 400 }}>
                      {" "}
                      - Wonyoung
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#EF4444" }}>Risto</span>
                    <span style={{ color: "#000", fontWeight: 400 }}>
                      {" "}
                      - Smiski
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Chat Area & Formations Box */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* Group Chat Card */}
              <div
                style={{
                  backgroundColor: "#F88EA4",
                  borderRadius: "32px",
                  padding: "28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                {/* Chat Message 1 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#FACC15",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      smiki
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "#000000",
                        display: "inline-block",
                      }}
                    >
                      Welcome to the BAD project!
                    </div>
                    <div
                      style={{
                        color: "#FFE4E6",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      11:15 am
                    </div>
                  </div>
                </div>

                {/* Chat Message 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#EC4899",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      sephiroth
                    </div>
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "#000000",
                        fontWeight: 700,
                        display: "inline-block",
                      }}
                    >
                      SO EXCITED!!!!!
                    </div>
                    <div
                      style={{
                        color: "#FFE4E6",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      11:17 am
                    </div>
                  </div>
                </div>

                {/* Chat Message 3 (Image) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        marginBottom: "4px",
                      }}
                    >
                      john pork
                    </div>
                    <div
                      style={{
                        width: "300px",
                        height: "160px",
                        backgroundColor: "#2B2B2B",
                        borderRadius: "20px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#888",
                      }}
                    >
                      [ Pig Meme Image ]
                    </div>
                    <div
                      style={{
                        color: "#FFE4E6",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      11:18 am
                    </div>
                  </div>
                </div>

                {/* Input Bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50px",
                      height: "52px",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 16px 0 24px",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="text"
                      defaultValue="I love this project!"
                      style={{
                        border: "none",
                        outline: "none",
                        fontSize: "16px",
                        width: "100%",
                        color: "#000000",
                        backgroundColor: "transparent",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
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
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
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
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                      </svg>

                      <button
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          backgroundColor: "#000000",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formations Container - Scaled to Match Figma Proportions */}
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "36px",
                  padding: "28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      margin: 0,
                      color: "#000000",
                    }}
                  >
                    FORMATIONS
                  </h2>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 400,
                      cursor: "pointer",
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Dance Practice Video Placeholder Frame */}
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: "#1F1F1F",
                    borderRadius: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                    fontSize: "16px",
                  }}
                >
                  [ Dance Practice Video ]
                </div>

                {/* Timeline Bar with Indicator Marker */}
                <div style={{ width: "100%", position: "relative", margin: "4px 0" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "22px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 20px",
                      boxSizing: "border-box",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308" }} />
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308" }} />
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308", position: "relative" }}>
                      {/* Line extending down from active marker */}
                      <div
                        style={{
                          position: "absolute",
                          top: "14px",
                          left: "1.5px",
                          width: "1px",
                          height: "18px",
                          backgroundColor: "#EAB308",
                        }}
                      />
                    </div>
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308" }} />
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308" }} />
                    <div style={{ width: "4px", height: "14px", backgroundColor: "#EAB308" }} />
                  </div>
                </div>

                {/* Formation Stage Canvas (Scaled Tall & Larger Dots) */}
                <div
                  style={{
                    width: "100%",
                    height: "320px",
                    backgroundColor: "#000000",
                    borderRadius: "32px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  {/* Dashed Center Axes */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "1px",
                      borderTop: "1.5px dashed #555555",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "1px",
                      borderLeft: "1.5px dashed #555555",
                    }}
                  />

                  {/* Scaled Dancer Position Dots */}
                  <div
                    style={{
                      display: "flex",
                      gap: "32px",
                      zIndex: 2,
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "#E53935",
                        border: "3px solid #8E0000",
                      }}
                    />
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "#E040FB",
                        border: "3px solid #AA00FF",
                      }}
                    />
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "#00BCD4",
                        border: "3px solid #006064",
                      }}
                    />
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "#2979FF",
                        border: "3px solid #0D47A1",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}