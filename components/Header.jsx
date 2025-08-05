import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fromTop = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
};

const Header = () => {
  return (
    <motion.header
      className="bg-black py-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="md:px-6 px-2 max-auto">
        <div className="flex justify-between items-center text-white">
          {/* Logo */}
          <motion.div variants={fromTop}>
            <Link href="">
              <Image src="/assets/assets/logo.png" width={200} height={30} alt="Logo" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden xl:flex items-center gap-12"
            variants={fromBottom}
          >
            <ul className="flex">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  variants={fromTop}
                  className="text-sm uppercase font-medium tracking-[1.2px] after:content-['/'] after:text-[#ffc93c] after:mx-2 last:after:content-none"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    activeClass="text-yellow-300" 
                    className="cursor-pointer text-white hover:text-[#ffc93c] transition-colors duration-200"
                  >
                    {link.name}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[200px] h-[54px] py-[5px] text-black bg-white pl-[10px] cursor-pointer pr-[5px] flex items-center justify-between min-w-[200px] group"
            >
              <div className="flex-1 text-center tracking-[1.2px] font-bold text-sm uppercase">
                Get a quote
              </div>
              <motion.div
                className="w-11 h-11 flex items-center justify-center bg-black cursor-pointer"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <RiArrowRightUpLine className="text-white text-xl" />
              </motion.div>
            </motion.button>
          </motion.nav>

          {/* Mobile Menu */}
          <motion.div className="xl:hidden" variants={fromBottom}>
            <NavMobile />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
