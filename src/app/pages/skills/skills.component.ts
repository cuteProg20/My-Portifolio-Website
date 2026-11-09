import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SKILL_CATEGORIES } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">Skills</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Technical & Professional Skills</h1>
          <p class="text-slate-300 text-lg leading-relaxed">A comprehensive overview of the tools, methods and technologies I work with across business analysis, software development, data analysis and project support.</p>
        </div>
      </div>
    </section>

    <!-- Skills Grid -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div *ngFor="let cat of skillCategories">
          <div class="mb-8">
            <span class="section-label">{{ cat.label }}</span>
            <h2 class="section-title">{{ cat.title }}</h2>
            <p class="section-subtitle max-w-2xl">{{ cat.description }}</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div *ngFor="let skill of cat.skills"
                 class="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 group">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                   [ngClass]="getIconBg(cat.color)">
                <svg class="w-5 h-5" [ngClass]="getIconColor(cat.color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getIcon(skill.icon ?? '')"/>
                </svg>
              </div>
              <div>
                <p class="font-heading font-semibold text-slate-900 text-sm">{{ skill.name }}</p>
                <p class="text-slate-500 text-xs mt-1 leading-relaxed">{{ skill.description }}</p>
                <div *ngIf="skill.tools?.length" class="flex flex-wrap gap-1 mt-2">
                  <span *ngFor="let t of skill.tools" class="text-xs px-2 py-0.5 bg-white rounded border border-slate-200 text-slate-500 font-mono">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="section-label">Credentials</span>
          <h2 class="section-title">Certifications & Professional Registration</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div *ngFor="let cert of certifications"
               class="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                   [ngClass]="cert.highlight ? 'bg-blue-50' : 'bg-slate-50'">
                <svg class="w-5 h-5" [ngClass]="cert.highlight ? 'text-blue-600' : 'text-slate-500'"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <p class="font-heading font-semibold text-slate-900 text-sm">{{ cert.name }}</p>
                <p class="text-blue-600 text-xs font-mono mt-0.5">{{ cert.issuer }}</p>
                <p class="text-slate-400 text-xs mt-1">{{ cert.date }}</p>
                <p *ngIf="cert.regNumber" class="text-teal-600 text-xs font-mono mt-1">Reg: {{ cert.regNumber }}</p>
                <span *ngIf="cert.status === 'active'" class="inline-block mt-2 text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded-full border border-green-200">Active</span>
                <span *ngIf="cert.status === 'completed'" class="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 navy-section">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="font-heading font-bold text-3xl text-white mb-4">Put These Skills to Work</h2>
        <p class="text-slate-300 mb-8">I'm available for projects that need business analysis, software development, or both.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/contact" class="btn-primary">Start a Project</a>
          <a routerLink="/services" class="btn-outline-white">View Services</a>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillCategories = SKILL_CATEGORIES;

  certifications = [
    {
      name: 'Bachelor of Engineering (Information Technology)',
      issuer: 'Dar es Salaam Institute of Technology',
      date: 'January 2021',
      regNumber: null,
      status: 'completed',
      highlight: false,
    },
    {
      name: 'Registered Engineer',
      issuer: 'Engineers Registration Board (ERB) Tanzania',
      date: 'Active Registration',
      regNumber: 'GE1119654',
      status: 'active',
      highlight: true,
    },
    {
      name: 'Business Analysis Professional Development',
      issuer: 'Continuous Learning',
      date: '2022 – Present',
      regNumber: null,
      status: 'active',
      highlight: false,
    },
  ];

  getIconBg(color: string): string {
    const map: Record<string, string> = {
      blue: 'bg-blue-50',
      teal: 'bg-teal-50',
      purple: 'bg-purple-50',
      amber: 'bg-amber-50',
    };
    return map[color] || 'bg-slate-50';
  }

  getIconColor(color: string): string {
    const map: Record<string, string> = {
      blue: 'text-blue-600',
      teal: 'text-teal-600',
      purple: 'text-purple-600',
      amber: 'text-amber-600',
    };
    return map[color] || 'text-slate-600';
  }

  getIcon(name: string): string {
    const icons: Record<string, string> = {
      'file-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      'users': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      'git-merge': 'M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zm-12 6a3 3 0 100 6 3 3 0 000-6zm12-6v3M6 15c.26 0 .51.03.75.07M6 15c2.5 0 4.5 1.07 6 3',
      'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'layout': 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      'code': 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      'server': 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
      'database': 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      'bar-chart': 'M18 20V10M12 20V4M6 20v-6',
      'pie-chart': 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      'trending-up': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      'filter': 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
      'cpu': 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
      'globe': 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      'terminal': 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      'tool': 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
      'monitor': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      'activity': 'M22 12h-4l-3 9L9 3l-3 9H2',
    };
    return icons[name] || icons['check-circle'];
  }
}
