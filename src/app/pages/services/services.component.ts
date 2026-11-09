import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SERVICES, SERVICE_CATEGORIES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">Services</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">What I Can Do for You</h1>
          <p class="text-slate-300 text-lg leading-relaxed">From requirements to running software — I provide end-to-end support across business analysis, software development and data reporting.</p>
        </div>
      </div>
    </section>

    <!-- Services by Category -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div *ngFor="let category of categories">
          <div class="mb-10">
            <span class="section-label">{{ getCategoryLabel(category) }}</span>
            <h2 class="section-title">{{ category }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let service of getByCategory(category)"
                 class="card hover:border-blue-200 group flex flex-col"
                 [class.ring-2]="service.isPrimary"
                 [class.ring-blue-100]="service.isPrimary">
              <div class="flex items-start justify-between mb-4">
                <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="getIcon(service.icon)"/>
                  </svg>
                </div>
                <span *ngIf="service.isPrimary" class="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-mono">Core Service</span>
              </div>
              <h3 class="font-heading font-bold text-slate-900 mb-3">{{ service.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{{ service.description }}</p>

              <div class="border-t border-slate-100 pt-4 mt-auto">
                <p class="text-xs font-mono text-teal-600 uppercase tracking-wider mb-2">Business Value</p>
                <p class="text-slate-600 text-sm italic mb-4">{{ service.value }}</p>

                <p class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Deliverables</p>
                <ul class="space-y-1 mb-5">
                  <li *ngFor="let d of service.deliverables" class="flex items-start gap-2 text-xs text-slate-500">
                    <svg class="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    {{ d }}
                  </li>
                </ul>
                <a routerLink="/contact" [queryParams]="{service: service.id}"
                   class="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1 transition-colors">
                  Enquire about this service
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-blue-600">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="font-heading font-bold text-3xl text-white mb-4">Not Sure Which Service You Need?</h2>
        <p class="text-blue-100 mb-8">Let's talk. I'll help you identify the right approach for your specific challenge.</p>
        <a routerLink="/contact" class="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
          Start a Conversation
        </a>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  categories = SERVICE_CATEGORIES;

  getByCategory(cat: string) {
    return SERVICES.filter(s => s.category === cat);
  }

  getCategoryLabel(cat: string): string {
    const labels: Record<string, string> = {
      'Business Analysis & Requirements Engineering': 'Primary Specialisation',
      'Software Development': 'Technical Services',
      'Data Analysis & Reporting': 'Supporting Capability',
      'Technical Project Support': 'Supporting Capability',
    };
    return labels[cat] || '';
  }

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
