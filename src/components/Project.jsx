import { Link } from "react-router-dom";
import { projects } from "../constants/projects.js";

function Project() {
  return (
    <div id="projects" className="portfolio__container text-black py-10">
      <h1 className="hero__title text-blue-900 text-2xl font-bold text-center mb-20">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-16 px-5 xl:px-0">
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 p-4 rounded-xl shadow-lg hover:bg-gray-100
                hover:shadow-sm"
            >
              <div className="flex flex-col w-72 max-[400px]:w-60 max-[400px]:h-[340px] justify-between h-[450px]">
                <div className="w-72 h-52 max-[400px]:w-60 max-[400px]:h-40 max-[400px]:rounded-md border-4 border-solid rounded-xl">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full max-[400px]:rounded-[5px] rounded-lg"
                  ></img>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-2xl max-[400px]:text-xl font-bold hero__title">
                    {item.title}
                  </h1>
                  <p className="standart max-[400px]:text-xs">
                    {item.subtitle}
                  </p>
                  <h1 className="text-2xl max-[400px]:text-xl font-bold hero__title text-blue-900">
                    {item.libraries}
                  </h1>
                  <div className="font-bold flex items-center justify-between">
                    <Link to={item.github} target="_blank">
                      <button className="standart max-[400px]:text-xs">
                        Code <i className="bi bi-github"></i>
                      </button>
                    </Link>
                    <Link to={item.link} target="_blank">
                      <button className="standart max-[400px]:text-xs">
                        Live Demo <i className="bi bi-box-arrow-up-left"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Project;
