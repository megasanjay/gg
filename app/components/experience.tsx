const groups = [
  {
    title: "Construction General Permit Inspections",
    items: [
      "Conducted inspections throughout California under the 2022 CGP.",
      "Performed weekly and monthly inspections and QPE inspections.",
      "Identified deficiencies and communicated corrective actions to clients and project managers.",
      "Performed pH and turbidity testing during qualifying precipitation events.",
    ],
  },
  {
    title: "SMARTS & Regulatory Compliance",
    items: [
      "Submitted NOIs, Ad Hocs, Annual Reports, COI Amendments, and NOTs.",
      "Worked with general construction, Caltrans, and Lake Tahoe projects.",
      "Monitored permit requirements and maintained timely regulatory submissions.",
    ],
  },
  {
    title: "SWPPP Development",
    items: [
      "Assisted with writing SWPPPs for residential development and civil construction projects.",
      "Reviewed project plans and incorporated appropriate Best Management Practices.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-12">
      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
        Professional Experience
      </h2>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Environmental Compliance & Stormwater Management
      </p>
      <div className="flex flex-col gap-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-lg font-medium tracking-tight">
              {group.title}
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-neutral-800 dark:text-neutral-200">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
