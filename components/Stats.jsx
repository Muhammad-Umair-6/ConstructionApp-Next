"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 800, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 30, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 10, endCountText: "+", text: "Years of Experience" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className="mt-16 px-2  xl:mt-32 bg-black py-10 w-full flex flex-wrap justify-around gap-6 text-center"
    >
      {statsData.map((item, index) => (
        <div key={index} className="text-white">
          <div className="text-4xl font-bold">
            {isInView && (
              <CountUp
                start={0}
                end={item.endCountNum}
                duration={3}
                suffix={item.endCountText}
              />
            )}
          </div>
          <p className="mt-2 text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
