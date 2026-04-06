import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  project1,
  project2,
  project3,
  project4,
} from "../assets";

const initialLetterIcon = "O";
const remainingLetters = "m Gupta";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
];

export const socialLinks = {
  github: "https://github.com/Om2407",
  linkedin: "https://www.linkedin.com/in/om-gupta-2407/",
  resume: "https://drive.google.com/file/d/1LbjsjHaKKvuugDr0yxaTbg6PONPc5n0z/view?usp=drivesdk",
};
const projects = [
  {
    name: "AI-Powered LMS",
    description:
      "A SaaS-level Learning Management System with Student & Instructor dashboards, Gemini AI course search, Google OAuth 2.0, and Razorpay payments.",
    features: [
      "Student & Instructor dashboards with role-based access control via Google OAuth 2.0.",
      "Gemini AI for smart course search and personalized learning recommendations.",
      "Razorpay payment gateway integration with webhook handling for course purchases.",
      "Redux Toolkit state management reducing page load times by 30%.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "gemini-ai",
        color: "purple-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Om2407/LMS-Platform",
    live_link: "https://ai-lms-website-omfr.onrender.com/",
  },
  {
    name: "AI Website Generator",
    description:
      "An AI-driven platform that generates complete production-ready websites from a single text prompt using Gemini API, with 3D previews via Three.js.",
    features: [
      "Single prompt → full production-ready website via Gemini API for layout & content generation.",
      "Pexels API integration for contextual high-quality imagery — cutting manual setup by 60%.",
      "Interactive 3D website previews built with Three.js.",
      "TypeScript + Vite with scalable reusable component architecture.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "gemini-api",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Om2407/ProjectAI",
    live_link: "https://ai-website-builder-1yj3.onrender.com",
  },
  {
    name: "Remote Interview Platform",
    description:
      "A full-stack technical interview platform with 1-on-1 HD video, real-time chat, screen sharing, VSCode-powered in-browser code execution, and auto test-case feedback.",
    features: [
      "1-on-1 HD video with real-time chat, screen sharing & recording via Stream Video & Chat.",
      "VSCode-powered in-browser code editor with isolated execution and auto test-case feedback.",
      "Room locking for 2 participants with Clerk-based secure auth & session management.",
      "Inngest for async background jobs · TanStack Query for data caching · CodeRabbit for PR reviews.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
      },
      {
        name: "stream",
        color: "purple-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Om2407/Interview-Platform",
    live_link: "https://interview-frontend-r67t.onrender.com",
  },
  {
    name: "Golf Charity Platform",
    description:
      "A subscription-based golf platform with Stableford score tracking, monthly lottery draws, charity contribution engine, and full admin control panel.",
    features: [
      "Subscription engine with Monthly & Yearly plans powered by Razorpay — PCI-compliant payments.",
      "Stableford score management system — last 5 scores retained, rolling replacement logic.",
      "Monthly draw engine with 3/4/5-number match tiers, jackpot rollover, and admin simulation mode.",
      "Charity directory with search & filter — 10%+ of every subscription auto-contributed.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "razorpay",
        color: "orange-text-gradient",
      },
      {
        name: "jwt",
        color: "purple-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Om2407/Project-DH",
    live_link: "https://digitalheroes-omega.vercel.app/",
  },
];

const experiences = [];

const testimonials = [];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};