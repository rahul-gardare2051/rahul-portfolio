import SectionTitle from "../components/common/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionTitle
          title="About Me"
          subtitle="Who Am I"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-violet-600 blur-3xl opacity-30 rounded-3xl"></div>

              <div className="relative w-[350px] h-[420px] rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-1">

                <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center text-8xl font-black">

                  RG

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-4xl font-bold mb-8">

              Full Stack Developer

            </h3>

            <p className="text-slate-400 leading-9">

              I am a passionate MERN Stack Developer who loves
              building responsive web applications with modern UI
              and clean backend architecture.

            </p>

            <p className="text-slate-400 leading-9 mt-8">

              Currently focusing on React, Node.js,
              Express, MongoDB and creating production-ready
              applications.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-slate-800 rounded-2xl p-8">

                <h1 className="text-4xl font-black text-violet-500">

                  5+

                </h1>

                <p className="mt-3 text-slate-400">

                  Projects

                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-8">

                <h1 className="text-4xl font-black text-cyan-400">

                  MERN

                </h1>

                <p className="mt-3 text-slate-400">

                  Tech Stack

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;