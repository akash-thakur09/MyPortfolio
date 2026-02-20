import type { Project } from '../types/project';
import projectsData from '../data/projects.json';

export const loadProjects = (): Project[] => {
  return projectsData.projects;
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projectsData.projects.filter(project => project.featured);
};

export const filterProjectsByTech = (projects: Project[], tech: string): Project[] => {
  if (tech === 'all') return projects;
  return projects.filter(project => 
    project.techStack.some(t => t.toLowerCase() === tech.toLowerCase())
  );
};

export const getAllTechnologies = (projects: Project[]): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.techStack.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
