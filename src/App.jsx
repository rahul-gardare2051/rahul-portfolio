import { useEffect, useState } from "react";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    },1800);

    return ()=>clearTimeout(timer);

  },[]);

  return (

    <>

      {

        loading && <Loader/>

      }

      <ScrollProgress/>

      <Background/>

      <Navbar/>

      <main className="text-white">

        <Hero/>

        <About/>

        <Skills/>

        <Projects/>

        <Contact/>

      </main>

      <Footer/>

    </>

  );

}

export default App;