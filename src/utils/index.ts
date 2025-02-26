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
    title: "Social Media boosting Platform",
    category: "Web Development",
    // image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    image: "/igcartsss.jpg",
    description: "A modern social media boosting solution built with React.",
    technologies: ["React", "Javascript", "Redux", "Tailwind CSS", "APIs"],
    link: "https://igcarts.com",
  },
  {
    id: 2,
    title: "Restaurant App",
    category: "Mobile Development",
    image: "",
    description:
      "Trying to build a restaurant app as part of my learning journey on react native",
    technologies: ["React Native", "TypeScript", "Redux"],
    link: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    image: "/portfolio.jpg",
    description: "Responsive portfolio website with modern animations",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    repoLink: "https://github.com/Dapious99/omotosho-kamalideen.git",
  },
  {
    id: 4,
    title: "Forepreneur Hangout Website",
    category: "Web Development",
    image: "/forexpreneurr.jpg",
    description:
      "A mini-website with little integration to handle users voting and ticket buying for an event",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    link: "https://forexpreneur-handout-fden.vercel.app/",
    repoLink: "",
  },
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
