export interface Project {
  id: number;
  title: string;
  category: "Web Development" | "Mobile Development";
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A modern e-commerce solution built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Secure and intuitive mobile banking application",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Responsive portfolio website with modern animations",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
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
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2021 - Present",
    description: [
      "Led a team of 5 developers in building enterprise web applications",
      "Implemented modern frontend architecture using React and TypeScript",
      "Reduced loading times by 40% through optimization techniques",
    ],
  },
  {
    id: 2,
    role: "Mobile Developer",
    company: "Mobile Innovations",
    duration: "2019 - 2021",
    description: [
      "Developed cross-platform mobile applications using React Native",
      "Implemented complex animations and gestures",
      "Collaborated with UX team to improve app usability",
    ],
  },
];
