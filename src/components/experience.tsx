"use client";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import { Link } from "@radix-ui/themes";
import { useDarkMode } from "../hooks/useDarkMode";
import Title from "./ui/Title";
import { bricolage_grotesque, inter } from "../utils/fonts";

interface ExperienceItem {
  company_name: string;
  company_logo: string;
  company_link: string;
  job_title: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    company_name: "Goanny Technologies",
    company_logo: "/assests/goanny.png",
    company_link: "https://www.goanny.com",
    job_title: "Full Stack Developer",
    duration: "Dec 2024 - Feb 2025",
    description:
      "Developed and optimized AI-powered applications, integrating machine learning models into full-stack systems.",
  },
];

const ExperienceSection = () => {
  const { isDarkMode } = useDarkMode();

  return (
    // <div className="w-full flex flex-col items-center mt-4 pb-8 px-5">
    //   <Title title="Experience" /> {/* Title placed above */}
    //   <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center">
    //     {experiences.map((exp, index) => (
    //       <MagicCard
    //         key={index}
    //         className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none"
    //         gradientColor={`${
    //           isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"
    //         }`}
    //       >
    //         <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
    //           <div className="w-24 flex items-center justify-center">
    //             <Link href={exp.company_link} target="_blank">
    //               <Image
    //                 src={exp.company_logo}
    //                 alt="company-logo"
    //                 width={50}
    //                 height={50}
    //                 className="rounded-full"
    //               />
    //             </Link>
    //           </div>

    //           <div className="w-full">
    //             <div className="">
    //               <div
    //                 className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}
    //               >
    //                 <h1 className="text-lg max-sm:text-base font-semibold">
    //                   {exp.job_title}
    //                 </h1>
    //                 <span className="text-xs max-sm:text-[10px] max-sm:hidden">
    //                   {exp.duration}
    //                 </span>
    //               </div>
    //               <h2 className={`text-sm max-sm:text-xs ${inter}`}>
    //                 {exp.company_name}
    //               </h2>
    //               <h2
    //                 className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}
    //               >
    //                 {exp.duration}
    //               </h2>
    //             </div>
    //             <div className="mt-3 max-sm:mt-2 text-sm max-sm:text-[11px]">
    //               <p>{exp.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       </MagicCard>
    //     ))}
    //   </div>
    // </div>

    <div className="w-full min-h-screen flex flex-col items-center justify-center mt-2 pb-8 px-5">
      <Title title="Experience" />
      <div className="w-3/4 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center">
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
                  <p>{exp.description}</p>
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
