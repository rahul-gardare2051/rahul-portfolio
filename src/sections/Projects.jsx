import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/common/ProjectCard";
import { portfolio } from "../data/portfolio";

function Projects() {
  const featured = portfolio.projects[2];

  const others = portfolio.projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Projects"
          subtitle="My Work"
        />

        {/* Featured */}

        <ProjectCard
          project={featured}
          featured={true}
        />

        {/* Other Projects */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {others.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;