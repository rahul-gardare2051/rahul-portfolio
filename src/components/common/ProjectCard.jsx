import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-3 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,.35)]">

      {/* Image */}

      <div className="h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex justify-center items-center">

        <span className="text-7xl group-hover:scale-110 duration-500">
          🚀
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        <p className="mt-5 text-slate-400 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="mt-10 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold hover:bg-cyan-500 duration-300"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-violet-600 px-5 py-3 hover:bg-violet-600 duration-300"
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