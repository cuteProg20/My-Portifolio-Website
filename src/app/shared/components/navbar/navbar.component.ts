import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav [class]="navClass()" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-18">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 rounded-lg overflow-hidden border border-blue-200/40">
              <img src="assets/janeth-profile.png" alt="JB" class="w-full h-full object-cover object-top">
            </div>
            <div class="hidden sm:block">
              <span class="font-heading font-bold text-base" [class]="scrolled() ? 'text-slate-900' : 'text-white'">Janeth Bagera</span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-6">
            <a *ngFor="let link of navLinks" [routerLink]="link.path" routerLinkActive="text-blue-600 font-semibold"
               [class]="scrolled() ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'"
               class="text-sm font-medium transition-colors duration-200">
              {{ link.label }}
            </a>
            <a routerLink="/contact"
               class="btn-primary text-sm py-2 px-4">
              Let's Work Together
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobile()" class="md:hidden p-2 rounded-lg" [class]="scrolled() ? 'text-slate-700' : 'text-white'" aria-label="Toggle menu">
            <svg *ngIf="!mobileOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg *ngIf="mobileOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="mobileOpen()" class="md:hidden bg-white border-t border-slate-100 py-4 shadow-lg rounded-b-xl">
          <div class="flex flex-col gap-1 px-2">
            <a *ngFor="let link of navLinks" [routerLink]="link.path" routerLinkActive="text-blue-600 bg-blue-50 font-semibold"
               (click)="mobileOpen.set(false)"
               class="px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-600 font-medium transition-colors text-sm">
              {{ link.label }}
            </a>
            <a routerLink="/contact" (click)="mobileOpen.set(false)"
               class="btn-primary text-sm py-2.5 mt-2 justify-center">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-16"></div>
  `,
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  navClass() {
    return this.scrolled()
      ? 'bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm'
      : 'bg-transparent';
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }
}
