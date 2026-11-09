export interface SkillItem {
  name: string;
  description?: string;
  icon?: string;
  tools?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    label: 'Core Competency',
    description: 'Structured approaches to understanding, documenting and communicating business needs and solutions.',
    icon: 'briefcase',
    color: 'blue',
    skills: [
      { name: 'Requirements Engineering', description: 'Eliciting and documenting functional and non-functional requirements', icon: 'file-text' },
      { name: 'BRD & SRS Documentation', description: 'Business Requirements Documents and Software Requirements Specifications', icon: 'file-text' },
      { name: 'Business Process Modelling (BPMN)', description: 'Mapping AS-IS and TO-BE processes using BPMN notation', icon: 'git-merge' },
      { name: 'UML & Use Case Modelling', description: 'Use case diagrams and sequence diagrams', icon: 'layout' },
      { name: 'Stakeholder Management', description: 'Facilitating workshops, interviews and stakeholder alignment', icon: 'users' },
      { name: 'User Acceptance Testing (UAT)', description: 'Test planning, test case development and UAT coordination', icon: 'check-circle' },
      { name: 'Gap Analysis', description: 'Current-state vs future-state analysis', icon: 'trending-up' },
      { name: 'Functional Requirements (FRD)', description: 'Detailed functional specifications for development teams', icon: 'file-text' },
      { name: 'Business Process Analysis', description: 'Identifying inefficiencies and improvement opportunities', icon: 'activity' },
      { name: 'Requirements Elicitation', description: 'Interviews, workshops, surveys and observation techniques', icon: 'users' },
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    label: 'Technical Capability',
    description: 'Full-stack development skills spanning frontend frameworks, backend APIs and database design.',
    icon: 'code',
    color: 'teal',
    skills: [
      { name: 'TypeScript', description: 'Strongly-typed JavaScript for scalable applications', icon: 'code', tools: ['Angular', 'Node.js'] },
      { name: 'Angular', description: 'Full-featured SPA framework for enterprise web applications', icon: 'monitor', tools: ['Angular 17+', 'Signals', 'Standalone'] },
      { name: 'JavaScript', description: 'Core web development and DOM manipulation', icon: 'code' },
      { name: 'PHP (Laravel / CodeIgniter)', description: 'Server-side web application development', icon: 'server', tools: ['Laravel', 'CodeIgniter'] },
      { name: 'Python (Flask)', description: 'Lightweight backend APIs and automation scripts', icon: 'terminal', tools: ['Flask', 'Django'] },
      { name: 'PostgreSQL', description: 'Relational database design, queries and administration', icon: 'database' },
      { name: 'REST API Development', description: 'Designing and consuming RESTful APIs', icon: 'globe' },
      { name: 'Web Application Development', description: 'Responsive, accessible web apps', icon: 'monitor' },
      { name: 'Database Design', description: 'Schema design, normalisation and ER diagrams', icon: 'database' },
    ],
  },
  {
    id: 'data-reporting',
    title: 'Data & Reporting',
    label: 'Supporting Capability',
    description: 'Turning raw data into actionable insights through analysis, visualisation and reporting.',
    icon: 'bar-chart',
    color: 'purple',
    skills: [
      { name: 'Microsoft Excel', description: 'Advanced formulas, pivot tables, data analysis', icon: 'bar-chart', tools: ['Excel', 'Power Query'] },
      { name: 'Data Analysis', description: 'Identifying trends and insights from business data', icon: 'trending-up' },
      { name: 'Data Visualization', description: 'Charts, dashboards and visual reporting', icon: 'pie-chart' },
      { name: 'Management Reporting', description: 'Executive and operational reports', icon: 'file-text' },
      { name: 'Dashboard Development', description: 'Operational and management dashboards', icon: 'monitor' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    label: 'Technology Stack',
    description: 'Proficiency with the platforms, tools and environments used in modern digital project delivery.',
    icon: 'tool',
    color: 'amber',
    skills: [
      { name: 'GitHub', description: 'Version control, code review and project management', icon: 'git-merge' },
      { name: 'Jira', description: 'Agile project tracking and issue management', icon: 'check-circle' },
      { name: 'Figma / Adobe XD', description: 'UI/UX wireframing and prototyping', icon: 'layout' },
      { name: 'n8n', description: 'Workflow automation and AI agent development', icon: 'activity' },
      { name: 'Docker', description: 'Containerisation for development and deployment', icon: 'server' },
      { name: 'Microsoft Azure (AD)', description: 'Active Directory and cloud identity management', icon: 'globe' },
      { name: 'Linux Server Administration', description: 'Server management and configuration', icon: 'terminal' },
      { name: 'Cisco ISE / Networking', description: 'Network infrastructure and security', icon: 'cpu' },
      { name: 'Microsoft Office Suite', description: 'Word, Excel, PowerPoint, Teams', icon: 'monitor' },
      { name: 'Supabase', description: 'Open-source Firebase alternative with PostgreSQL', icon: 'database' },
    ],
  },
];
