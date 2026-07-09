import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic values from URL
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "iWriteTech";
      
    const category = searchParams.has("category")
      ? searchParams.get("category")
      : "Curated Tech";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "#FAF8F3", // Warm oat background
            padding: "80px",
            fontFamily: "sans-serif", // next/og uses a clean sans-serif by default
          }}
        >
          {/* Inner card representing the "surface" / parchment */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
              backgroundColor: "#F1ECE1", // Surface color
              borderRadius: "24px",
              border: "2px solid #E5DFD3", // Border color
              padding: "60px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            {/* Header: Badge & Logo */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 24px",
                  backgroundColor: "#1C1A17",
                  color: "#FAF8F3",
                  borderRadius: "9999px",
                  fontSize: "24px",
                  fontWeight: "bold",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </div>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "#1C1A17",
                }}
              >
                iWriteTech
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#1C1A17",
                letterSpacing: "-0.03em",
                maxWidth: "90%",
                marginTop: "40px",
              }}
            >
              {title}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "40px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#1C1A17",
                  marginRight: "20px",
                }}
              />
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#6B665E", // muted-foreground
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                iwritetech.com
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
