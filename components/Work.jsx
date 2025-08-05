"use client";
import React from "react";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const workData = [
  {
    img: "/assets/assets/img/services/thumb-1.jpg",
    name: "Restoration",
    description: "Detailed restoration project.",
    href: "",
  },
  {
    img: "/assets/assets/img/services/thumb-3.jpg",
    name: "Consulting",
    description: "Detailed description of project.",
    href: "",
  },
  {
    img: "/assets/assets/img/services/thumb-4.jpg",
    name: "Renovation",
    description: "Detailed description project",
    href: "",
  },
  {
    img: "/assets/assets/img/work/restoration.jpg",
    name: "Restoration",
    description: "Detailed restoration project.",
    href: "",
  },
];

// Variants for animation
const imageVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -80 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-25">
      <div className="md:px-20 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Pretitle text="Our Work" center />
          <p className="font-[500] -mt-3 md:text-[40px] text-[30px] text-center">
            Discover Our Projects
          </p>
          <p className="mb-8 max-w-[480px] text-[16px] font-medium text-[#99a1af] mx-auto text-center">
            Offering tailored construction solutions, from planning to
            completion with a focus on quality and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {workData.map((item, index) => {
            const direction = index % 2 === 0 ? "left" : "right"; // alternate direction
            return (
              <motion.div
                key={index}
                className="relative w-full h-[400px] overflow-hidden rounded-lg group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants(direction)}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover cursor-pointer"
                />

                <motion.div
                  className="absolute bottom-4 w-[310px] mx-2 bg-black cursor-pointer rounded-md  p-3 md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500"
                  variants={textVariants}
                >
                  <h3 className="text-white text-xl font-bold mb-1">
                    {item.name}
                  </h3>
                  <div className="flex gap-1 items-center">
                    <RiCheckboxCircleFill className="text-[#ffc93c] text-xl" />
                    <p className="text-white text-sm font-[500]">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="w-[40px] h-[40px] rounded-[2px] bg-[#ffc93c] text-black text-2xl flex justify-center items-center absolute right-6 top-2"
                  >
                    <RiArrowRightUpLine />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
