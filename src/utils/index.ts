export interface Project {
  id: number;
  title: string;
  category: "Web Development" | "Mobile Development";
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  repoLink?: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Social Media boosting Platform (Igcarts)",
    category: "Web Development",
    // image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    image: "/igcarts.jpg",
    description: "A modern social media boosting solution built with React.",
    technologies: ["React", "Javascript", "Redux", "Tailwind CSS", "APIs"],
    link: "https://igcarts.com",
  },
  {
    id: 2,
    title: "Education Travelling App (Dansam Travels)",
    category: "Web Development",
    image: "/dansam.jpg",
    description:
      "A website built to handle and assist students travel outside the shores of Nigeria.",
    technologies: ["NextJS", "TypeScript"],
    link: "https://www.dansamtravels.com/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    image: "/portfoliocode.jpg",
    description: "Responsive portfolio website with modern animations",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://omotosho-kamalideen.vercel.app/",
    repoLink: "https://github.com/Dapious99/omotosho-kamalideen.git",
  },
  {
    id: 4,
    title: "Quiz App",
    category: "Web Development",
    image: "/quiz-me.jpg",
    description:
      "A quiz and history application that sums score and show incorrect answer",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://quiz-me.surge.sh/",
    repoLink: "https://github.com/Dapious99/quizMe.git",
  },
  {
    id: 5,
    title: "Edtech Platform (Stemmets)",
    category: "Web Development",
    image: "/stemmets.jpg",
    description:
      "A modern learning platform for kids between the age of 3 - 13years built with React.",
    technologies: [
      "React",
      "Javascript",
      "Redux",
      "Tailwind CSS",
      "APIs",
      "AntD",
    ],
    link: "https://stemmets.com",
  },
  {
    id: 6,
    title: "Forepreneur Hangout Website",
    category: "Web Development",
    image: "/forexpreneur.jpg",
    description:
      "A mini-webapp with little integration to handle users voting and ticket buying for an event",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    link: "https://forexpreneur-handout-fden.vercel.app/",
  },
  // {
  //   id: 7,
  //   title: "Restaurant App",
  //   category: "Mobile Development",
  //   image: "",
  //   description:
  //     "Trying to build a restaurant app as part of my learning journey on react native",
  //   technologies: ["React Native", "TypeScript", "Redux"],
  //   // link: "",
  // },
];
export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
}
export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Igcarts",
    duration: "Jan., 2024 - Present",
    description: [
      "Part of a team of 4 developers that build the igcarts social media boosting solution",
      "Implemented modern frontend architecture using React and JavaScript",
      "Solely responsible for the frontned codebase maintenanace and fixing bugs",
      "Reduced loading times by 60% through optimization techniques",
      "Increased administrative efficiency by 50% by creating more needed interface and functionality",
      "Integrated with APIs to communicate data with the backend service",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Echobitstech",
    duration: "June, 2024 - Dec., 2024",
    description: [
      "Led a team of 3 frontend developers in building enterprise web applications",
      "Implemented modern frontend architecture using Angular and TypeScript",
      "Reduced loading times by 40% through optimization techniques",
    ],
  },
  {
    id: 3,
    role: "Mobile Developer",
    company: "Learning & Freelancing",
    duration: "2025 - ",
    description: [
      // "Developed cross-platform mobile applications using React Native",
      // "Implemented complex animations and gestures",
      // "Collaborated with UX team to improve app usability",
    ],
  },
];

export const currentYear = new Date().getFullYear();
