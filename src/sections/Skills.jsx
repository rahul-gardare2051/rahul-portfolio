import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import SectionTitle from "../components/common/SectionTitle";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 className="text-5xl text-orange-500" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt className="text-5xl text-blue-500" />,
      name: "CSS3",
    },
    {
      icon: <FaJs className="text-5xl text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <FaReact className="text-5xl text-cyan-400" />,
      name: "React",
    },
    {
      icon: <FaNodeJs className="text-5xl text-green-500" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress className="text-5xl" />,
      name: "Express",
    },
    {
      icon: <SiMongodb className="text-5xl text-green-400" />,
      name: "MongoDB",
    },
    {
      icon: <SiTailwindcss className="text-5xl text-sky-400" />,
      name: "Tailwind",
    },
    {
      icon: <FaGitAlt className="text-5xl text-orange-600" />,
      name: "Git",
    },
    {
      icon: <FaGithub className="text-5xl" />,
      name: "GitHub",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="Skills"
          subtitle="Tech Stack"
        />

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-800 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:border-violet-500"
            >
              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold group-hover:text-cyan-400">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;