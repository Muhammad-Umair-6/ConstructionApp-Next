import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const Hero = () => {
  return (
    <section className="h-[70vh] relative bg-image">
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>

      <div className=" md:p-15 p-3 mx-auto h-full flex items-center">
        <motion.div
          className="z-20 mt-10 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start mx-w-[608px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="md:text-7xl text-[20px] font-[600] text-white mb-4"
            variants={fromLeft}
          >
            <span className="text-[#ffc93c]">Building</span> Robust lasting
            <br className="md:block hidden" />
            solutions
          </motion.h1>

          <motion.p className="mb-5 md:w-1/2 text-[18px]" variants={fromRight}>
            From concept to completion, we ensure every details is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </motion.p>

          <motion.div variants={fromBottom}>
            <Button text="See our work" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
