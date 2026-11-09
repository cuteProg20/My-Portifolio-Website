import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCategory } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">Projects</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Work That Demonstrates Value</h1>
          <p class="text-slate-300 text-lg leading-relaxed">A portfolio of projects spanning business analysis, software development, AI automation and data analysis.</p>
        </div>
      </div>
    </section>

    <!-- Filter -->
    <section class="bg-white border-b border-slate-100 py-6 sticky top-16 z-30 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-2">
          <button *ngFor="let filter of filters"
                  (click)="activeFilter.set(filter.value)"
                  class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  [ngClass]="activeFilter() === filter.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700'">
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects()"
               class="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group">
            <!-- Image placeholder -->
            <div class="h-48 navy-surface flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 30px 30px;"></div>
              <div class="relative text-center px-4">
                <div class="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <span class="text-xs font-mono text-teal-400">{{ project.categoryLabel }}</span>
              </div>
              <!-- Status badge -->
              <div class="absolute top-3 right-3">
                <span class="text-xs px-2.5 py-1 rounded-full font-medium"
                      [ngClass]="{
                        'bg-green-500/20 text-green-300 border border-green-500/30': project.status === 'professional' || project.status === 'completed',
                        'bg-amber-500/20 text-amber-300 border border-amber-500/30': project.status === 'in-development',
                        'bg-slate-500/20 text-slate-300 border border-slate-500/30': project.status === 'concept'
                      }">
                  {{ project.statusLabel }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-1">
              <h3 class="font-heading font-bold text-slate-900 text-lg mb-2 leading-snug">{{ project.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{{ project.shortDescription | slice:0:140 }}...</p>

              <div class="flex flex-wrap gap-1.5 mb-5">
                <span *ngFor="let tech of project.technologies.slice(0,4)" class="tag text-xs">{{ tech }}</span>
                <span *ngIf="project.technologies.length > 4" class="text-xs text-slate-400 self-center">+{{ project.technologies.length - 4 }}</span>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                <span class="text-xs text-slate-400 font-mono">{{ project.myRole }}</span>
                <a [routerLink]="['/projects', project.id]"
                   class="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                  View Case Study
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div *ngIf="filteredProjects().length === 0" class="text-center py-16">
          <p class="text-slate-400 text-lg">No projects found in this category.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="section-title mb-4">Have a Project in Mind?</h2>
        <p class="section-subtitle mb-8 mx-auto">I'm available for new projects and collaborations.</p>
        <a routerLink="/contact" class="btn-primary">Let's Talk</a>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  activeFilter = signal<string>('all');

  filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Business Analysis', value: 'business-analysis' },
    { label: 'Software Development', value: 'software-dev' },
    { label: 'AI & Automation', value: 'ai-automation' },
    { label: 'Data Analysis', value: 'data-analysis' },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === f);
  });
}
