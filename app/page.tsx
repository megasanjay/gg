import { Hero } from "app/components/hero";
import { About } from "app/components/about";
import { Experience } from "app/components/experience";
import { Projects } from "app/components/projects";
import { Skills } from "app/components/skills";
import { Certifications } from "app/components/certifications";
import { Field } from "app/components/field";

export default function Page() {
  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
