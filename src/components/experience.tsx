// "use client";
// import React from "react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "./ui/tooltip";
// import { FaBriefcase } from "react-icons/fa";

// interface ExperienceData {
//   company: string;
//   role: string;
//   duration: string;
//   logo: string;
// }

// const experiences: ExperienceData[] = [
//   {
//     company: "Goanny Technologies",
//     role: "Frontend Developer Intern",
//     duration: "3 Months",
//     logo: "/assets/experience/goanny.webp",
//   },
// ];

// const ExperienceSection: React.FC = () => {
//   return (
//     <TooltipProvider delayDuration={0}>
//       <div className="mt-24">
//         {/* Title Section */}
//         <div className="flex justify-center items-center mb-20">
//           <FaBriefcase className="text-2xl mr-2" />
//           <h1 className="text-center"> | My Experience |</h1>
//         </div>

//         {/* Experience Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-14 justify-items-center px-2 py-2">
//           {experiences.map((experience, index) => (
//             <Tooltip key={index}>
//               <TooltipTrigger asChild>
//                 <div className="relative flex flex-col items-center text-center">
//                   <img
//                     src={experience.logo}
//                     alt={experience.company}
//                     className="w-16 h-16 object-cover mb-4"
//                   />
//                   <h2 className="font-bold text-lg">{experience.company}</h2>
//                   <p className="text-sm text-gray-500">{experience.role}</p>
//                 </div>
//               </TooltipTrigger>
//               <TooltipContent className="p-2 text-sm bg-black text-white rounded">
//                 <p className="font-bold">{experience.role}</p>
//                 <p className="text-xs">{experience.duration}</p>
//               </TooltipContent>
//             </Tooltip>
//           ))}
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// };

// export default ExperienceSection;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCalendar } from "react-icons/fa";

// interface ExperienceItem {
//   title: string;
//   company: string;
//   period: string;
//   description: string[];
//   side: "left" | "right" | "middle";
// }

// const experiences: ExperienceItem[] = [
//   {
//     title: "Full Stack Developer",
//     company: "Goanny Technologies",
//     period: "Dec 2024 - Feb 2025",
//     description: [
//       "Developing and optimizing AI-powered applications, integrating machine learning models into full-stack systems",
//       "Collaborating with cross-functional teams to enhance AI solutions for real-world applications.",
//     ],
//     side: "middle",
//   },
// ];

// const ExperienceSection = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="my-8 md:my-16 relative px-4 md:px-0"
//     >
//       {/* Header */}
//       <div className="text-center mb-8 md:mb-16">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="inline-block p-2 bg-primary/10 rounded-xl mb-4"
//         >
//           <FaBriefcase className="text-xl md:text-2xl text-primary animate-pulse" />
//         </motion.div>
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-300 relative">
//           | Experience Timeline |
//         </h2>
//       </div>

//       {/* Timeline Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full hidden md:block">
//         <div className="w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary rounded-full animate-pulse" />
//       </div>

//       {/* Experience Cards */}
//       <div className="relative">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             initial={{
//               opacity: 0,
//               x: exp.side === "left" ? -50 : exp.side === "right" ? 50 : 0,
//             }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.3 }}
//             className={`flex flex-col items-center mb-8 md:mb-16 ${
//               exp.side === "left"
//                 ? "md:flex-row"
//                 : exp.side === "right"
//                 ? "md:flex-row-reverse"
//                 : "md:justify-center"
//             }`}
//           >
//             {/* Experience Card */}
//             <div
//               className={`w-full ${
//                 exp.side === "middle"
//                   ? "md:w-6/12 flex justify-center"
//                   : "md:w-5/12"
//               } ${
//                 exp.side === "left"
//                   ? "md:pr-8"
//                   : exp.side === "right"
//                   ? "md:pl-8"
//                   : ""
//               }
//               mb-4 md:mb-0`}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 p-4 md:p-6 rounded-xl
//                                           backdrop-blur-lg border border-gray-300 dark:border-gray-700/50
//                                           shadow-lg hover:shadow-primary/30 transition-all duration-300
//                                           relative overflow-hidden"
//               >
//                 <div className="relative z-10">
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                     {exp.title}
//                   </h3>
//                   <div className="flex items-center text-gray-700 dark:text-gray-200 mb-1 text-sm md:text-base">
//                     <FaBriefcase className="mr-2 text-primary" />
//                     <p>{exp.company}</p>
//                   </div>
//                   <div className="flex items-center text-gray-700 dark:text-gray-200 mb-4 text-sm">
//                     <FaCalendar className="mr-2 text-primary" />
//                     <p>{exp.period}</p>
//                   </div>
//                   <ul className="space-y-2">
//                     {exp.description.map((item, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.5 + idx * 0.1 }}
//                         className="text-gray-700 dark:text-gray-200 text-xs md:text-sm flex items-start"
//                       >
//                         <span className="mr-2 text-white">•</span>
//                         {item}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Timeline Dot */}
//             <div className="w-full md:w-2/12 flex justify-center relative">
//               <motion.div
//                 whileHover={{ scale: 1.2 }}
//                 className="w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full border-4 border-gray-800 dark:border-gray-800 z-10
//                                           shadow-lg shadow-primary/30 relative"
//               >
//                 <div className="absolute inset-0 bg-primary/30 dark:bg-white/20 rounded-full animate-ping opacity-20" />
//               </motion.div>
//             </div>

//             {/* Empty space for non-middle items */}
//             {exp.side !== "middle" ? (
//               <div className="hidden md:block md:w-5/12" />
//             ) : null}
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ExperienceSection;

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
    company_logo: "/goanny-logo.png",
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
    <div className="w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center mt-4 pb-8">
      <Title title="Experience" />

      {experiences.map((exp, index) => (
        <MagicCard
          key={index}
          className="cursor-pointer dark:shadow-2xl mt-5 !bg-transparent border-none"
          gradientColor={`${
            isDarkMode ? "#262626" : "rgba(197, 241, 241, 0.4)"
          }`}
        >
          <div className="flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3">
            {/* Company Logo */}
            <div className="w-24 flex items-center justify-center">
              <Link href={exp.company_link} target="_blank">
                <Image
                  src={exp.company_logo}
                  alt="company-logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
            </div>

            {/* Experience Details */}
            <div className="w-full">
              <div className="">
                <div
                  className={`flex justify-between max-sm:items-center ${bricolage_grotesque}`}
                >
                  <h1 className="text-lg max-sm:text-base font-semibold">
                    {exp.job_title}
                  </h1>
                  <span className="text-xs max-sm:text-[10px] max-sm:hidden">
                    {exp.duration}
                  </span>
                </div>
                <h2 className={`text-sm max-sm:text-xs ${inter}`}>
                  {exp.company_name}
                </h2>
                <h2
                  className={`text-sm max-sm:text-[10px] hidden max-sm:block mt-1 ${inter}`}
                >
                  {exp.duration}
                </h2>
              </div>
              <div className="mt-3 max-sm:mt-2 text-sm max-sm:text-[11px]">
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        </MagicCard>
      ))}
    </div>
  );
};

export default ExperienceSection;
