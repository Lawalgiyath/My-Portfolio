import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  Icon: LucideIcon;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  Icon: LucideIcon;
}
