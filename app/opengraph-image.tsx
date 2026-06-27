import { ImageResponse } from "next/og";
import { SocialCard } from "./lib/social-card";

export const alt = "EVA Marine - podłogi EVA i pokłady jachtowe na Mazurach";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialCard />, size);
}
