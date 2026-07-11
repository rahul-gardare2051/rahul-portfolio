import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-violet-600 rounded-full blur-[170px] opacity-20 -top-40 -left-32"></div>

      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[170px] opacity-20 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <div>

          <p className="text-cyan-400 text-xl">
            Hello 👋 I'm
          </p>

          <h1 className="text-7xl font-black mt-4">
            Rahul Gardare
          </h1>

          <h2 className="text-4xl mt-5 text-violet-500 font-bold">
            MERN Stack Developer
          </h2>

          <p className="text-slate-400 leading-8 mt-8 max-w-xl">
            Passionate Full Stack Developer focused on building beautiful,
            scalable and high-performance web applications.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-violet-600 hover:bg-cyan-500 duration-300 px-8 py-4 rounded-xl font-semibold">
              Hire Me
            </button>

            <button className="border border-violet-600 hover:bg-violet-600 duration-300 px-8 py-4 rounded-xl flex items-center gap-3">
              <FaDownload />
              Resume
            </button>

          </div>

          <div className="flex gap-6 mt-12 text-3xl">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex justify-center items-center">

            <div className="w-[390px] h-[390px] rounded-full bg-slate-950 flex justify-center items-center text-8xl font-black">

              RG

            </div>

          </div>

        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl animate-bounce">

        <HiArrowDown />

      </div>

    </section>
  );
}

export default Hero;