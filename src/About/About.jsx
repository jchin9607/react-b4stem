import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-black text-white flex justify-start items-start text-5xl flex-col px-[15%] py-[10%] gap-5"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mb-4"
      >
        About
      </motion.h1>
      <div className="w-full flex justify-center items-center"></div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-2xl text-gray-500 mt-2"
      >
        B4STEM believes in equal educational opportunities for all, providing
        free in-person and virtual STEM lessons/activities to students across
        Boston and beyond.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-2xl text-gray-500"
      >
        We are a fiscal non-profit sponsored by Hack Club
      </motion.p>
      <motion.img
        src="https://images.unsplash.com/photo-1606373664971-bf9b25eb508d?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image of boston"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-[100%] h-auto  object-cover rounded "
      />
    </div>
  );
};

export default About;
