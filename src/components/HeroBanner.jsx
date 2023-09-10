import React from "react";
import { FaRobot } from "react-icons/fa";
import AI from "../assets/AI.png";

const HeroBanner = () => {
  return (
    <header className=" w-full flex  justify-center items-center flex-col mb-16">
      <nav className=" w-full flex justify-around gap-2 items-center flex-row flex-wrap shadow-md py-2 bg-gradient-to-r from-blue-100 to-purple-100">
        <h1 className=" inline-flex items-center font-playfair gap-1 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <FaRobot color="lightpink" />
          SummarizeBot
        </h1>
        <button
          type="button"
          className="rounded-full bg-purple-500  hover:bg-purple-400 text-white  font-rubik py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500"
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        >
          Try for Free
        </button>
      </nav>
      <div className="  w-full flex flex-row  max-md:flex-col-reverse max-lg:flex-row-reverse gap-2 items-center  overflow-hidden">
        <div className="info px-1">
          <h2 className="font-rubik text-4xl  font-bold text-gradient bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-transparent bg-clip-text text-center tracking-widest ">
            Tired of drowning in endless text?
          </h2>
          <p className=" text-lg text-center tracking-wider">
            Let our AI Summarizer do the heavy lifting for you! Say goodbye to
            information overload and hello to concise, laser-focused summaries.{" "}
          </p>
        </div>
        <img
          src={AI}
          alt="AI-image"
          className="  w-3/5 max-lg:w-2/4 max-sm:w-11/12  drop-shadow-lg"
        />
      </div>
    </header>
  );
};

export default HeroBanner;
