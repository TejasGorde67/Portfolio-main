"use client";
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Mail, Phone, Github, Linkedin, TwitterIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactMe: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [command, setCommand] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleCommandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center  ${
        theme === "dark"
          ? "bg-transparent  text-white"
          : "bg-transparent text-black"
      }`}
    >
      <motion.h1
        className=" mb-4 text-black dark:text-white "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* {/* <FaPhone className="text-2xl mr-2" /> */}🤝| Let's Connect |
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          href="mailto:tejasgorde87@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Mail className="h-8 w-8 mb-2 text-red-800" />
          <span>Email</span>
        </motion.a>

        <motion.a
          href="https://x.com/tejas_87_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <BsTwitterX className="h-8 w-8 mb-2 text-blue-400" />
          <span>Twitter</span>
        </motion.a>

        <motion.a
          href="https://github.com/TejasGorde67"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white dar rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Github className="h-8 w-8 mb-2 text-gray-700" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tejas-gorde-63b464256/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Linkedin className="h-8 w-8 mb-2 text-blue-700" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://wa.me/9172234691"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <FaWhatsapp className="h-8 w-8 mb-2 text-green-500" />
          <span>WhatsApp</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ContactMe;
