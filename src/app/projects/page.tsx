"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3dcard";
("next/link");
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkPreviewDemo } from "@/components/linkpreview";
import { Meteors } from "@/components/ui/meteors";
export default function Component() {
  // <link rel="stylesheet" href="styles.css"></link>
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12 flex flex-col items-center">
          {" "}
          {/* Increased space-y to 12 */}
          <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
            {" "}
            {/* Increased gap to 12 */}
            <CardContainer className="inter-var h-full">
              {" "}
              {/* Added h-full */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border">
                  {" "}
                  {/* Fixed height to 600px */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    AnonyGram
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    React, Next.js, Tailwind CSS, shadcn, Clerk, Neon,
                    PostgreSQL, Prisma, uploadthing
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={0}
                    rotateZ={-3}
                    className="w-full mt-4"
                  >
                    <Image
                      src="/assests/anonygram.png"
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
                      href="https://anony-gram.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Live Link →
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="a"
                      href="https://github.com/TejasGorde67/AnonyGram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-white text-xl font-bold"
                    >
                      <GitHubLogoIcon className="w-8 h-8" />
                    </CardItem>
                  </div>
                </CardBody>
              </motion.div>
            </CardContainer>
            <CardContainer className="inter-var h-full">
              {" "}
              {/* Added h-full */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border">
                  {" "}
                  {/* Fixed height to 600px */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    CloudBrain
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    HTML, CSS, Javascript, Typescript
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={0}
                    rotateZ={-3}
                    className="w-full mt-4"
                  >
                    <Image
                      src="/assests/cloudbrain.png"
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
                      href="https://cloud-brain.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Live Link →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="a"
                      href="https://github.com/TejasGorde67/CloudBrain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-white text-xl font-bold"
                    >
                      <GitHubLogoIcon className="w-8 h-8" />
                    </CardItem>
                  </div>
                </CardBody>
              </motion.div>
            </CardContainer>
            <CardContainer className="inter-var h-full">
              {" "}
              {/* Added h-full */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border">
                  {" "}
                  {/* Fixed height to 600px */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    PageFlix
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    HTML, CSS, Javascript, Typescript
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={0}
                    rotateZ={-3}
                    className="w-full mt-4"
                  >
                    <Image
                      src="/assests/pageflix.png"
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
                      href="https://page-flix.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Live Link →
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="a"
                      href="https://github.com/TejasGorde67/PageFlix"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-white text-xl font-bold"
                    >
                      <GitHubLogoIcon className="w-8 h-8" />
                    </CardItem>
                  </div>
                </CardBody>
              </motion.div>
            </CardContainer>
            <CardContainer className="inter-var h-full">
              {" "}
              {/* Added h-full */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border">
                  {" "}
                  {/* Fixed height to 600px */}
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Socialite
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    React, Next.js, Tailwind CSS, shadcn, Clerk, Neon,
                    PostgreSQL, Prisma, uploadthing{" "}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={0}
                    rotateZ={-3}
                    className="w-full mt-4"
                  >
                    <Image
                      // public\assests\sociallite.png
                      src="/assests/socialite.png"
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
                      href="https://sociallite.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Live Link →
                    </CardItem>

                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="a"
                      href="https://github.com/TejasGorde67/Sociallite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-white text-xl font-bold"
                    >
                      <GitHubLogoIcon className="w-8 h-8" />
                    </CardItem>
                  </div>
                </CardBody>
              </motion.div>
            </CardContainer>
          </div>
          {/* <LinkPreviewDemo /> */}
        </div>
      </div>
    </section>
  );
}
