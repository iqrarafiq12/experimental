import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  const imageUrl = new URL(
    "/headlogo.png",
    process.env.NEXT_PUBLIC_SITE_URL
  ).toString();

  return new ImageResponse(
    (
      <img
        src={imageUrl}
        width="32"
        height="32"
        style={{ objectFit: "contain" }}
      />
    ),
    size
  );
}
