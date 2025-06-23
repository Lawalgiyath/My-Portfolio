import { Briefcase, Building, Code, Bot, Building2 } from "lucide-react";
import type { Project, Skill, Testimonial, Experience } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Holiwells International Website",
    category: "Web Development",
    description: "Built and currently maintain a fully responsive and immersive website for Holiwells International's psychological services branch.",
    tags: ["Full-Stack", "Web Management", "Responsive Design"],
    imageUrl: "https://i.postimg.cc/dQCM4LdW/holiwells.png",
    link: "https://holiwellsinternational.com/",
    data_ai_hint: "health website",
  },
  {
    id: "project-2",
    title: "FixMyArea Hackathon App",
    category: "Hackathon Project",
    description: "Designed a clean, mobile-responsive UI for the MVP platform, translated UX requirements into functional components, and led a three-person team to third place out of ten teams.",
    tags: ["UI/UX", "Mobile-Responsive", "Team Lead", "React"],
    imageUrl: "https://placehold.co/600x400.png",
    data_ai_hint: "map application",
  },
  {
    id: "project-3",
    title: "FTC Robot Control Interface",
    category: "UI/UX & Robotics",
    description: "Led the front-end logic and UI flows for robot control interfaces, introducing prototypes and improving UX for driver stations.",
    tags: ["UI/UX", "Robotics", "Prototyping"],
    imageUrl: "https://placehold.co/600x400.png",
    data_ai_hint: "robot interface",
  }
];

export const skillsetAndTools: Skill = {
    title: "My Technical Skills",
    items: [
      "HTML5, CSS3, JavaScript (ES6+), Python (basic)",
      "React.js (in progress), TypeScript, Web Animations",
      "Firebase, MongoDB",
      "Tailwind CSS, Bootstrap",
      "Git, GitHub, VS Code, Netlify",
      "Figma (UI/UX Design)",
      "Responsive Web Design, Wireframing, Version Control",
    ],
  };
  
  export const servicesAndOfferings: Skill = {
    title: "What I Do",
    items: [
      "Frontend Development",
      "Responsive Web Design",
      "UI/UX Implementation",
      "Transforming Designs to Code",
      "Technical Leadership",
      "Community Building",
    ],
  };
  
  export const testimonials: Testimonial[] = [
      {
      name: "AIROL Partner",
      role: "Affiliated Company",
      Icon: Building2,
      comment: "Lawal's strong engineering contributions were a key factor in our project's success. We were proud to feature his work on our site.",
    },
    {
      name: "CJID x Google Developers",
      role: "Hackathon Organizers",
      Icon: Code,
      comment: "The Spiral Waves team, led by Lawal, delivered an impressive and polished UI for their project, earning them a well-deserved third place in the hackathon.",
    },
      {
      name: "FIRST Tech Challenge",
      role: "Event Coordinator",
      Icon: Bot,
      comment: "As Head of Software, Lawal's leadership in prototyping and improving UI for the driver stations was outstanding and greatly enhanced the user experience.",
    },
  ];
  
  export const experiences: Experience[] = [
    {
      date: "2024 - Present",
      title: "Full Stack Developer & Website Manager",
      company: "Holiwells International",
      description: "Built and currently maintain a fully responsive, immersive website for their psychological services branch.",
      Icon: Briefcase,
    },
    {
      date: "2023 - 2025",
      title: "Frontend/UI Contributor",
      company: "AIROL (Artificial Intelligence and Robotics Lab)",
      description: "Developed front-end layouts for internal dashboards, collaborated with the backend team to create clean data visualizations, and was featured on a partner company website for strong engineering contributions.",
      Icon: Code,
    },
    {
      date: "2022 - 2024",
      title: "Head of Software",
      company: "FIRST Tech Challenge (FTC)",
      description: "Led front-end logic and UI flows for robot control interfaces, introduced interface prototypes, and improved the UX for driver stations.",
      Icon: Building,
    },
  ];
