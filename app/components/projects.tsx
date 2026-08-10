const projects = [
  {
    number: "Project 01",
    title: "Construction Stormwater Compliance",
    body: "Supported a confidential residential construction project by conducting routine and qualifying precipitation event inspections under the 2022 CGP. I was responsible for identifying BMP deficiencies, documenting site conditions, and communicating corrective actions to the project team. The result was a site that stayed in compliance through several storm events and passed each subsequent regulatory review.",
  },
  {
    number: "Project 02",
    title: "Caltrans CGP Permit Review",
    body: "Reviewed permit requirements for a Caltrans project governed by the 2024 Standard Specifications, Section 13. My role involved cross-checking inspection findings against Caltrans-specific documentation standards and helping the team stay aligned on submission deadlines. I came away with a much deeper understanding of how state highway projects layer on top of standard CGP requirements.",
  },
  {
    number: "Project 03",
    title: "SWPPP Development",
    body: "Assisted in writing and reviewing Stormwater Pollution Prevention Plans for residential development and civil construction projects. I worked through project plans to select and document appropriate Best Management Practices for each site's conditions, then coordinated with project managers to keep the SWPPP current as construction phases changed.",
  },
  {
    number: "Project 04",
    title: "Water Quality Monitoring",
    body: "Conducted pH and turbidity testing during qualifying precipitation events, including equipment calibration before each sampling round. This project sharpened my field sampling technique and taught me how to translate raw water quality readings into clear, defensible documentation for regulatory submission.",
  },
  {
    number: "Project 05",
    title: "Industrial Stormwater Inspection",
    body: "Completed industrial inspection training on a FedEx facility, applying industrial general permit requirements alongside my construction inspection background. I reviewed laboratory reports for sampling results and learned how industrial stormwater compliance differs from construction site work in scope and documentation.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12">
      <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
        Featured Projects
      </h2>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        A closer look at the work behind the resume.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.number}
            className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              {project.number}
            </p>
            <h3 className="mt-1 mb-2 text-lg font-medium tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {project.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
