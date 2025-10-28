// Fix: Import `ReactElement` and use it to type component props instead of relying on the global `JSX` namespace.
import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  details?: string[];
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
}

export interface LeadershipItem {
    title: string;
    organization: string;
    dates: string;
    description: string[];
}
