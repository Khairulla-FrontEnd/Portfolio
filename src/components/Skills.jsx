import { skills } from "../constants/skills";

function Skills() {
  return (
    <div id="skills" className="max-w-[800px] w-full mx-auto">
      <h1 className="text-2xl font-bold text-center text-blue-900 hero__title py-10">
        My Skills
      </h1>
      <div className="flex flex-col sm:gap-10 gap-5 pb-20 px-5 lg:px-0">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5 sm:gap-16">
          {skills.map((item) => {
            if (item.id <= 4) {
              if (item.icon.startsWith("bi")) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center border-2 p-2 sm:w-52 w-40 rounded-2xl shadow-lg
                 hover:shadow-sm hover:bg-gray-100 standart"
                  >
                    <i className={item.icon + " text-3xl sm:text-6xl"}></i>
                    <h1 className="text-base sm:text-xl">{item.title}</h1>
                  </div>
                );
              } else {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center border-2 p-2 sm:w-52 w-40 rounded-2xl shadow-lg
                     hover:shadow-sm hover:bg-gray-100 standart"
                  >
                    <div className="sm:w-16 sm:h-16 w-10 h-10">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-base sm:text-xl">{item.title}</h1>
                  </div>
                );
              }
            }
          })}
        </div>
        <div className="flex lg:flex-nowrap justify-center flex-wrap gap-5 sm:gap-16">
          {skills.map((item) => {
            if (item.id >= 5) {
              if (item.icon.startsWith("bi")) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center border-2 p-2 sm:w-52 w-40 rounded-2xl shadow-lg
                 hover:shadow-sm hover:bg-gray-100 standart"
                  >
                    <i className={item.icon + " text-3xl sm:text-6xl"}></i>
                    <h1 className="text-base sm:text-xl">{item.title}</h1>
                  </div>
                );
              } else {
                return (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-center border-2 p-2 sm:w-52 w-40 rounded-2xl shadow-lg
                     hover:shadow-sm hover:bg-gray-100 standart"
                  >
                    <div className="sm:w-16 sm:h-16 w-10 h-10">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-base sm:text-xl">{item.title}</h1>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Skills;
