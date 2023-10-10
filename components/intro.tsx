"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Loader from "./model-loader";

const LazyModel = dynamic(() => import("./model"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref: nameRef, replay } = useScramble({
    text: "ellis chung",
    speed: 0.25,
    tick: 5,
    step: 1,
    scramble: 10,
    seed: 0,
  });
  const [text, setText] = useState("software engineer");
  const { ref: careerRef } = useScramble({
    text,
    speed: 0.25,
    tick: 1,
    step: 1,
    scramble: 10,
    seed: 10,
    onAnimationEnd: () => {
      setTimeout(() => {
        setText((prevText) =>
          prevText === "software engineer"
            ? "full-stack developer"
            : "software engineer"
        );
      }, 1000);
    },
  });

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] font-roboto-mono"
    >
      <div className="flex items-center justify-center">
        <LazyModel />
      </div>

      <motion.h1
        className="mb-10 -mt-2 px-4 !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p
          ref={nameRef}
          className="mb-4 text-4xl font-light sm:text-8xl sm:font-thin sm:mb-8"
          onMouseEnter={replay}
        />
        <p
          ref={careerRef}
          className="mb-5 font-light sm:mb-10 sm:font-thin sm:text-4xl"
        />
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
