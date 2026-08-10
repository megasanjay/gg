import { Hero } from "app/components/hero";
import { About } from "app/components/about";
import { Experience } from "app/components/experience";
import { Projects } from "app/components/projects";
import { Skills } from "app/components/skills";
import { Certifications } from "app/components/certifications";
import { Field } from "app/components/field";
import { baseUrl } from "app/sitemap";

export default function Page() {
  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Giselle Garcia",
            url: baseUrl,
            image: `${baseUrl}/cropped_image.jpg`,
            jobTitle: "Environmental Compliance Specialist",
            description:
              "Environmental Systems graduate specializing in environmental compliance, stormwater management, construction and industrial inspections, SWPPP development, and water quality monitoring throughout California.",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "University of California, San Diego",
            },
            knowsAbout: [
              "Environmental Compliance",
              "Stormwater Management",
              "SWPPP Development",
              "Construction General Permit (CGP) Inspections",
              "Caltrans Standard Specifications Section 13",
              "SMARTS Regulatory Reporting",
              "Water Quality Monitoring",
              "BMP Inspection",
            ],
            address: {
              "@type": "PostalAddress",
              addressRegion: "CA",
              addressCountry: "US",
            },
            sameAs: [
              "https://www.linkedin.com/in/giselle-garcia-barroso/",
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Field />
    </div>
  );
}
