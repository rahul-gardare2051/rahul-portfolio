import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">

        <h2 className="text-xl font-bold text-violet-500">
          Rahul.
        </h2>

        <div className="flex gap-5 text-2xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Rahul Gardare. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;