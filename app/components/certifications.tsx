const certifications = [
  "Caltrans Water Pollution Control Manager (WPCM)",
  "OSHA 30",
  "Hazmat",
  "QSP",
  "CISEC",
];

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        Certifications & Education
      </h2>
      <div className="mb-8 rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
        <h3 className="text-lg font-medium tracking-tight">
          University of California, San Diego
        </h3>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300">
          B.S. Environmental Systems, Ecology, Behavior & Evolution
        </p>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-500">
          Graduated June 2024
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="rounded-lg border border-neutral-200 p-4 text-sm font-medium text-neutral-800 dark:border-neutral-800 dark:text-neutral-200"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
