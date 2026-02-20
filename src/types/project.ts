export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  challenges: string[];
  solutions: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
