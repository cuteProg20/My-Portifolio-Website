import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero -->
    <section class="navy-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="section-label text-teal-400">About Me</span>
          <h1 class="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Turning Business Problems into Digital Solutions</h1>
          <p class="text-slate-300 text-lg leading-relaxed">
            A Business Analyst and Software Developer passionate about using technology to solve real problems and improve how organizations operate.
          </p>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span class="section-label">Professional Overview</span>
            <h2 class="section-title mb-6">Who I Am</h2>
            <div class="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a Business Analyst and Software Developer passionate about using technology to solve business problems and improve organizational operations.
              </p>
              <p>
                My professional journey combines software development, requirements engineering, technical project delivery, system analysis and business process understanding.
              </p>
              <p>
                I work at the intersection of business and technology, helping stakeholders understand their needs, translate requirements into actionable specifications and support the development of digital solutions.
              </p>
              <p>
                My interests include digital transformation, business process automation, artificial intelligence, emerging technologies and technology solutions that address real-world challenges.
              </p>
            </div>

            <!-- Philosophy -->
            <div class="mt-10 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <p class="text-xs font-mono text-blue-600 uppercase tracking-widest mb-3">Working Philosophy</p>
              <p class="font-heading font-semibold text-slate-900 text-xl leading-snug italic">
                "Understand the problem. Define the right solution. Build technology that creates value."
              </p>
              <p class="text-slate-500 text-sm mt-3">— Janeth Bagera</p>
            </div>
          </div>

          <div class="space-y-5">
            <!-- Photo -->
            <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img src="assets/janeth-profile.png" alt="Janeth Jackson Bagera" class="w-full object-cover object-top" style="max-height:340px;">
            </div>
            <!-- Profile card -->
            <div class="card">
              <div class="flex items-center gap-4 mb-5">
                <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 flex-shrink-0">
                  <img src="assets/janeth-profile.png" alt="Janeth Bagera" class="w-full h-full object-cover object-top">
                </div>
                <div>
                  <p class="font-heading font-bold text-slate-900">Janeth Jackson Bagera, Eng.</p>
                  <p class="text-blue-600 text-sm">Business Analyst | Software Developer</p>
                  <p class="text-teal-600 text-xs font-mono mt-0.5">ERB Registered Engineer — GE1119654</p>
                </div>
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex gap-3">
                  <span class="text-slate-400 w-24 flex-shrink-0">Location</span>
                  <span class="text-slate-700">Dar es Salaam, Tanzania</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-slate-400 w-24 flex-shrink-0">Languages</span>
                  <span class="text-slate-700">English (Excellent) · Swahili (Excellent)</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-slate-400 w-24 flex-shrink-0">Availability</span>
                  <span class="text-slate-700">Open to local and remote opportunities</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-slate-400 w-24 flex-shrink-0">Email</span>
                  <a href="mailto:bagerajanethjackson@gmail.com" class="text-blue-600 hover:underline truncate">bagerajanethjackson@gmail.com</a>
                </div>
              </div>
            </div>

            <!-- Interests -->
            <div class="card">
              <p class="font-heading font-semibold text-slate-900 mb-4">Professional Interests</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let interest of interests" class="tag">{{ interest }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Timeline -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">Career Journey</span>
          <h2 class="section-title">Professional Timeline</h2>
        </div>
        <div class="relative">
          <!-- Line -->
          <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform md:-translate-x-0.5"></div>
          <div class="space-y-10">
            <div *ngFor="let item of timeline; let i = index"
                 class="relative flex gap-6 md:gap-0 md:items-start"
                 [class.md:flex-row-reverse]="i % 2 === 1">
              <!-- Dot -->
              <div class="relative z-10 w-12 h-12 flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1">
                <div class="w-12 h-12 rounded-full border-4 border-white shadow flex items-center justify-center"
                     [ngClass]="item.type === 'work' ? 'bg-blue-600' : 'bg-teal-500'">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          [attr.d]="item.type === 'work' ? 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                : 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'"/>
                  </svg>
                </div>
              </div>
              <!-- Content -->
              <div class="flex-1 md:w-5/12 md:mx-8 bg-white rounded-xl border border-slate-100 shadow-sm p-6 ml-2 md:ml-0">
                <span class="text-xs font-mono text-teal-600 font-medium">{{ item.period }}</span>
                <h3 class="font-heading font-bold text-slate-900 mt-1 mb-1">{{ item.title }}</h3>
                <p class="text-blue-600 text-sm font-medium mb-2">{{ item.org }}</p>
                <p class="text-slate-500 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14">
          <span class="section-label">Education</span>
          <h2 class="section-title">Academic Background</h2>
        </div>
        <div class="card max-w-2xl mx-auto">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-heading font-bold text-slate-900">Bachelor of Engineering (Information Technology)</h3>
              <p class="text-blue-600 font-medium text-sm mt-1">Dar es Salaam Institute of Technology (DIT)</p>
              <p class="text-slate-400 text-sm font-mono mt-1">October 2015 – January 2021</p>
              <p class="text-slate-500 text-sm mt-3">Foundation in computer engineering, networking, software development and information systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 navy-section">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-heading font-bold text-3xl text-white mb-4">Want to Work Together?</h2>
        <p class="text-slate-300 mb-8">I'm open to interesting projects, collaborations and new opportunities.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/contact" class="btn-primary">Get in Touch</a>
          <a routerLink="/projects" class="btn-outline-white">See My Work</a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  interests = [
    'Digital Transformation', 'Business Process Automation', 'Artificial Intelligence',
    'Emerging Technologies', 'FinTech', 'EdTech', 'Requirements Engineering',
    'Systems Thinking', 'East African Tech Ecosystem',
  ];

  timeline = [
    {
      type: 'work',
      period: 'July 2026 – Present',
      title: 'Business Analyst',
      org: 'eGA (e-Government Authority)',
      description: 'Eliciting and documenting business requirements, stakeholder engagement and supporting digital government initiatives.',
    },
    {
      type: 'work',
      period: 'April 2024 – July 2026',
      title: 'Platform Support Analyst Lead',
      org: 'Paladin Associates (Betika Tanzania)',
      description: 'Led UAT cycles, documented platform requirements, and coordinated cross-functional teams to deliver platform improvements in fintech.',
    },
    {
      type: 'work',
      period: 'June 2022 – April 2024',
      title: 'KYC Remediation Officer',
      org: 'NMB Bank PLC',
      description: 'Customer data remediation, banking operations support and acting as a liaison between branches and ICT teams.',
    },
    {
      type: 'work',
      period: 'June 2020 – March 2022',
      title: 'Software Requirements Engineer & Developer',
      org: 'Omuha Company',
      description: 'Requirements elicitation, SRS documentation, software architecture design and development across PHP, Python and JavaScript.',
    },
    {
      type: 'work',
      period: 'June 2020 – March 2021',
      title: 'Junior Network Engineer',
      org: 'Softnet Technologies',
      description: 'ISE rollout project supporting network infrastructure security and configuration across bank branches.',
    },
    {
      type: 'education',
      period: 'October 2015 – January 2021',
      title: 'Bachelor of Engineering (IT)',
      org: 'Dar es Salaam Institute of Technology',
      description: 'Computer engineering, software development, networking and information systems.',
    },
  ];
}
