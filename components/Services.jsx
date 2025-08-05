"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import { motion } from "framer-motion";
import Pretitle from "./Pretitle";
import Button from "./Button";

const servicesData = [
  {
    name: "construction",
    icon: <PiWallFill size={22} />,
    title: "Construction Services",
    description:
      "We provide high-quality construction services including design, planning, and execution with experienced professionals.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Preparation",
      "Concrete Work",
      "Framing & Roofing",
      "Interior & Finish",
    ],
    thumbs: [
      { url: "/assets/assets/img/services/thumb-1.jpg" },
      { url: "/assets/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "painting",
    icon: <PiPaintRollerFill size={22} />,
    title: "Painting Services",
    description:
      "Professional painting services to transform your space with quality finishes and vibrant colors.",
    serviceList: [
      "Interior Painting",
      "Exterior Painting",
      "Wall Finishing",
      "Texture Coating",
      "Protective Coating",
      "Custom Colors",
    ],
    thumbs: [
      { url: "/assets/assets/img/services/thumb-5.jpg" },
      { url: "/assets/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "repair",
    icon: <PiWrenchFill size={22} />,
    title: "Repair & Maintenance",
    description:
      "Expert repair and maintenance services to keep your property in top condition.",
    serviceList: [
      "Plumbing Repairs",
      "Electrical Fixes",
      "Roof Maintenance",
      "Appliance Repairs",
      "HVAC Services",
      "General Renovation",
    ],
    thumbs: [
      { url: "/assets/assets/img/services/thumb-3.jpg" },
      { url: "/assets/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "management",
    icon: <PiUserGearFill size={22} />,
    title: "Project Management",
    description:
      "Comprehensive project management solutions ensuring smooth workflow, timely delivery, and quality assurance.",
    serviceList: [
      "Planning & Scheduling",
      "Resource Management",
      "Budget Tracking",
      "Risk Analysis",
      "Quality Control",
      "Team Coordination",
    ],
    thumbs: [
      { url: "/assets/assets/img/services/thumb-1.jpg" },
      { url: "/assets/assets/img/services/thumb-4.jpg" },
    ],
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="md:px-20 px-4 mx-auto ">
        <Pretitle text="Our Services" center />
        <p className="font-[500] -mt-3 md:text-[40px] text-[30px] text-center">
          Solution We Provide
        </p>
        <p className="mb-8 max-w-[480px] text-[16px] font-medium text-[#99a1af] mx-auto text-center">
          Offering tailored construction solutions, from planning to completion
          with a focus on quality and innovation
        </p>

        <Tabs defaultValue={servicesData[0].name} className="w-full">
          {/* Tabs Content */}
          {servicesData.map((service) => (
            <TabsContent
              key={service.name}
              value={service.name}
              className=" mt-20 p-6 rounded-xl grid md:grid-cols-2 grid-cols-1 gap-8"
            >
              {/* Left Side - Text with Animation */}

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                className="flex md:gap-9 gap-3"
              >
                {/* Tabs Header */}
                <TabsList className="flex flex-col justify-center md:gap-4 gap-6 mb-10 flex-wrap">
                  {servicesData.map((service) => (
                    <TabsTrigger
                      key={service.name}
                      value={service.name}
                      className="px-5 py-2  gap-2 w-18 flex justify-center items-center h-18 rounded-sm  cursor-pointer bg-black text-white shadow hover:bg-[#ffca3a] hover:text-black transition-all duration-200 "
                    >
                      {service.icon}
                      {/* <span className="capitalize font-medium ">{service.title}</span> */}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div>
                  <h3 className="md:text-3xl text-[18px] font-semibold md:mb-6 mb-2 ">
                    {service.title}
                  </h3>
                  <p className="text-gray-400  text-[16px] font-medium md:mb-6 mb-2">
                    {service.description}
                  </p>
                  <div className="list-disc  font-medium space-y-2 text-gray-700">
                    {service.serviceList.map((item, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                      >
                        
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-300 "></div>
                          {item}
                        </div>
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Images with Animation */}

              <motion.div
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2  gap-4 "
              >
                {service.thumbs.map((thumb, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                  >
                    <Image
                      src={thumb.url}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
