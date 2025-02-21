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
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
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
    image: "/portfoliocode.jpg",
    description: "Responsive portfolio website with modern animations",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
    repoLink: "https://github.com/Dapious99/omotosho-kamalideen.git",
  },
  {
    id: 4,
    title: "Forepreneur Hangout Website",
    category: "Web Development",
    image: "/forexpreneur.jpg",
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
    company: "Echobitstech",
    duration: "June, 2024 - Dec., 2024",
    description: [
      "Led a team of 3 frontend developers in building enterprise web applications",
      "Implemented modern frontend architecture using Angular and TypeScript",
      "Reduced loading times by 40% through optimization techniques",
    ],
  },
  {
    id: 2,
    role: "Mobile Developer",
    company: "Learning & Freelancing",
    duration: "2019 - 2021",
    description: [
      "Developed cross-platform mobile applications using React Native",
      "Implemented complex animations and gestures",
      "Collaborated with UX team to improve app usability",
    ],
  },
];
