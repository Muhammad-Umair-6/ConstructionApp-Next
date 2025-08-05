import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import Slider from "@/components/Slider";
import Pretitle from "./Pretitle";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="md:px-20 px-4 mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* LEFT SIDE ANIMATION */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Pretitle text="Testimonials" />
            <p className="font-[500] -mt-2 md:text-[40px] text-[30px]  mb-2">
              Built On Trust, Proven By <br className="md:block hidden" /> Results
            </p>
            <p className="mb-8 max-w-[480px] text-[16px] font-medium text-[#99a1af] ">
              From homes to commercial spaces, our clients share their experience
              of working with us. See how we have helped them bring their dreams
              to life with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </motion.div>

          {/* RIGHT SIDE ANIMATION */}
          <motion.div
            className="flex-1 flex flex-col md:flex-row md:justify-end"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative hidden md:flex md:w-[570px]  md:h-[380px]">
              <Image
                src="/assets/assets/img/testimonials/img.jpg"
                fill
                className="object-cover rounded-xl"
                quality={100}
                alt="Testimonial"
              />
            </div>
            <div className="md:absolute md:bottom-4 mt-8 md:right-[250px] relative max-w-max ">
              <Image
                src="/assets/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                className="absolute z-20 -top-3 left-[20px]"
                alt="Quote"
              />
              <Slider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
