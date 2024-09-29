import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <motion.div
      initial={{
        position: "relative",
        top: 0,
        left: -600,
      }}
      animate={{
        left: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div>
        <div className="bg-white text-black py-2 font-bold navbar fixed bottom-0 left-0 sm:inset-0 w-full h-[50px] z-10">
          <Navbar />
        </div>
        <div className="mt-5 sm:mt-20 md:mt-28">
          <div>
            <Hero />
          </div>
          <div className="my-10 sm:my-20 md:my-28 xl:px-0 sm:px-10 px-5">
            <About />
          </div>
          <div className="w-full bg-white rounded-t-[150px] xl:rounded-t-[400px] border-t-2">
            <Project />
          </div>
          <div className="bg-white text-black rounded-b-[150px] lg:rounded-b-[300px] border-b-2 relative bottom-1">
            <Skills />
          </div>
          <div>
            <Contact />
          </div>
          <div className="bg-white text-black mt-10 py-10 sm:static sm:bottom-0 relative bottom-5">
            <Footer />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Portfolio;
