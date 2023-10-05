"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 font-roboto-mono"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Ellis Chung and I am a graduate from Stony Brook University
        with a B.S. in <span className="underline">Computer Science</span>. I am
        currently looking for a{" "}
        <span className="italic">full-time position</span> as a software
        developer. I have experience in front-end, back-end, and full-stack web
        development with my core tech stack being{" "}
        <span className="underline">React, Next.js, Node.js, and MongoDB</span>.
        However, my passion lies in crafting visually stunning web designs so my
        main focus resides in{" "}
        <span className="italic">front-end development</span>. It is my mission
        to create seamless and aesthically pleasing web experiences tailored to
        meet my clients' needs. Ensuring that every project is both
        user-friendly and beautiful is at the core of what I do. I am also
        always looking to learn new technologies; I am currently mastering
        TypeScript and am familiar with Prisma.
      </p>

      <p>
        <span className="italic">Outside of programming</span>, I indulge in my
        other passions such as b-boying, building PCs, and learning about new PC
        hardware. I also enjoy playing video games and watching anime. I love{" "}
        <span className="underline">learning new things</span> and I am
        currently trying to get better at Japanese. 頑張ります!
      </p>
    </motion.section>
  );
}
