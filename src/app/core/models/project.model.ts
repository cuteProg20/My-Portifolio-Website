export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  myRole: string;
  technologies: string[];
  status: ProjectStatus;
  statusLabel: string;
  image: string;
  featured: boolean;
  businessProblem?: string;
  objectives?: string[];
  solution?: string;
  responsibilities?: string[];
  deliverables?: string[];
  outcomes?: string;
  tools?: string[];
  note?: string;
}

export type ProjectCategory = 'business-analysis' | 'software-dev' | 'ai-automation' | 'data-analysis' | 'all';
export type ProjectStatus = 'professional' | 'in-development' | 'completed' | 'concept';
