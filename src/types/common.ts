export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  type: 'work' | 'education' | 'certification';
}

export interface GitHubActivity {
  id: string;
  type: string;
  repo: string;
  message: string;
  timestamp: Date;
  url: string;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}
