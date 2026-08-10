import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Giselle Garcia, Environmental Compliance and Stormwater Management Specialist";

export default function Image() {
  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-start justify-center bg-white px-24"
        style={{ fontFamily: "sans-serif" }}
      >
        <div tw="flex text-2xl font-medium text-neutral-500 mb-6">
          gisellegarcia.link
        </div>
        <div tw="flex text-7xl font-bold tracking-tight text-neutral-900">
          Giselle Garcia
        </div>
        <div tw="flex text-3xl text-neutral-600 mt-6">
          Environmental Compliance | Stormwater Management
        </div>
        <div tw="flex text-2xl text-neutral-500 mt-10">
          CGP & Caltrans Inspections | SWPPP Development | SMARTS Reporting
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
