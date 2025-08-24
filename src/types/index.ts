// Common types used throughout the application

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  image: string;
  slug: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  id?: string;
}

// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}
