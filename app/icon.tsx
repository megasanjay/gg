import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        tw="flex w-full h-full items-center justify-center bg-black text-white"
        style={{ fontFamily: "sans-serif" }}
      >
        <div tw="flex text-lg font-bold">GG</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
