import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-[210px] text-[18px] font-[500] h-[54px] py-[4px] pl-[9px] pr-[4px] flex justify-center items-center gap-2 min-w-[200px] group bg-[#ffc93c] cursor-pointer"
      >
        <div className="flex-1 text-center tracking-[1.2px] font-[500] text-black text-sm uppercase">
          {text}
        </div>
        <motion.div
          className="w-11 h-11 bg-black flex items-center justify-center"
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <RiArrowRightUpLine className="text-white text-xl" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Button;
