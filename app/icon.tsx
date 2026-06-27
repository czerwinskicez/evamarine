import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17384f",
          color: "#e2b866",
          fontFamily: "Arial, sans-serif",
          fontSize: 126,
          fontWeight: 800,
          letterSpacing: 2,
        }}
      >
        EVA
      </div>
    ),
    size,
  );
}
