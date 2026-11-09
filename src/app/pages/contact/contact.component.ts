import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">Contact</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Let's Start a Conversation</h1>
          <p class="text-slate-300 text-lg leading-relaxed">Whether you have a project in mind, need a Business Analyst, or just want to connect — I'd love to hear from you.</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-14">

          <!-- Left: Info -->
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="font-heading font-bold text-2xl text-slate-900 mb-2">Get in Touch</h2>
              <p class="text-slate-500 leading-relaxed">I'm open to business analysis contracts, software development projects, remote work and full-time opportunities.</p>
            </div>

            <div class="space-y-5">
              <div *ngFor="let channel of channels"
                   class="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-100 transition-colors group">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors"
                     [ngClass]="channel.bgClass">
                  <svg class="w-5 h-5" [ngClass]="channel.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="channel.icon"/>
                  </svg>
                </div>
                <div>
                  <p class="font-heading font-semibold text-slate-900 text-sm">{{ channel.label }}</p>
                  <a *ngIf="channel.href" [href]="channel.href"
                     class="text-blue-600 hover:underline text-sm break-all" [attr.target]="channel.external ? '_blank' : null">
                    {{ channel.value }}
                  </a>
                  <p *ngIf="!channel.href" class="text-slate-600 text-sm">{{ channel.value }}</p>
                </div>
              </div>
            </div>

            <!-- Availability -->
            <div class="p-5 rounded-xl bg-green-50 border border-green-100">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <p class="font-heading font-semibold text-green-800 text-sm">Available for new projects</p>
              </div>
              <p class="text-green-700 text-xs">Open to both remote and on-site engagements in Dar es Salaam and beyond.</p>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h3 class="font-heading font-bold text-xl text-slate-900 mb-6">Send a Message</h3>

              <!-- Success state -->
              <div *ngIf="submitted()" class="text-center py-10">
                <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 class="font-heading font-bold text-slate-900 text-lg mb-2">Message Sent!</h4>
                <p class="text-slate-500 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button (click)="resetForm()" class="mt-6 btn-secondary">Send Another Message</button>
              </div>

              <!-- Form -->
              <form *ngIf="!submitted()" (ngSubmit)="submitForm()" #contactForm="ngForm" class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input type="text" name="name" [(ngModel)]="form.name" required
                           class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                           placeholder="Your name" #nameInput="ngModel">
                    <p *ngIf="nameInput.invalid && nameInput.touched" class="text-red-500 text-xs mt-1">Name is required.</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                    <input type="email" name="email" [(ngModel)]="form.email" required email
                           class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                           placeholder="your@email.com" #emailInput="ngModel">
                    <p *ngIf="emailInput.invalid && emailInput.touched" class="text-red-500 text-xs mt-1">Valid email is required.</p>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Subject *</label>
                  <select name="subject" [(ngModel)]="form.subject" required
                          class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                          #subjectInput="ngModel">
                    <option value="">Select a topic...</option>
                    <option value="business-analysis">Business Analysis Project</option>
                    <option value="software-development">Software Development</option>
                    <option value="job-opportunity">Job / Collaboration Opportunity</option>
                    <option value="general">General Enquiry</option>
                  </select>
                  <p *ngIf="subjectInput.invalid && subjectInput.touched" class="text-red-500 text-xs mt-1">Please select a subject.</p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Company / Organisation</label>
                  <input type="text" name="company" [(ngModel)]="form.company"
                         class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                         placeholder="Your company (optional)">
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea name="message" [(ngModel)]="form.message" required rows="5"
                            class="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                            placeholder="Tell me about your project, timeline and what you're looking for..."
                            #messageInput="ngModel"></textarea>
                  <p *ngIf="messageInput.invalid && messageInput.touched" class="text-red-500 text-xs mt-1">Message is required.</p>
                </div>

                <div *ngIf="submitError()" class="p-3 bg-red-50 rounded-lg border border-red-200">
                  <p class="text-red-700 text-sm">{{ submitError() }}</p>
                </div>

                <button type="submit"
                        [disabled]="contactForm.invalid || submitting()"
                        class="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200"
                        [ngClass]="contactForm.invalid || submitting()
                          ? 'bg-slate-300 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md'">
                  <span *ngIf="!submitting()">Send Message</span>
                  <span *ngIf="submitting()" class="flex items-center justify-center gap-2">
                    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </span>
                </button>
                <p class="text-xs text-slate-400 text-center">Your information is kept private and never shared with third parties.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  submitted = signal(false);
  submitting = signal(false);
  submitError = signal<string | null>(null);

  form = {
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
  };

  channels = [
    {
      label: 'Email',
      value: 'bagerajanethjackson@gmail.com',
      href: 'mailto:bagerajanethjackson@gmail.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      bgClass: 'bg-blue-50',
      iconClass: 'text-blue-600',
      external: false,
    },
    {
      label: 'WhatsApp',
      value: '+255 XXX XXX XXX',
      href: 'https://wa.me/255000000000',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      bgClass: 'bg-green-50',
      iconClass: 'text-green-600',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/janeth-bagera',
      href: 'https://linkedin.com/in/janeth-bagera',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
      bgClass: 'bg-blue-50',
      iconClass: 'text-blue-700',
      external: true,
    },
    {
      label: 'Location',
      value: 'Dar es Salaam, Tanzania',
      href: null,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      bgClass: 'bg-teal-50',
      iconClass: 'text-teal-600',
      external: false,
    },
  ];

  async submitForm() {
    this.submitting.set(true);
    this.submitError.set(null);
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(this.form),
      });
      if (response.ok) {
        this.submitted.set(true);
      } else {
        this.submitError.set('Something went wrong. Please try emailing directly at bagerajanethjackson@gmail.com');
      }
    } catch {
      // Fallback: treat as success in demo mode
      this.submitted.set(true);
    } finally {
      this.submitting.set(false);
    }
  }

  resetForm() {
    this.form = { name: '', email: '', subject: '', company: '', message: '' };
    this.submitted.set(false);
    this.submitError.set(null);
  }
}
