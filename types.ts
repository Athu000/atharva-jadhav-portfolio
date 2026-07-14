import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

export interface Achievement {
  id: number;
  title: string;
  issuer: string;
  icon: string; // Using string for icon name or url placeholder
  details?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Language' | 'AI/ML' | 'Cloud' | 'Web' | 'IT';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  fullDetails?: string;
  challenges?: string[];
  outcomes?: string[];
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  details: string;
  score?: string;
}