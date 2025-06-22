import type { ElementType } from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  data_ai_hint: string;
}

export interface Skill {
  title: string;
  items: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  Icon: ElementType;
}
