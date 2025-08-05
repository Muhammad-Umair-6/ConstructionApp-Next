"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiChat1Line, RiMap2Line, RiSmartphoneLine } from "react-icons/ri";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 md:pt-32">
      <div className="md:px-20 px-4 mx-auto">
        <motion.div
          className="w-full shadow-lg p-6 md:p-10 border-t-4 border-[#ffc93c] rounded-2xl bg-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Info Section */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-semibold mb-3">Get In Touch</h2>
                <p className="text-gray-600">
                  Have questions or need a quote? Reach out to us via email,
                  phone, or visit our office. We’d love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <RiSmartphoneLine className="text-[#ffc93c] text-3xl" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <RiChat1Line className="text-[#ffc93c] text-3xl" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <RiMap2Line className="text-[#ffc93c] text-3xl" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Street, Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-2">Request A Quote</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form and we’ll get back to you as soon as possible.
              </p>
              <motion.div
                className="bg-gray-50 p-5 rounded-xl shadow-inner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Form />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
