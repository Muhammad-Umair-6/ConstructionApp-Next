"use client";
import Image from "next/image";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3 },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-[#000000] text-gray-300 py-10 mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <motion.div variants={itemLeft}>
          <Image
            src="/assets/assets/logo.png"
            width={200}
            height={200}
            alt="Logo"
          />
          <p className="text-gray-400 mt-4">
            Building modern, responsive websites with great user experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemRight}>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-[#ffc93c]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={itemLeft}>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            {[RiFacebookFill, RiInstagramLine, RiTwitterXLine].map(
              (Icon, i) => (
                <a key={i} href="#" className="text-2xl hover:text-[#ffc93c]">
                  <Icon />
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
