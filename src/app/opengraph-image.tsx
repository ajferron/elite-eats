import { ImageResponse } from "next/og";

export const alt = "Elite Eats — Sports Nutrition Catering Marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#084664",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            ELITE EATS
          </span>
        </div>

        <div
          style={{
            width: "120px",
            height: "4px",
            backgroundColor: "#9fc72e",
            marginBottom: "30px",
          }}
        />

        <span
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#F5F3EE",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Sports Nutrition Catering Marketplace
        </span>

        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#9fc72e",
              }}
            >
              150+
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#F5F3EE",
              }}
            >
              Pro Teams
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#9fc72e",
              }}
            >
              8
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#F5F3EE",
              }}
            >
              Leagues
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#9fc72e",
              }}
            >
              870+
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#F5F3EE",
              }}
            >
              Fueling Partners
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
