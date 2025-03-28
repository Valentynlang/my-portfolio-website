import { ReactNode } from 'react';

export interface CommonProps {
  children?: ReactNode;
  className?: string;
}

export interface SlideData {
  id: number;
  title: string;
  description?: string;
  image?: string;
  icon?: ReactNode;
  path?: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  position: string;
  avatar?: string;
  text: string;
}

export interface WorkData {
  id: number;
  title: string;
  category: string;
  image: string;
  details?: WorkDetails[];
}

export interface WorkDetails {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export interface SocialLink {
  id: number;
  url: string;
  icon: ReactNode;
} 