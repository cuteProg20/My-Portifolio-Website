import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { SERVICES } from '../../data/services.data';
import { SKILL_CATEGORIES } from '../../data/skills.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- HERO -->
    <section class="navy-section relative overflow-hidden min-h-[92vh] flex items-center -mt-16">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      <!-- Accent orbs -->
      <div class="absolute top-20 right-10 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-10 w-72 h-72 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div>
            <!-- Labels -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span *ngFor="let label of labels" class="text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-teal-500/30 text-teal-400 bg-teal-500/10">
                {{ label }}
              </span>
            </div>

            <h1 class="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Bridging Business Needs<br>
              <span class="text-blue-400">with Technology</span><br>
              Solutions.
            </h1>

            <p class="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              I help businesses and organizations translate operational challenges and ideas into effective digital solutions through business analysis, software development and technology-driven innovation.
            </p>

            <!-- Location -->
            <div class="flex items-center gap-2 text-slate-400 text-sm mb-10">
              <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              </svg>
              Tanzania &nbsp;·&nbsp; Open to International Collaboration
            </div>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <a routerLink="/projects" class="btn-primary">
                Explore My Projects
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a routerLink="/contact" class="btn-outline-white">
                Let's Work Together
              </a>
              <a href="/documents/Janeth_Bagera_BA_SA_CV.docx" download
                 class="inline-flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white font-medium transition-colors text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <!-- Right: Profile card -->
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-32 h-32 rounded-full border-2 border-blue-500/40 mx-auto mb-4 overflow-hidden">
                    <img src="assets/janeth-profile.png" alt="Janeth Bagera" class="w-full h-full object-cover object-top">
                  </div>
                  <p class="text-white font-heading font-semibold">Janeth Bagera</p>
                  <p class="text-slate-400 text-sm">Business Analyst · Developer</p>
                  <p class="text-teal-400 text-xs mt-1 font-mono">ERB Reg. GE1119654</p>
                </div>
              </div>
              <!-- Floating tags -->
              <div class="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-3 py-2">
                <p class="text-xs font-mono font-medium text-blue-700">🇹🇿 Tanzania</p>
              </div>
              <div class="absolute -bottom-4 -left-4 bg-blue-600 rounded-xl shadow-lg px-3 py-2">
                <p class="text-xs font-medium text-white">Open to Remote Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO STRIP -->
    <section class="bg-blue-600 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
          <div class="p-4">
            <div class="font-heading font-bold text-2xl mb-1">6+</div>
            <div class="text-blue-100 text-sm">Years of Experience</div>
          </div>
          <div class="p-4 md:border-x border-blue-500">
            <div class="font-heading font-bold text-2xl mb-1">5+</div>
            <div class="text-blue-100 text-sm">Projects Delivered</div>
          </div>
          <div class="p-4">
            <div class="font-heading font-bold text-2xl mb-1">BA + Dev</div>
            <div class="text-blue-100 text-sm">Bridging Both Worlds</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES HIGHLIGHTS -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">What I Do</span>
          <h2 class="section-title mb-4">Services I Offer</h2>
          <p class="section-subtitle mx-auto">From business requirements to working software — I support the full journey.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let svc of featuredServices" class="card group hover:border-blue-200">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getIcon(svc.icon)"/>
              </svg>
            </div>
            <h3 class="font-heading font-semibold text-slate-900 mb-2 text-sm">{{ svc.title }}</h3>
            <p class="text-slate-500 text-xs leading-relaxed">{{ svc.description | slice:0:120 }}...</p>
          </div>
        </div>
        <div class="text-center mt-10">
          <a routerLink="/services" class="btn-secondary">View All Services</a>
        </div>
      </div>
    </section>

    <!-- FEATURED PROJECTS -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">My Work</span>
          <h2 class="section-title mb-4">Featured Projects</h2>
          <p class="section-subtitle mx-auto">A selection of projects that demonstrate my approach to solving real business problems.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let project of featuredProjects" class="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div class="h-48 navy-surface flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 30px 30px;"></div>
              <div class="relative text-center">
                <div class="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span class="text-xs font-mono text-teal-400">{{ project.categoryLabel }}</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-heading font-bold text-slate-900 text-lg leading-tight">{{ project.title }}</h3>
                <span class="text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0"
                      [ngClass]="project.status === 'professional' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'">
                  {{ project.statusLabel }}
                </span>
              </div>
              <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ project.shortDescription | slice:0:150 }}...</p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span *ngFor="let tech of project.technologies.slice(0,4)" class="tag text-xs">{{ tech }}</span>
              </div>
              <a [routerLink]="['/projects', project.id]"
                 class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                View Case Study
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <a routerLink="/projects" class="btn-secondary">View All Projects</a>
        </div>
      </div>
    </section>

    <!-- APPROACH -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">My Approach</span>
          <h2 class="section-title mb-4">How I Work</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div *ngFor="let step of approach; let i = index" class="text-center">
            <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-heading font-bold">{{ i + 1 }}</span>
            </div>
            <div class="hidden md:block absolute w-full h-0.5 bg-blue-100 top-6 left-1/2 -z-10" *ngIf="i < approach.length - 1"></div>
            <h3 class="font-heading font-semibold text-slate-900 mb-2">{{ step.title }}</h3>
            <p class="text-slate-500 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <span class="section-label">Technology</span>
          <h2 class="section-title">Tech Stack</h2>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <span *ngFor="let tech of techStack"
                class="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-slate-200 text-slate-700 text-sm font-mono font-medium hover:border-blue-300 hover:text-blue-700 transition-colors">
            {{ tech }}
          </span>
        </div>
        <div class="text-center mt-10">
          <a routerLink="/skills" class="btn-secondary">View Full Skills Profile</a>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE PREVIEW -->
    <section class="py-20 navy-section">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="section-label text-teal-400">Experience</span>
            <h2 class="font-heading font-bold text-3xl md:text-4xl text-white mb-6">Built Through Real-World Projects</h2>
            <p class="text-slate-300 leading-relaxed mb-8">
              My experience spans fintech, banking, education technology and enterprise systems — always working at the intersection of business requirements and technical delivery.
            </p>
            <a routerLink="/experience" class="btn-outline-white">View Full Experience</a>
          </div>
          <div class="space-y-4">
            <div *ngFor="let exp of experiencePreview" class="navy-surface rounded-xl p-5 border border-slate-700">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-heading font-semibold text-white text-sm">{{ exp.role }}</p>
                  <p class="text-blue-400 text-xs font-mono">{{ exp.org }}</p>
                  <p class="text-slate-500 text-xs mt-0.5">{{ exp.period }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA -->
    <section class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="section-label">Get in Touch</span>
        <h2 class="section-title mb-4">Ready to Work Together?</h2>
        <p class="section-subtitle mb-10 mx-auto">
          Have a business challenge or project that needs technical expertise? Let's discuss how I can help turn your requirements into practical solutions.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/contact" class="btn-primary">Start a Conversation</a>
          <a href="mailto:bagerajanethjackson@gmail.com" class="btn-secondary">Send an Email</a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  labels = ['Business Analysis', 'Software Development', 'Digital Transformation'];

  featuredServices = SERVICES.filter(s => s.isPrimary).slice(0, 4);
  featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

  approach = [
    { title: 'Understand', description: 'Deep discovery of business problems, goals and stakeholder needs.' },
    { title: 'Define', description: 'Clear requirements, process maps and solution specifications.' },
    { title: 'Build', description: 'Technical development aligned with documented business logic.' },
    { title: 'Validate', description: 'UAT, testing and review to confirm the solution delivers value.' },
  ];

  techStack = ['Angular', 'TypeScript', 'PHP / Laravel', 'Python / Flask', 'PostgreSQL', 'REST APIs', 'BPMN', 'Figma', 'n8n', 'Docker', 'GitHub', 'Azure AD'];

  experiencePreview = [
    { role: 'Business Analyst', org: 'eGA', period: 'July 2026 – Present' },
    { role: 'Platform Support Analyst Lead', org: 'Paladin Associates (Betika Tanzania)', period: 'April 2024 – July 2026' },
    { role: 'KYC Remediation Officer', org: 'NMB Bank PLC', period: 'June 2022 – April 2024' },
    { role: 'Software Requirements Engineer', org: 'Omuha Company', period: 'June 2020 – March 2022' },
  ];

  getIcon(name: string): string {
    const icons: Record<string, string> = {
      'file-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'book-open': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      'git-branch': 'M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zm-12 6a3 3 0 100 6 3 3 0 000-6zm0-6a9 9 0 019 9',
      'check-square': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'target': 'M12 2a10 10 0 100 20A10 10 0 0012 2zm0 6a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z',
      'monitor': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      'server': 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
      'database': 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      'bar-chart-2': 'M18 20V10M12 20V4M6 20v-6',
      'users': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    };
    return icons[name] || icons['file-text'];
  }
}
