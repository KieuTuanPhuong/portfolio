import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: 80,
          background: "#fafaf9",
          color: "#1c1917",
        }}
      >
        <div style={{ fontSize: 80 }}>{profile.name}</div>
        <div style={{ fontSize: 44, marginTop: 24 }}>{profile.title}</div>
        <div style={{ fontSize: 30, marginTop: 56, color: "#57534e" }}>
          {profile.availability}
        </div>
      </div>
    ),
    size,
  );
}
