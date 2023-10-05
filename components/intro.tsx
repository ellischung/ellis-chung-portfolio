"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Scramble from "react-scramble";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [restart, setRestart] = useState<null | (() => void)>(null);

  useEffect(() => {
    if (restart) {
      const interval = setInterval(() => restart(), 3600);
      return () => clearInterval(interval);
    }
  }, [restart]);

  const bindScrambleMethod = (controls: any) => {
    if (controls && typeof controls.restart === "function") {
      setRestart(() => controls.restart);
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] font-roboto-mono"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/ellis-photo.jpg"
            alt="ellis"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-48 w-48 rounded-full object-cover border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-8 px-4 !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="mb-4 text-4xl font-light sm:text-8xl sm:font-thin sm:mb-8">
          <Scramble
            autoStart
            text="ellis chung"
            mouseEnterTrigger="restart"
            steps={[
              {
                roll: 15,
                action: "+",
                type: "all",
              },
              {
                action: "-",
                type: "forward",
              },
            ]}
          />
        </p>
        <p className="mb-8 font-light sm:mb-16 sm:font-thin sm:text-4xl">
          <Scramble
            autoStart
            text="software engineer"
            bindMethod={bindScrambleMethod}
            steps={[
              {
                roll: 15,
                action: "+",
                type: "all",
              },
              {
                action: "-",
                type: "forward",
              },
              {
                action: "-",
              },
              {
                action: "-",
              },
              {
                text: "full stack developer",
                roll: 15,
                action: "+",
                type: "all",
              },
              {
                action: "-",
                type: "forward",
              },
            ]}
          />
        </p>
        <p>
          Hello! I'm a full-stack developer based in NY and I enjoy building
          sites & apps for my clients. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/ellis-chung-cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ellis-chung/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.github.com/ellischung"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
