import nexacoinImg from "@/public/nexacoin.png";
import marketplusplusImg from "@/public/marketplusplus.png";
import overclockedImg from "@/public/overclocked.png";
import recmeanimeImg from "@/public/recmeanime.png";
import guesstheanimeImg from "@/public/guesstheanime.png";
// import mixtapeplusImg from "@/public/mixtapeplus.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "NexaCoin",
    description:
      "An innovative cryptocurrency platform for real-time analytics and streamlined portfolio management built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Redux", "Chart.js", "TailwindCSS"],
    imageUrl: nexacoinImg,
  },
  {
    title: "Overclocked",
    description:
      "An e-commerce web app for selling PC components and tech services. Utilizes e-commerce APIs from Commerce.js and Stripe.",
    tags: ["React", "Commerce.js", "Stripe"],
    imageUrl: overclockedImg,
  },
  {
    title: "Market++",
    description:
      "A full stack MERN web app that aggregates Facebook Marketplace, eBay, OfferUp, craigslist, and Etsy into one easy-to-use platform.",
    tags: ["React", "Node.js", "Express", "MongoDB", "GraphQL", "Puppeteer"],
    imageUrl: marketplusplusImg,
  },
  {
    title: "RecMeAnime",
    description:
      "A web application that utilizes the MyAnimeList API to help users get accurate recommendations of their favorite animes.",
    tags: ["React", "SCSS/SASS"],
    imageUrl: recmeanimeImg,
  },
  {
    title: "GuessTheAnime",
    description:
      "A multiplayer game where players compete to see who can recognize the most anime based on their openings/endings/OSTs.",
    tags: ["React", "Node.js", "Express", "Socket.IO"],
    imageUrl: guesstheanimeImg,
  },
  // {
  //   title: "MixtapePlus",
  //   description:
  //     "A full stack MERN Spotify clone featuring Recharts for advanced visualization of personalized Spotify data.",
  //   tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
  //   imageUrl: mixtapeplusImg,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Java",
  "Python",
  "Perl",
  "C",
  "Bash",
  "MIPS",
  "SCSS/SASS",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "Mocha",
  "Chai",
  "Jest",
  "Three.js",
  "Framer Motion",
  "Redux",
  "REST APIs",
  "Socket.IO",
  "jQuery",
  "GraphQL",
  "Axios",
  "AJAX",
  "Commerce.js",
  "Puppeteer",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
  "Linux/Unix",
] as const;
