"use client";
import React from "react";
import { FaTools } from "react-icons/fa";
import HoverImageComponent from "@/components/skills";
import { IconCloudDemo } from "@/components/skillcloud";

type CodeIconProps = React.SVGProps<SVGSVGElement>;
function CodeIcon(props: CodeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const SkillPage = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <CodeIcon className="w-10 h-10 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
      <div className="flex flex-col items-center justify-center w-full my-8">
        <IconCloudDemo />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        ✨ Skills ✨
      </h2>

      <section className="py-8 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-700 hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillPage;
