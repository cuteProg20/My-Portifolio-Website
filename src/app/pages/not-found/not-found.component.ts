import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen navy-section flex items-center justify-center px-4">
      <div class="text-center max-w-lg">
        <p class="font-mono text-teal-400 text-sm uppercase tracking-widest mb-4">Error 404</p>
        <h1 class="font-heading font-bold text-7xl text-white mb-4">404</h1>
        <h2 class="font-heading font-bold text-2xl text-slate-200 mb-4">Page Not Found</h2>
        <p class="text-slate-400 leading-relaxed mb-8">The page you're looking for doesn't exist or may have been moved.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/" class="btn-primary">Back to Home</a>
          <a routerLink="/contact" class="btn-outline-white">Contact Me</a>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {}
