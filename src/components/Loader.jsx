import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950"
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 text-4xl font-black shadow-2xl shadow-violet-500/40">
        RG
      </div>

      <h1 className="mt-8 text-2xl font-bold">
        Rahul Gardare
      </h1>

      <p className="mt-3 text-slate-400">
        Loading Portfolio...
      </p>

      <div className="mt-10 h-2 w-52 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8 }}
          className="h-full bg-gradient-to-r from-violet-600 to-cyan-500"
        />

      </div>

    </motion.div>
  );
}

export default Loader;