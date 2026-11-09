export interface Service {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  value: string;
  deliverables: string[];
  isPrimary: boolean;
}

export const SERVICES: Service[] = [
  {
    id: 'business-requirements',
    title: 'Business Requirements Analysis',
    category: 'Business Analysis & Requirements Engineering',
    icon: 'file-text',
    description: 'Deep-dive analysis of your business needs to uncover what your systems and processes truly require. I work with stakeholders to surface the right requirements before development begins.',
    value: 'Prevents costly rework by ensuring the right solution is built from the start.',
    deliverables: ['Business Requirements Document (BRD)', 'Stakeholder register', 'Requirements traceability matrix'],
    isPrimary: true,
  },
  {
    id: 'srs-documentation',
    title: 'Software Requirements Specification (SRS)',
    category: 'Business Analysis & Requirements Engineering',
    icon: 'book-open',
    description: 'Complete, structured SRS documentation that gives development teams an unambiguous blueprint for what to build, how it should behave and what constraints apply.',
    value: 'Reduces ambiguity and aligns technical teams with business intent.',
    deliverables: ['Software Requirements Specification document', 'Functional and non-functional requirements', 'System constraints documentation'],
    isPrimary: true,
  },
  {
    id: 'process-modelling',
    title: 'Business Process Modelling',
    category: 'Business Analysis & Requirements Engineering',
    icon: 'git-branch',
    description: 'Visual mapping of your current and future business processes using BPMN and UML, helping teams understand workflows, identify inefficiencies and design improved processes.',
    value: 'Gives teams a shared understanding of how work flows across the organization.',
    deliverables: ['AS-IS process diagrams', 'TO-BE process designs', 'Gap analysis report'],
    isPrimary: true,
  },
  {
    id: 'uat-coordination',
    title: 'User Acceptance Testing (UAT)',
    category: 'Business Analysis & Requirements Engineering',
    icon: 'check-square',
    description: 'Structured UAT planning, test case development and execution coordination to verify that systems meet agreed business requirements before go-live.',
    value: 'Reduces go-live risk and ensures systems work as the business intended.',
    deliverables: ['UAT test plan', 'Test case library', 'Defect reports', 'UAT sign-off documentation'],
    isPrimary: true,
  },
  {
    id: 'gap-analysis',
    title: 'Gap Analysis & Stakeholder Analysis',
    category: 'Business Analysis & Requirements Engineering',
    icon: 'target',
    description: 'Systematic comparison of current-state capabilities against desired future-state requirements, combined with structured stakeholder mapping to ensure all needs are captured.',
    value: 'Identifies what needs to change and whose input matters most.',
    deliverables: ['Gap analysis report', 'Stakeholder map', 'Prioritised requirements list'],
    isPrimary: false,
  },
  {
    id: 'web-development',
    title: 'Web Application Development',
    category: 'Software Development',
    icon: 'monitor',
    description: 'Modern, responsive web applications built with Angular and TypeScript. From business management systems to customer-facing portals, I deliver clean, maintainable code.',
    value: 'Modern web applications that work reliably for your users.',
    deliverables: ['Responsive web application', 'Source code', 'Deployment guide', 'User documentation'],
    isPrimary: true,
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    category: 'Software Development',
    icon: 'server',
    description: 'RESTful API design and backend development to connect your applications, integrate third-party services and power your business logic.',
    value: 'Reliable backend systems that your frontend and integrations can depend on.',
    deliverables: ['REST API', 'API documentation', 'Integration guide'],
    isPrimary: false,
  },
  {
    id: 'database-design',
    title: 'Database Design & PostgreSQL Solutions',
    category: 'Software Development',
    icon: 'database',
    description: 'Structured, scalable database design using PostgreSQL. From schema design to query optimisation, I build data foundations that support your business growth.',
    value: 'A well-designed database saves time, money and performance problems later.',
    deliverables: ['Database schema', 'Entity relationship diagrams', 'Query documentation'],
    isPrimary: false,
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Management Reporting',
    category: 'Data Analysis & Reporting',
    icon: 'bar-chart-2',
    description: 'Turning raw business data into clear, actionable reports and dashboards using Excel and data visualization tools. I help leadership teams make decisions based on evidence.',
    value: 'Clear reporting that turns data into decisions.',
    deliverables: ['Excel reports', 'Management dashboards', 'Data visualization', 'Operational reports'],
    isPrimary: false,
  },
  {
    id: 'technical-project-support',
    title: 'Technical Project Support',
    category: 'Technical Project Support',
    icon: 'users',
    description: 'Embedded BA support for technology projects — from requirements validation and test coordination to stakeholder communication and project documentation.',
    value: 'Keeps technical projects aligned with business objectives throughout delivery.',
    deliverables: ['Requirements validation reports', 'Test documentation', 'Progress reports', 'Stakeholder updates'],
    isPrimary: false,
  },
];

export const SERVICE_CATEGORIES = [
  'Business Analysis & Requirements Engineering',
  'Software Development',
  'Data Analysis & Reporting',
  'Technical Project Support',
];
