import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">Experience</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Professional Experience</h1>
          <p class="text-slate-300 text-lg leading-relaxed">Over 5 years bridging business requirements and technical delivery across fintech, banking, government digital services and software development.</p>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <section class="bg-blue-600 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div *ngFor="let stat of stats" class="text-center">
            <p class="font-heading font-bold text-3xl text-white">{{ stat.value }}</p>
            <p class="text-blue-200 text-sm mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">Work History</span>
          <h2 class="section-title">Work Experience</h2>
        </div>

        <div class="space-y-10">
          <div *ngFor="let job of workExperience; let i = index"
               class="relative pl-8 border-l-2"
               [ngClass]="i === 0 ? 'border-blue-500' : 'border-slate-200'">
            <!-- Dot -->
            <div class="absolute -left-2.5 top-1 w-5 h-5 rounded-full border-4 border-white shadow"
                 [ngClass]="i === 0 ? 'bg-blue-600' : 'bg-slate-300'"></div>

            <div class="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 class="font-heading font-bold text-slate-900 text-lg">{{ job.title }}</h3>
                  <p class="text-blue-600 font-medium">{{ job.company }}</p>
                  <p class="text-slate-400 text-sm">{{ job.location }}</p>
                </div>
                <div class="text-right flex-shrink-0">
                  <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium"
                        [ngClass]="i === 0 ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-100 text-slate-600'">
                    {{ job.period }}
                  </span>
                  <span *ngIf="i === 0" class="block mt-1 text-xs text-green-600 font-medium text-right">● Current Role</span>
                </div>
              </div>

              <ul class="space-y-2 mb-4">
                <li *ngFor="let bullet of job.bullets" class="flex items-start gap-2.5 text-slate-600 text-sm">
                  <svg class="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ bullet }}
                </li>
              </ul>

              <div *ngIf="job.technologies?.length" class="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                <span *ngFor="let t of job.technologies" class="tag text-xs">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">Education</span>
          <h2 class="section-title">Academic Background</h2>
        </div>
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-xl border border-slate-100 shadow-sm p-8">
            <div class="flex items-start gap-5">
              <div class="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-heading font-bold text-xl text-slate-900">Bachelor of Engineering (Information Technology)</h3>
                <p class="text-blue-600 font-medium mt-1">Dar es Salaam Institute of Technology (DIT)</p>
                <p class="text-slate-400 text-sm font-mono mt-1">October 2015 – January 2021</p>
                <p class="text-slate-600 text-sm mt-3 leading-relaxed">Degree in computer engineering encompassing software development, networking, information systems, database design and digital systems. Graduated as a registered-eligible engineer.</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="tag text-xs">Software Engineering</span>
                  <span class="tag text-xs">Database Systems</span>
                  <span class="tag text-xs">Computer Networks</span>
                  <span class="tag text-xs">Information Systems</span>
                  <span class="tag text-xs">Digital Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Credentials -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">Professional Registration</span>
          <h2 class="section-title">Certifications & Credentials</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p class="font-heading font-bold text-slate-900">Registered Engineer</p>
                <p class="text-blue-700 text-sm font-medium">Engineers Registration Board (ERB), Tanzania</p>
                <p class="text-teal-700 font-mono text-sm mt-1">Registration No: GE1119654</p>
                <span class="inline-block mt-2 text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-200">Active Registration</span>
              </div>
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <p class="font-heading font-bold text-slate-900">Continuous Professional Development</p>
                <p class="text-slate-500 text-sm mt-1">Business Analysis, Agile, Digital Transformation</p>
                <p class="text-slate-400 text-xs mt-1">2022 – Present</p>
                <span class="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">Ongoing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 navy-section">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="font-heading font-bold text-3xl text-white mb-4">Ready to Collaborate?</h2>
        <p class="text-slate-300 mb-8">I bring structured thinking, technical depth and a results focus to every engagement.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/contact" class="btn-primary">Get in Touch</a>
          <a href="/documents/Janeth_Bagera_CV.pdf" download class="btn-outline-white">Download CV</a>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '4', label: 'Industries Served' },
    { value: '10+', label: 'Projects Delivered' },
    { value: 'GE1119654', label: 'ERB Reg. Number' },
  ];

  workExperience = [
    {
      title: 'Business Analyst',
      company: 'eGA (e-Government Authority)',
      location: 'Dar es Salaam, Tanzania',
      period: 'July 2026 – Present',
      bullets: [
        'Elicit, document and validate business requirements for government digital service initiatives',
        'Engage stakeholders across government ministries to understand operational needs and translate into functional specifications',
        'Conduct gap analysis between current-state processes and target-state digital solutions',
        'Support User Acceptance Testing (UAT) cycles and change management activities',
        'Produce BRDs, use-case diagrams, process flow maps and stakeholder communication documents',
        'Collaborate with software development teams to ensure requirements traceability and delivery quality',
      ],
      technologies: ['Requirements Engineering', 'BRD', 'UAT', 'BPMN', 'Stakeholder Management', 'Government ICT'],
    },
    {
      title: 'Platform Support Analyst Lead',
      company: 'Paladin Associates (Betika Tanzania)',
      location: 'Dar es Salaam, Tanzania',
      period: 'April 2024 – July 2026',
      bullets: [
        'Led platform support and analysis for a high-volume fintech/betting platform serving thousands of daily active users',
        'Facilitated UAT cycles across web and mobile channels, coordinating between QA, product and development teams',
        'Documented platform requirements, change requests and business rules; maintained requirements traceability',
        'Identified and escalated critical platform issues, reducing customer-facing incidents through root-cause analysis',
        'Produced operational reports and dashboards for senior management using Excel and Power BI',
        'Served as a business liaison between technical teams and non-technical stakeholders',
      ],
      technologies: ['UAT', 'Jira', 'SQL', 'Power BI', 'Excel', 'Fintech', 'Incident Management'],
    },
    {
      title: 'KYC Remediation Officer',
      company: 'NMB Bank PLC',
      location: 'Dar es Salaam, Tanzania',
      period: 'June 2022 – April 2024',
      bullets: [
        'Executed KYC (Know Your Customer) data remediation program across the customer portfolio',
        'Analysed customer data records for completeness, accuracy and compliance with regulatory requirements',
        'Acted as a liaison between branch operations and the ICT/core banking team for data quality issues',
        'Produced data quality reports and tracked remediation progress against compliance targets',
        'Supported process improvements to reduce data entry errors and improve customer data integrity',
      ],
      technologies: ['Data Analysis', 'Excel', 'Core Banking Systems', 'KYC Compliance', 'Regulatory Reporting'],
    },
    {
      title: 'Software Requirements Engineer & Developer',
      company: 'Omuha Company',
      location: 'Dar es Salaam, Tanzania',
      period: 'June 2020 – March 2022',
      bullets: [
        'Conducted requirements elicitation through stakeholder interviews, workshops and document analysis',
        'Authored Software Requirements Specifications (SRS), use cases and system design documents',
        'Designed database schemas and software architectures for client-facing applications',
        'Developed web applications using PHP, Python (Django/Flask) and JavaScript',
        'Performed system testing, bug tracking and provided post-deployment support to clients',
        'Managed small project teams during the development lifecycle, from inception to delivery',
      ],
      technologies: ['PHP', 'Python', 'JavaScript', 'MySQL', 'SRS', 'UML', 'Django', 'Flask'],
    },
    {
      title: 'Junior Network Engineer',
      company: 'Softnet Technologies',
      location: 'Dar es Salaam, Tanzania',
      period: 'June 2020 – March 2021',
      bullets: [
        'Supported ISE (Identity Services Engine) rollout project for a major bank across multiple branch sites',
        'Configured network infrastructure, access control policies and security parameters',
        'Assisted senior engineers with network documentation and site survey activities',
      ],
      technologies: ['Cisco ISE', 'Network Configuration', 'Access Control', 'Network Security'],
    },
  ];
}
