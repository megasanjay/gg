const categories = [
  {
    title: "Environmental Compliance",
    items: [
      "Developing SWPPP and WPCP",
      "BMP Inspection",
      "Creating Training Presentations",
      "Knowledgeable of Map Design",
    ],
  },
  {
    title: "Field & Technical",
    items: [
      "Environmental Inspections",
      "pH Testing",
      "Turbidity Testing",
      "Equipment Calibration",
      "QPE Inspections",
      "Weather Monitoring",
      "Laboratory Report Review",
    ],
  },
  {
    title: "Professional",
    items: [
      "Client Communication",
      "Technical Documentation",
      "Training & Mentoring",
      "Project Coordination",
      "Regulatory Reporting",
    ],
  },
  {
    title: "Other",
    items: ["ArcGIS", "Bluebeam", "Microsoft Office", "Excel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-3 text-lg font-medium tracking-tight">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
