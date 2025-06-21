import type { Project, Skill, Experience } from "@/lib/types";
import { Code, Database, LayoutTemplate, Briefcase, GraduationCap, PenTool } from "lucide-react";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "QuantumLeap CRM",
    category: "Web App",
    description: "A futuristic CRM platform designed with glassmorphic UI and AI-powered analytics to predict customer behavior.",
    tags: ["React", "Node.js", "AI", "UI/UX"],
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    data_ai_hint: "futuristic dashboard",
  },
  {
    id: "project-2",
    title: "Aetherius E-commerce",
    category: "E-commerce",
    description: "An online marketplace for digital art, featuring immersive 3D galleries and a seamless user experience.",
    tags: ["Next.js", "Three.js", "Stripe"],
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    data_ai_hint: "digital art",
  },
  {
    id: "project-3",
    title: "Nova OS",
    category: "UI/UX",
    description: "A concept design for a minimalist mobile operating system, focusing on fluidity and intuitive interactions.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    data_ai_hint: "mobile interface",
  },
  {
    id: "project-4",
    title: "ChronoGuard",
    category: "Web App",
    description: "A secure and decentralized time-stamping service built on blockchain technology.",
    tags: ["Blockchain", "Solidity", "Web3"],
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    data_ai_hint: "secure blockchain",
  },
];

export const skills: Skill[] = [
  { name: "Frontend Development", Icon: Code },
  { name: "UI/UX Design", Icon: PenTool },
  { name: "Backend & Databases", Icon: Database },
  { name: "Responsive Design", Icon: LayoutTemplate },
];

export const experiences: Experience[] = [
  {
    date: "2021 - Present",
    title: "Senior Frontend Developer",
    company: "Innovate Inc.",
    description: "Leading the development of cutting-edge web applications, focusing on performance, user experience, and modern design principles.",
    Icon: Briefcase,
  },
  {
    date: "2019 - 2021",
    title: "UI/UX Designer",
    company: "Creative Solutions",
    description: "Designed intuitive and visually appealing interfaces for various clients, translating user needs into compelling digital experiences.",
    Icon: Briefcase,
  },
  {
    date: "2015 - 2019",
    title: "B.Sc. in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, specializing in Human-Computer Interaction and Artificial Intelligence.",
    Icon: GraduationCap,
  },
];

export const projectCategories = ["All", "Web App", "E-commerce", "UI/UX"];
