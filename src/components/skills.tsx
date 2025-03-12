"use client";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Image from "next/image";
import { useDarkMode } from "../hooks/useDarkMode";
import { FaTools } from "react-icons/fa";

interface ImageData {
  src: string;
  alt: string;
  tooltip: string;
}

const HoverImageComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { isDarkMode } = useDarkMode();

  const images: ImageData[] = [
    {
      src: "/assests/skills/js.webp",
      alt: "JavaScript",
      tooltip: "JavaScript",
    },
    { src: "/assests/skills/css.webp", alt: "CSS", tooltip: "CSS" },
    {
      src: "/assests/skills/typescript.webp",
      alt: "TypeScript",
      tooltip: "TypeScript",
    },
    {
      src: "/assests/skills/tailwind.webp",
      alt: "Tailwind CSS",
      tooltip: "Tailwind CSS",
    },
    { src: "/assests/skills/vite.webp", alt: "Vite", tooltip: "Vite" },
    { src: "/assests/skills/python.webp", alt: "Python", tooltip: "Python" },
    { src: "/assests/skills/git.webp", alt: "Git", tooltip: "Git" },
    { src: "/assests/skills/github.webp", alt: "GitHub", tooltip: "GitHub" },
    {
      src: "/assests/skills/githubActions.webp",
      alt: "GitHub Actions",
      tooltip: "GitHub Actions",
    },
    { src: "/assests/skills/html.webp", alt: "HTML", tooltip: "HTML" },
    { src: "/assests/skills/mongoDB.webp", alt: "MongoDB", tooltip: "MongoDB" },
    { src: "/assests/skills/mysql.webp", alt: "MySQL", tooltip: "MySQL" },
    { src: "/assests/skills/aws.webp", alt: "AWS", tooltip: "AWS" },
    { src: "/assests/skills/next.webp", alt: "Next.js", tooltip: "Next.js" },
    { src: "/assests/skills/nodejs.webp", alt: "Node.js", tooltip: "Node.js" },
    {
      src: "/assests/skills/postgre.webp",
      alt: "PostgreSQL",
      tooltip: "PostgreSQL",
    },
    { src: "/assests/skills/react.webp", alt: "React", tooltip: "React" },
    { src: "/assests/skills/sass.webp", alt: "Sass", tooltip: "Sass" },
    {
      src: "/assests/skills/vercelwhite.webp",
      alt: "Vercel",
      tooltip: "Vercel",
    },
    { src: "/assests/skills/docker.webp", alt: "Docker", tooltip: "Docker" },
    { src: "/assests/skills/netlify.webp", alt: "Netlify", tooltip: "Netlify" },
  ];

  return (
    <TooltipProvider delayDuration={0}>
      <div className="mt-20">
        <div className="flex justify-center items-center">
          <h1 className="text-center"> 🛠️| SKILLS |</h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-14 gap-x-14 justify-items-center px-2 py-2 mt-10">
          {images.map((image, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`transition-all duration-300 ease-in-out
                      ${
                        hoveredIndex === index
                          ? "scale-125 z-10 rotate-360 "
                          : "scale-80"
                      }
                      ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "blur-sm scale-75"
                          : ""
                      }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
              </TooltipTrigger>
              {hoveredIndex === index && (
                <TooltipContent
                  className={`p-2 text-sm rounded ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <p className="font-bold text-xl">{image.tooltip}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default HoverImageComponent;
