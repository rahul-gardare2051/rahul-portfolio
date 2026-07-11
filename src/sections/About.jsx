import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";

function About() {
  const cards = [
    {
      icon: <FaCode className="text-4xl text-violet-400" />,
      title: "Clean Code",
      text: "I focus on writing maintainable and scalable code."
    },
    {
      icon: <FaLaptopCode className="text-4xl text-cyan-400" />,
      title: "Full Stack",
      text: "Building modern applications using MERN Stack."
    },
    {
      icon: <FaUserGraduate className="text-4xl text-green-400" />,
      title: "Always Learning",
      text: "Learning new technologies and improving every day."
    }
  ];

  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity:0,x:-60 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
          >

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

              <h2 className="text-4xl font-bold">
                MERN Stack Developer
              </h2>

              <p className="mt-6 text-slate-400 leading-8">

                Passionate Full Stack Developer from India.

                I love building beautiful user interfaces,
                REST APIs and scalable backend applications.

              </p>

              <p className="mt-6 text-slate-400 leading-8">

                Currently improving my React,
                Node.js,
                MongoDB,
                Tailwind CSS,
                and backend architecture skills.

              </p>

            </div>

          </motion.div>

          <motion.div

            initial={{ opacity:0,x:60 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}

            className="grid gap-6"

          >

            {

              cards.map((card)=>(
                <div

                  key={card.title}

                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-violet-500 duration-300"

                >

                  {card.icon}

                  <h3 className="mt-5 text-2xl font-bold">

                    {card.title}

                  </h3>

                  <p className="mt-3 text-slate-400 leading-7">

                    {card.text}

                  </p>

                </div>
              ))

            }

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;