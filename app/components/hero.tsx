import Image from "next/image";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 pb-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tighter">
          Giselle Garcia
        </h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          Environmental Compliance | Stormwater Management | Environmental
          Science
        </p>
        <p className="mt-4 max-w-lg text-neutral-800 dark:text-neutral-200">
          Environmental Systems graduate with hands-on experience in
          environmental compliance, stormwater management, construction and
          industrial inspections, SWPPP development, and water quality
          monitoring. Experienced in conducting field inspections and supporting
          regulatory compliance throughout California under the 2022
          Construction General Permit (CGP) and 2024 Caltrans Standard
          Specifications, Section 13.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/#experience">View My Experience</Button>
          <Button href="/resume.pdf" variant="secondary" download>
            Download Resume
          </Button>
        </div>
      </div>
      <Image
        src="/cropped_image.jpg"
        alt="Giselle Garcia, Environmental Compliance and Stormwater Management Specialist"
        width={320}
        height={320}
        priority
        className="h-48 w-48 shrink-0 rounded-full border border-neutral-200 object-cover sm:h-56 sm:w-56 dark:border-neutral-800"
      />
    </section>
  );
}
