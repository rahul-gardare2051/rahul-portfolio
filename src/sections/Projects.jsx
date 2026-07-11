import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/common/ProjectCard";
import { portfolio } from "../data/portfolio";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionTitle
          title="Featured Projects"
          subtitle="Portfolio"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >

          {portfolio.projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;