"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-[#99a1af] rounded-sm focus:ring-2 focus:ring-[#ffc93c] outline-none"
          placeholder="Enter your name"
        />
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border-2 border-[#99a1af] rounded-sm focus:ring-2 focus:ring-[#ffc93c] outline-none"
          placeholder="Enter your email"
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 py-2 border-2 border-[#99a1af] rounded-sm focus:ring-2 focus:ring-[#ffc93c] outline-none"
          placeholder="Write your message"
        ></textarea>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="w-full bg-[#ffc93c] hover:bg-[#e0ac2c] cursor-pointer text-white font-medium py-3 px-4 rounded-sm transition"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default Form;
