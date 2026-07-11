import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 ${
        featured ? "lg:flex lg:items-center lg:gap-10 p-8" : "p-6"
      }`}
    >
      {/* Project Image */}
      <div
        className={`rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center ${
          featured ? "lg:w-1/2 h-80" : "h-56"
        }`}
      >
        <span className="text-7xl">🚀</span>
      </div>

      {/* Content */}
      <div className={featured ? "lg:w-1/2 mt-8 lg:mt-0" : "mt-8"}>
        <h2 className="text-3xl font-bold">{project.title}</h2>

        <p className="mt-5 leading-8 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 hover:bg-cyan-500 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            className="flex items-center gap-2 rounded-xl border border-violet-500 px-5 py-3 hover:bg-violet-600 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;