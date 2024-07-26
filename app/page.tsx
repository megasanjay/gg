import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Giselle Garcia
      </h1>
      <p className="mb-4">
        As an accomplished student with skills in R programming and laboratory
        techniques, and a background in ecology, marine biology, and
        environmental systems, I have developed a deep understanding of the
        natural world and its complexities. With a passion for community
        service, I have also contributed to the Pacific Beach community through
        volunteer work and ocean clean-up efforts. Through my experiences, I
        have gained valuable skills in project management, data analysis, and
        collaboration, and I am eager to apply these skills to future endeavors
        in the scientific and environmental fields.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
