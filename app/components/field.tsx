const moments = [
  { icon: "📍", label: "Field Inspection" },
  { icon: "🌧️", label: "Weather Monitoring" },
  { icon: "💧", label: "Water Sampling" },
  { icon: "🧪", label: "pH / Turbidity Testing" },
  { icon: "📋", label: "Inspection Documentation" },
  { icon: "💻", label: "SMARTS / Regulatory Reporting" },
];

export function Field() {
  return (
    <section id="field" className="scroll-mt-24 py-12">
      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
        A Day in the Field
      </h2>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        From the field to compliance reporting
      </p>
      <p className="mb-8 text-neutral-800 dark:text-neutral-200">
        My work combines field inspections, environmental monitoring,
        regulatory requirements, and communication with project teams. Each
        inspection provides information that must ultimately be documented
        and translated into actionable compliance requirements.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {moments.map((moment) => (
          <div
            key={moment.label}
            className="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 p-4 text-center dark:border-neutral-800"
          >
            <span className="text-2xl">{moment.icon}</span>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              {moment.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
