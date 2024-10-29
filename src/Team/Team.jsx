import React from "react";
import { motion } from "framer-motion";
const Team = () => {
  const team = [
    {
      name: "Lucas",
      image:
        "https://ik.imagekit.io/64c35uuyg/personalportfolio/IMG_1079.JPG?updatedAt=1712264407870",
      index: 0,
    },
    {
      name: "Grant",
      image:
        "https://ik.imagekit.io/64c35uuyg/b4stembio/grant.png?updatedAt=1711050797183",
      index: 1,
    },
    {
      name: "Namda",
      image:
        "https://ik.imagekit.io/64c35uuyg/b4stembio/namda.png?updatedAt=1711050797183",
      index: 2,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full min-h-screen bg-black text-white flex justify-start items-start text-5xl flex-col px-[15%] gap-5 py-[10%]"
      id="team"
    >
      <h1>Team</h1>
      <div className="flex gap-8 flex-wrap mt-4 w-full">
        {team.map((person) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.3 * person.index,
            }}
            viewport={{ once: true }}
            key={person.index}
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-[300px] h-[400px]  object-cover rounded"
            />
            <p className="text-2xl text-gray-500">{person.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
