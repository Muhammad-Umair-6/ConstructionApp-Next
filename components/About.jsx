import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const About = () => {
  return (
    <motion.div
      id="about"
      className="pt-16 md:pt-30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="md:px-20 mx-auto p-3">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          
          {/* Left Content */}
          <motion.div className="flex-1" variants={fromLeft}>
            <div className="max-w-[540px]">
              <Pretitle text="About us" />
              <motion.h2
                className="font-medium md:text-[40px] text-[25px]"
                variants={fromLeft}
              >
                Focused On Excellence In <br className="md:block hidden" />
                Every Project
              </motion.h2>

              <motion.p className="mb-10" variants={fromLeft}>
                Our unwavering commitment to excellence drives every project we
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality.
              </motion.p>

              <motion.div
                className="w-max flex flex-col text-right mb-10"
                variants={fromBottom}
              >
                <Image
                  src="/assets/assets/img/about/signature.svg"
                  alt="Signature"
                  width={150}
                  height={80}
                />
                <p className="text-gray-400 font-medium">Company CEO</p>
              </motion.div>

              <motion.div variants={fromBottom}>
                <Button text="Contact us" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex-1 xl:flex xl:justify-center" variants={fromRight}>
            <div className="xl:w-[444px] xl:h-[493px] relative">
              <div className="hidden xl:flex w-[444px] h-[493px] bg-[#ffc93c] absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/assets/img/about/img.jpg"}
                width={900}
                height={493}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
