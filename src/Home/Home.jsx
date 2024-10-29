import React from "react";
import About from "../About/About";
import Team from "../Team/Team";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-black text-white flex justify-center items-center  flex-col px-[15%] text-center text-4xl sm:text-6xl lg:text-8xl"
        id="home"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <b className="text-purple-500">BOSTON</b>&nbsp;FOR STEM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          className="text-2xl text-gray-500 mt-2"
        >
          A student led 501(c)(3) non-profit.
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 1 }}
          className="flex gap-4 mt-4 h-[40px]"
        >
          <a href="#about">
            <div className=" hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 border border-gray-500 rounded shadow text-sm h-full flex justify-center items-center ">
              Learn More
            </div>
          </a>
          <a href="">
            <Link
              to="/hack"
              className=" hover:bg-gray-900 text-gray-500 font-semibold py-2 px-4 border border-gray-500 rounded shadow text-sm h-full flex justify-center items-center"
            >
              Hackathon
            </Link>
          </a>
        </motion.span>
      </div>
      <About />
      <Team />
    </>
  );
};

export default Home;
