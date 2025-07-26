"use client";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import { Link } from "@radix-ui/themes";
import { useDarkMode } from "../hooks/useDarkMode";
import Title from "./ui/Title";
import { FaBriefcase } from "react-icons/fa";
import { bricolage_grotesque, inter } from "../utils/fonts";

type ExperienceItem = {
  company_name: string;
  company_logo: string;
  company_link: string;
  job_title: string;
  duration: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    company_name: "Frontend Developer (Internship)",
    company_logo: "/assests/goanny.png",
    company_link: "https://www.goanny.com",
    job_title: " Goanny Technologies Pvt.Ltd   ",
    duration: "Feb 2025 - Present",
    description: [
      "Front-End Developer with experience in building responsive and high-performance web and mobile apps using React.js and React Native.",
      "Experienced in state management (Redux, Context API) and API integrationsfor dynamic data handling.",
      "Skilled in HTML, CSS, JavaScript, and modern UI frameworksfor creating seamless user experiences.",
      "Strong understanding of performance optimization, component-based architecture and cross-platform development.",
    ],
  },
];

const ExperienceSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    // <div className="w-full min-h-screen flex flex-col items-center justify-center mt-2 pb-8 px-5">
    <div className="mt- w-full flex-col items-center ">
      <div className="flex justify-center items-center">
        {/* <FaBriefcase className="text-2xl mr-2 text-blue-300" /> */}
        <h2 className="text-3xl font-bold text-center mb-18 text-black dark:text-white">
          💼 Experience 💼
        </h2>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none w-full"
            gradientColor={`${
              isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"
            }`}
          >
            <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-6">
              <div className="w-32 flex items-center justify-center">
                <Image
                  src={exp.company_logo}
                  alt="company-logo"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>

              <div className="w-full">
                <div className="">
                  <div
                    className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}
                  >
                    <h1 className="text-xl max-sm:text-lg font-semibold">
                      {exp.job_title}
                    </h1>
                    <span className="text-sm max-sm:text-[12px] max-sm:hidden">
                      {exp.duration}
                    </span>
                  </div>
                  <h2 className={`text-lg max-sm:text-sm ${inter}`}>
                    {exp.company_name}
                  </h2>
                  <h2
                    className={`text-sm max-sm:text-[12px] hidden max-sm:block mt-1 ${inter}`}
                  >
                    {exp.duration}
                  </h2>
                </div>
                <div className="mt-5 max-sm:mt-3 text-md max-sm:text-sm">
                  <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
                    {exp.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
