import SectionTitle from "../components/common/SectionTitle";
import SkillCard from "../components/common/SkillCard";
import { portfolio } from "../data/portfolio";

function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionTitle
          title="My Skills"
          subtitle="Tech Stack"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {portfolio.skills.map((skill) => (
            <SkillCard
              key={skill}
              skill={skill}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;