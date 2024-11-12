import Avatar from "../assets/avatar.jpg";
import resume from "../assets/Khairulla Ruzimov.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="portfolio__container flex sm:justify-evenly items-center sm:flex-row flex-col-reverse
      justify-center gap-5"
    >
      <div className="text-lg text-center sm:text-start sm:text-xl md:text-2xl lg:text-4xl w-96 max-[400px]:w-60 sm:w-2/5 hero__title">
        <h1>
          Frontend Developer with a focus on building interactive
          and responsive web sites.
        </h1>
        <a href={resume} download="Khairulla Ruzimov.pdf">
          <button
            className="mt-4 p-1 border-2 sm:p-2 hover:text-blue-900 hover:bg-white transition 
          duration-300 active:bg-blue-900 active:text-white"
          >
            Download CV
          </button>
        </a>
      </div>
      <div className="w-52 h-52 border-4 lg:w-72 lg:h-72 border-white rounded-full lg:border-8 md:w-52 md:h-52 md:border-4">
        <img
          src={Avatar}
          alt="avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
}
export default Hero;
