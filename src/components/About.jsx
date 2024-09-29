function About() {
  return (
    <section
      id="about"
      className="portfolio__container flex justify-evenly items-center bg-white py-10 text-black rounded-full"
    >
      <div className="text-center md:block flex flex-col justify-center items-center gap-1 sm:gap-2">
        <h1 className="text-blue-900 text-sm sm:text-base lg:text-xl xl:text-2xl font-bold hero__title">
          About me
        </h1>
        <p className="standart text-base sm:text-lg lg:text-2xl xl:text-3xl pb-2 md:w-[600px] w-2/3">
          A motivated and hard-working Front-end Developer based in Xorazm,
          Uzbekistan 📍
        </p>
        <p className="standart text-[10px] sm:text-xs xl:text-lg lg:text-sm text-gray-700 md:w-[600px] w-2/3">
          As a Junior Front-End Developer, I'm proficient in HTML, CSS and
          JavaScript. I use libraries and frameworks like Tailwind, Bootstrap
          and React to maintain high quality, responsive and interactive web
          sites that offer a smooth user experience. I love when people put
          trust on me and I do my best to do their work with as high quality as
          possible. As it says "Quality is more important than quantity".
        </p>
      </div>
    </section>
  );
}
export default About;
