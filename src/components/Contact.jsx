import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setResult("Submitting...");

    formData.append("access_key", "d6446067-8ffe-4080-baf4-f295ead0a18b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then((response) => response.json())
      .catch((err) => setResult("Error with submitting form!"));

    if (res.success) {
      setResult("Form successfully sumbitted!");
      [
        document.querySelectorAll("input"),
        document.querySelectorAll("textarea"),
      ].forEach((item) => item.forEach((el) => (el.value = "")));
    }
  };
  // TITLELANI FONTSIZE NI PASAYTIRISH GARAK INPUTLA BOLDI I JUSTIFYCONTENT AROUND ATISH GARAK YO YOQ!
  return (
    <div id="contact" className="portfolio__container pb-16">
      <h1 className="hero__title text-white my-10 text-2xl font-bold text-center">
        My Contacts
      </h1>
      <div
        className="sm:text-start text-center flex justify-center sm:justify-between sm:flex-row flex-col
      sm:gap-0 gap-16 items-center standart px-5"
      >
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-5xl lg:text-6xl hero__title">Let's talk</h1>
          <p className="standart text-sm w-72 lg:text-base lg:w-96">
            I'm currently available to take a new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="flex font-bold standart items-center sm:justify-start justify-center gap-5">
            <i className="bi bi-envelope lg:text-2xl text-xl"></i>
            <p className="lg:text-base text-sm">khairulla2008@outlook.com</p>
          </div>
          <div className="flex font-bold standart sm:justify-start justify-center items-center gap-5">
            <i className="bi bi-telephone lg:text-2xl text-xl"></i>
            <p className="lg:text-base text-sm">+998 97-858-60-00</p>
          </div>
          <div className="flex font-bold standart sm:justify-start justify-center items-center gap-5">
            <i className="bi bi-geo-alt lg:text-2xl text-xl"></i>
            <p className="lg:text-base text-sm">Xorazm region, Uzbekistan</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="standart flex flex-col justify-center gap-5"
        >
          <input
            type="hidden"
            name="access_key"
            value="d6446067-8ffe-4080-baf4-f295ead0a18b"
          />
          <input
            type="hidden"
            name="apikey"
            value="d6446067-8ffe-4080-baf4-f295ead0a18b"
          />
          <div className="flex flex-col gap-2">
            <label className="font-bold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 w-70 rounded-md text-black lg:text-base text-sm outline-none lg:w-60 standart"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="p-2 w-70 rounded-md text-black lg:text-base text-sm outline-none lg:w-60 standart"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Write your message here</label>
            <textarea
              name="message"
              required
              placeholder="Enter your messages"
              className="p-2 rounded-md text-black lg:text-base text-sm w-72 h-52 lg:w-96 lg:h-52 outline-none standart"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 p-2 hover:text-blue-900 hover:bg-white transition duration-300 active:bg-blue-900 active:text-white font-bold p-2 sm:w-52
            w-full"
          >
            Submit
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
}
export default Contact;
