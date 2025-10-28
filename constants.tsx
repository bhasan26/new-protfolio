import React from 'react';
import type { Project, SkillCategory, LeadershipItem } from './types';

// Data from Resume

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Tech Stack',
    skills: ['Java', 'Python', 'C++', 'C#', 'SQL', 'JavaScript', 'TypeScript', 'Swift', 'HTML/CSS', '.NET', 'React', 'Node', 'Angular', 'Flask', 'Ignition', 'V-sphere'],
  },
  {
    title: 'ML / AI',
    skills: ['LangChain', 'CLIP', 'RAG', 'OpenAI', 'OpenCV', 'TensorFlow', 'Pytorch', 'XGBoost', 'Auto-encoder', 'NumPy', 'Pandas', 'Scikit-Learn', 'MatPlotlib'],
  },
  {
    title: 'Robotics and Embedded Systems',
    skills: ['ROS', 'SLAM', 'AMCL', 'LiDAR', 'Navigation', 'Rviz', 'Gazebo', 'Jetson Nano', 'STM32', 'OpenMV', 'FLIR'],
  },
  {
    title: 'Tools and Platforms',
    skills: ['Git', 'CI/CD', 'Docker', 'Jupyter', 'Linux', 'Firebase', 'GitHub Actions', 'Figma', 'MongoDB', 'MySQL', 'Vercel', 'Netlify', 'AWS', 'Azure'],
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Autext - Personal Project',
    description: 'A full stack web-based app that converts any text into audio, allowing users to create and manage their audiobook library.',
    details: [
        "Implemented a full stack web application converting text to audio, using Java, HTML, CSS for Frontend, Node.js with Express for the backend, and the Web Speech API for real-time conversion."
    ],
    tags: ['Java', 'HTML/CSS', 'Node.js', 'Express', 'Web Speech API'],
    imageUrl: 'https://picsum.photos/seed/autext/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Emergency Room Simulator - Data Structures Final Project',
    description: 'Simulated ER workflows to triage patients by severity.',
     details: [
        "Simulated ER workflow by leveraging priority queues for patient triage and linked list/arrays to manage patient records and resource availability, designed real time metrics for wait times and resources utilization for doctors and nurses."
    ],
    tags: ['Data Structures', 'Algorithms', 'Java', 'Priority Queue'],
    imageUrl: 'https://picsum.photos/seed/ersim/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'AI Resume Pro - Personal Project',
    description: 'A full stack web app that rates a resume against a job description.',
    details: [
        "Used Python, Java, React, and OpenAI API, enabling users to upload resumes and job description for AI-powered rating and comprehensive report generation."
    ],
    tags: ['Python', 'Java', 'React', 'OpenAI API', 'Full Stack'],
    imageUrl: 'https://picsum.photos/seed/resumepro/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
    {
        title: 'President',
        organization: 'WhitCode | Whitworth University',
        dates: 'Fall 2024 - Present',
        description: ['Led workshops on Machine Learning and product building.']
    },
    {
        title: 'Campus Lead',
        organization: 'Google Developer Group on Campus | Whitworth University',
        dates: 'Fall 2025 - Present',
        description: ['Led workshops on Google technologies for ML, Deep Learning, and AI; organized hackathons and expanded developer community.']
    }
];
