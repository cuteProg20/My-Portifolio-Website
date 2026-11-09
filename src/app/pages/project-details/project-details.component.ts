import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <ng-container *ngIf="project; else notFound">
      <!-- Hero -->
      <section class="navy-section py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a routerLink="/projects" class="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm mb-8 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to All Projects
          </a>
          <div class="max-w-4xl">
            <span class="text-xs font-mono text-teal-400 uppercase tracking-widest mb-3 block">{{ project.categoryLabel }}</span>
            <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-4">{{ project.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 mt-4">
              <span class="text-sm text-slate-300 font-mono">Role: {{ project.myRole }}</span>
              <span class="text-sm px-3 py-1 rounded-full border"
                    [ngClass]="{
                      'border-green-500/40 text-green-400': project.status === 'professional' || project.status === 'completed',
                      'border-amber-500/40 text-amber-400': project.status === 'in-development',
                      'border-slate-500/40 text-slate-400': project.status === 'concept'
                    }">
                {{ project.statusLabel }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <!-- Overview -->
          <div>
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Project Overview</h2>
            <p class="text-slate-600 leading-relaxed">{{ project.fullDescription }}</p>
            <div *ngIf="project.note" class="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200 flex gap-3">
              <svg class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p class="text-amber-800 text-sm">{{ project.note }}</p>
            </div>
          </div>

          <!-- Business Problem -->
          <div *ngIf="project.businessProblem">
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Business Problem</h2>
            <p class="text-slate-600 leading-relaxed">{{ project.businessProblem }}</p>
          </div>

          <!-- Objectives -->
          <div *ngIf="project.objectives?.length">
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Project Objectives</h2>
            <ul class="space-y-3">
              <li *ngFor="let obj of project.objectives" class="flex items-start gap-3 text-slate-600">
                <div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                {{ obj }}
              </li>
            </ul>
          </div>

          <!-- Solution -->
          <div *ngIf="project.solution">
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Proposed Solution</h2>
            <p class="text-slate-600 leading-relaxed">{{ project.solution }}</p>
          </div>

          <!-- Two columns: Role & Deliverables -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngIf="project.responsibilities?.length">
              <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">My Role & Responsibilities</h2>
              <ul class="space-y-2">
                <li *ngFor="let r of project.responsibilities" class="flex items-start gap-2.5 text-slate-600 text-sm">
                  <svg class="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ r }}
                </li>
              </ul>
            </div>
            <div *ngIf="project.deliverables?.length">
              <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Deliverables</h2>
              <ul class="space-y-2">
                <li *ngFor="let d of project.deliverables" class="flex items-start gap-2.5 text-slate-600 text-sm">
                  <svg class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  {{ d }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Tools -->
          <div *ngIf="project.technologies?.length">
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Tools & Technologies</h2>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tech of project.technologies" class="tag">{{ tech }}</span>
            </div>
          </div>

          <!-- Outcomes -->
          <div *ngIf="project.outcomes">
            <h2 class="font-heading font-bold text-2xl text-slate-900 mb-4 pb-3 border-b border-slate-100">Outcomes & Impact</h2>
            <p class="text-slate-600 leading-relaxed">{{ project.outcomes }}</p>
          </div>

        </div>
      </section>

      <!-- Related & CTA -->
      <section class="py-16 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="section-title mb-8 text-center">Related Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div *ngFor="let rel of relatedProjects" class="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <span class="text-xs font-mono text-teal-600">{{ rel.categoryLabel }}</span>
              <h3 class="font-heading font-semibold text-slate-900 mt-2 mb-2 text-sm">{{ rel.title }}</h3>
              <a [routerLink]="['/projects', rel.id]" class="text-blue-600 text-xs font-medium hover:underline">View Case Study →</a>
            </div>
          </div>

          <div class="text-center">
            <h3 class="font-heading font-bold text-2xl text-slate-900 mb-4">Interested in Working Together?</h3>
            <p class="text-slate-500 mb-6">Let's discuss how I can help with your project.</p>
            <div class="flex flex-wrap gap-4 justify-center">
              <a routerLink="/contact" class="btn-primary">Start a Conversation</a>
              <a routerLink="/projects" class="btn-secondary">View All Projects</a>
            </div>
          </div>
        </div>
      </section>
    </ng-container>

    <ng-template #notFound>
      <div class="min-h-screen flex items-center justify-center bg-slate-50">
        <div class="text-center">
          <p class="text-6xl font-heading font-bold text-slate-200 mb-4">404</p>
          <h2 class="text-2xl font-heading font-bold text-slate-900 mb-2">Project Not Found</h2>
          <p class="text-slate-500 mb-6">This project doesn't exist or may have been removed.</p>
          <a routerLink="/projects" class="btn-primary">Back to Projects</a>
        </div>
      </div>
    </ng-template>
  `,
})
export class ProjectDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  project: Project | undefined;
  relatedProjects: Project[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.project = PROJECTS.find(p => p.id === id);
      if (this.project) {
        this.relatedProjects = PROJECTS
          .filter(p => p.id !== id && p.category === this.project!.category)
          .slice(0, 3);
        if (this.relatedProjects.length < 3) {
          const others = PROJECTS.filter(p => p.id !== id && !this.relatedProjects.find(r => r.id === p.id));
          this.relatedProjects = [...this.relatedProjects, ...others].slice(0, 3);
        }
      }
    });
  }
}
