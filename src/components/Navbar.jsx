import { motion } from "framer-motion";
import { navbarLinks } from "../constants/navbarLinks";

function Navbar() {
  return (
    <motion.div
      initial={{
        position: "relative",
        left: -600,
        top: 0,
      }}
      animate={{
        left: 0,
        top: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="pt-1 portfolio__container">
        <ul className="flex justify-evenly items-center">
          {navbarLinks.map((item) => {
            return (
              <a key={item.id} href={item.link}>
                <li
                  className="flex items-center gap-1 hover:border-b-2 hover:border-black border-b-2 border-white
    transition duration-500 text-xs sm:text-base flex-col sm:flex-row"
                >
                  <i className={item.icon}></i>
                  <h1>{item.title}</h1>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
export default Navbar;
