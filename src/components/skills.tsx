"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Prisma",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "MySQL",
    "Turborepo",
    "Docker",
    "AWS",
    "Redux",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Git",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          ✨ Skills ✨
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
