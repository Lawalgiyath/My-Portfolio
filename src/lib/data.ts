import { Briefcase, Building, Code } from "lucide-react";
import type { Project, Skill, Testimonial, Experience } from "@/lib/types";

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
    category: "UI/UX Design",
    description: "Concept for a next-generation operating system with a focus on fluidity, minimalism, and AI integration.",
    tags: ["Figma", "Concept", "UI/UX"],
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    data_ai_hint: "minimalist os",
  }
];

export const skillsetAndTools: Skill = {
  title: "My skillset & tools",
  items: [
    "Next.js & React",
    "TypeScript & JavaScript",
    "Node.js & Python",
    "TailwindCSS & Framer Motion",
    "Three.js & WebGL",
    "Figma & Adobe Suite",
    "Genkit & AI Integration"
  ],
};

export const servicesAndOfferings: Skill = {
  title: "My services & offerings",
  items: [
    "Full-stack Web Development",
    "Interactive 3D Experiences",
    "UI/UX Design & Prototyping",
    "AI Feature Integration",
    "E-commerce & Web Apps",
    "Creative Direction"
  ],
};

export const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "CEO, Innovate Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    comment: "Working with Lawal was an absolute pleasure. Their attention to detail and creative solutions were instrumental in our project's success.",
  },
  {
    name: "John Smith",
    role: "Project Manager, Creative Solutions",
    avatarUrl: "https://placehold.co/100x100.png",
    comment: "Lawal is a highly skilled developer who consistently delivers high-quality work. I would highly recommend them for any web development needs.",
  },
    {
    name: "Sarah Lee",
    role: "Lead Designer, TechForward",
    avatarUrl: "https://placehold.co/100x100.png",
    comment: "An exceptional designer with a keen eye for aesthetics and user experience. Lawal brought our vision to life beautifully.",
  },
];

export const experiences: Experience[] = [
  {
    date: "2021 - Present",
    title: "Lead Developer & Designer",
    company: "QuantumLeap Inc.",
    description: "Leading the design and development of futuristic web applications, focusing on creating immersive and intuitive user experiences with cutting-edge technologies.",
    Icon: Briefcase,
  },
  {
    date: "2019 - 2021",
    title: "Full-Stack Developer",
    company: "Aetherius Solutions",
    description: "Developed and maintained scalable e-commerce platforms and interactive 3D web experiences, pushing the boundaries of what's possible on the web.",
    Icon: Code,
  },
  {
    date: "2017 - 2019",
    title: "UI/UX Designer",
    company: "Nova Creative",
    description: "Designed user-centric interfaces for various digital products, from concept to final prototype, with a strong focus on aesthetics and usability.",
    Icon: Building,
  },
];
