"use client";
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; // Assuming Next.js for theme switching
import { Mail, Phone, Github, Linkedin, TwitterIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const ContactMe: React.FC = () => {
  const { theme } = useTheme(); // Next.js theme switcher hook
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand();
    }
  };

  const processCommand = () => {
    const addRegex = /^git add \. "(.*)"$/;
    const commitRegex = /^git commit -m "(.*)"$/;
    const pushRegex = /^git push origin adityajha2005$/;

    if (addRegex.test(command)) {
      const message = addRegex.exec(command)?.[1] || "";
      setFormData({ ...formData, message });
      setCommand("");
    } else if (commitRegex.test(command)) {
      const email = commitRegex.exec(command)?.[1] || "";
      setFormData({ ...formData, email });
      setCommand("");
    } else if (pushRegex.test(command)) {
      handleSubmit();
      setCommand("");
    } else {
      setFormStatus("Invalid command. Please try again.");
    }
  };

  const handleSubmit = async () => {
    setFormStatus("Submitting...");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f6a57aa6-d736-4b09-a35b-408d2b7758c9", // Replace with your Web3Forms access key
        ...formData,
      }),
    });

    const result = await res.json();

    if (result.success) {
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
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
        | Let's Connect |
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.a
          href="mailto:tejasgorde87@gmail.com"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Mail className="h-8 w-8 mb-2 text-red-800" />
          <span>Email</span>
        </motion.a>

        <motion.a
          href="https://x.com/tejas_87_"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <BsTwitterX className="h-8 w-8 mb-2 text-blue-400" />
          <span>Twitter</span>
        </motion.a>

        <motion.a
          href="https://github.com/TejasGorde67"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white dar rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Github className="h-8 w-8 mb-2 text-gray-700" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tejas-gorde-63b464256/"
          className="flex flex-col items-center p-4 bg-transparent dark:bg-transparent dark:text-white rounded-lg border border-black dark:border-white shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition transform hover:scale-105 hover:rotate-3"
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          <Linkedin className="h-8 w-8 mb-2 text-blue-700" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://wa.me/9172234691"
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
