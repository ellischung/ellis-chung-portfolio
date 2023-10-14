"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] leading-8 scroll-mt-28 font-roboto-mono sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col text-center items-center justify-center lg:flex-row lg:text-left">
        <Image
          src="/ellis-photo.jpg"
          alt="ellis"
          width="240"
          height="240"
          quality="95"
          priority={true}
          className="mb-8 h-24 w-24 rounded-full object-cover border-2 dark:border-white shadow-xl lg:mb-0 lg:mr-24 lg:h-60 lg:w-60"
        />
        <div>
          <p className="mb-3">
            My name is Ellis Chung and I am a graduate from Stony Brook
            University with a B.S. in{" "}
            <span className="underline">Computer Science</span>. I am currently
            looking for a <span className="italic">full-time position</span> as
            a software developer. I have experience in front-end, back-end, and
            full-stack web development with my core tech stack being{" "}
            <span className="underline">
              React, Next.js, Node.js, and MongoDB
            </span>
            . However, my passion lies in crafting visually stunning web designs
            so my main focus resides in{" "}
            <span className="italic">front-end development</span>. It is my
            mission to create seamless and aesthically pleasing web experiences
            tailored to meet my clients' needs. Ensuring that every project is
            both user-friendly and beautiful is at the core of what I do.
          </p>
          <p>
            <span className="italic">Outside of programming</span>, I indulge in
            my other passions such as b-boying, building PCs, and learning about
            new tech. I also enjoy playing video games and watching anime. I
            love <span className="underline">learning new things</span> and I am
            currently trying to get better at Japanese. 頑張ります!
          </p>
        </div>
      </div>
    </motion.section>
  );
}
