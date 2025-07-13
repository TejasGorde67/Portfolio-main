"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3dcard";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkPreviewDemo } from "@/components/linkpreview";
import { Meteors } from "@/components/ui/meteors";
import { useState } from "react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("web"); // Default to mobile apps

  // Web and mobile projects data remains unchanged

  const webProjects = [
    {
      title: "AnonyGram - is an anonymous messaging platform",
      tech: "Next.js, TypeScript, NextAuth, Gemini, MongoDB, Nodemailer, Magic UI, Tailwind CSS",
      image: "/assests/anonygram.png",
      liveLink: "https://anony-gram.vercel.app/",
      githubLink: "https://github.com/TejasGorde67/AnonyGram",
    },
    {
      title:
        "CloudBrain - collaborate share ideas & brain storm with each other",
      tech: "Next.js, TypeScript, NextAuth, Gemini, MongoDB, Nodemailer, Magic UI, Tailwind CSS",
      image: "/assests/cloudbrain.png",
      liveLink: "https://cloud-brain.vercel.app/",
      githubLink: "https://github.com/TejasGorde67/CloudBrain",
    },
    {
      title:
        "PageFlix - platform for discovering, downloading & uploading books",
      tech: "Next.js, TypeScript, NextAuth, MongoDB, Zod, Framer Motion, Shadcn UI, Tailwind CSS",
      image: "/assests/pageflix.png",
      liveLink: "https://page-flix.vercel.app/",
      githubLink: "https://github.com/TejasGorde67/PageFlix",
    },
    {
      title: "Socialite - social media platform to engage with other followers",
      tech: "React, Next.js, Tailwind CSS, shadcn, Clerk, Neon, PostgreSQL, Prisma, uploadthing",
      image: "/assests/socialite.png",
      liveLink: "https://sociallite.vercel.app/",
      githubLink: "https://github.com/TejasGorde67/Sociallite",
    },
    // Add more web projects as needed
  ];

  const mobileProjects = [
    {
      title: "Mobile Apps Coming Soon",
      tech: "Currently building exciting mobile applications",
      image: "/assests/building.png", // You might need to add this image or use a placeholder
      liveLink: "#",
      githubLink: "#",
    },
    // Mobile projects removed as requested
  ];

  // Get current projects based on active tab
  const currentProjects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex justify-center mb-8">
        <div className="p-1 rounded-full flex gap-6 border border-gray-200 dark:border-white/10">
          <button
            className={`px-4 py-2 rounded-full transition ${
              activeTab === "web"
                ? "bg-blue-600 text-white shadow-inner"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Apps
          </button>
          <button
            className={`px-4 py-2 rounded-full transition ${
              activeTab === "mobile"
                ? "bg-blue-600 text-white shadow-inner"
                : "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12 flex flex-col items-center">
          <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
            {currentProjects.map((project, index) => (
              <CardContainer key={index} className="inter-var h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <CardBody className="bg-[#f6f6f6] dark:bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-gray-200 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-gray-800 dark:text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-gray-600 dark:text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.tech}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={0}
                      rotateZ={-3}
                      className="w-full mt-4"
                    >
                      <Image
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="a"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-gray-800 dark:text-white"
                      >
                        Live Link →
                      </CardItem>

                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-gray-800 dark:text-white text-xl font-bold"
                      >
                        <GitHubLogoIcon className="w-8 h-8" />
                      </CardItem>
                    </div>
                  </CardBody>
                </motion.div>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
