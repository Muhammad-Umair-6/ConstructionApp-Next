import React from "react";
import { motion } from "framer-motion";
import {
  RiPhoneFill,
  RiMailFill,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, 
  },
};

const fromTop = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const TopBar = () => {
  return (
    <motion.section
      id="home"
      className="py-4 xl:h-16 xl:py-4 bg-gradient-to-t from-[#ffc93c] to-[#e4c985] flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
          {/* Left Side: Phone and Mail */}
          <div className="hidden md:flex items-center gap-6">
            <motion.div className="flex items-center gap-2" variants={fromLeft}>
              <span className="font-semibold">
                <RiPhoneFill className="w-8 h-8 p-1 bg-black text-white rounded-full" />
              </span>
              <span className="font-medium">+92 123 4567890</span>
            </motion.div>

            <motion.div className="flex items-center gap-2" variants={fromTop}>
              <span className="font-semibold">
                <RiMailFill className="w-8 h-8 p-1 bg-black text-white rounded-full" />
              </span>
              <span className="font-medium">admin@gmail.com</span>
            </motion.div>
          </div>

          {/* Right Side: Social Icons */}
          <motion.div
            className="flex items-center gap-5"
            variants={containerVariants}
          >
            <motion.a href="#" whileHover={{ scale: 1.2 }} variants={fromRight}>
              <RiTwitterFill className="w-8 h-8" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              variants={fromBottom}
            >
              <RiFacebookFill className="w-8 h-8" />
            </motion.a>

            <motion.a href="#" whileHover={{ scale: 1.2 }} variants={fromTop}>
              <RiInstagramFill className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TopBar;
