"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ─── Data ───────────────────────────────────────────────────────────────────

const skills = {
  Languages: ["Python", "JavaScript", "C#", "Java"],
  "Frameworks & Libraries": ["Django", "Flask", "AngularJS", "Node.js", "Next.js", "REST APIs"],
  Databases: ["PostgreSQL", "MySQL", "SQLite"],
  "Tools & Platforms": ["Git", "Figma", "Heroku", "Linux", "PostHog"],
  "Mobile": ["Flutter", "Dart", "iOS", "Android", "Play Store", "App Store"],
};

const experience = [
  {
    role: "Product Support & Growth Engineer",
    company: "Masai Code",
    period: "Jan 2026 – Present",
    url: "https://masaicode.com/",
    color: "#e8829a",
    bullets: [
      "Investigate and fix critical bugs, enhance app stability, and reduce recurring errors.",
      "Drive growth via ASO optimization, A/B testing, and regional monetization experiments.",
      "Maintain PostHog dashboards tracking engagement, retention, and conversion metrics.",
      "Contribute to product development with high-quality code and timely engineering deliverables.",
    ],
  },
  {
    role: "System Lead Developer",
    company: "PrintDuka",
    period: "Sep 2025 – Present",
    url: "https://printduka.co.ke/",
    color: "#c4607a",
    bullets: [
      "Building a full-stack print shop management system with e-commerce, job tracking, invoicing, and finance dashboards.",
      "Architected scalable Django REST APIs connecting ordering, production, and finance modules.",
      "Implemented responsive e-commerce features for online ordering, uploads, tracking, and payments.",
      "Automated order workflow from placement to production queue, improving operational efficiency.",
    ],
  },
];

const projects = [
  {
    title: "PrintDuka",
    tag: "Full-Stack · Live",
    description:
      "Full-stack print shop management system integrating e-commerce, client accounts, order & job tracking, automated invoicing, production queues, and finance dashboards.",
    stack: ["Django", "REST API", "JavaScript", "PostgreSQL"],
    link: "https://printduka.co.ke/",
    accent: "#e8829a",
  },
  {
    title: "Resume AI",
    tag: "SaaS · Coming Soon",
    description:
      "AI-powered resume SaaS platform where users can generate professional resumes, optimize existing ones, and get instant ATS compatibility scores — powered by GROQ.",
    stack: ["Next.js", "GROQ", "AI/ML", "SaaS"],
    link: null,
    comingSoon: true,
    accent: "#c4607a",
  },
  {
    title: "The Locker App",
    tag: "Mobile · iOS & Android",
    description:
      "Maintaining and enhancing The Locker mobile app (available on both Play Store and App Store) as part of the Masai Code team — bug fixes, feature improvements, and performance optimizations.",
    stack: ["Mobile", "iOS", "Android", "Growth"],
    link: "https://thelocker.app/",
    accent: "#b5758a",
  },
  {
    title: "CattleCare",
    tag: "Academic Project",
    description:
      "Web-based livestock health management system enabling vets and farmers to track vaccinations, medical treatments, nutrition recommendations, and generate automated health reports.",
    stack: ["Django", "PostgreSQL", "Python"],
    link: null,
    accent: "#9b6080",
  },
];

const education = [
  {
    school: "Africa Nazarene University",
    location: "Nairobi, Kenya",
    degree: "BSc. Computer Science",
    period: "Sept 2021 – July 2025",
    note: "Member, Girl Code Club — coding events, hackathons, and collaborative programming.",
  },
  {
    school: "Moringa School",
    location: "Nairobi, Kenya",
    degree: "Certificate in Full Stack Software Engineering",
    period: "June 2021 – Nov 2021",
    note: "Python, Flask, Django, Angular, and REST API development.",
  },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Small components ────────────────────────────────────────────────────────

function BowIcon({ size = 20 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 40 24" fill="none">
      <path d="M20 12 C16 6, 4 2, 2 8 C0 14, 10 18, 20 12Z" fill="#e8829a" opacity="0.8" />
      <path d="M20 12 C24 6, 36 2, 38 8 C40 14, 30 18, 20 12Z" fill="#e8829a" opacity="0.8" />
      <circle cx="20" cy="12" r="3" fill="#f0b8c8" />
    </svg>
  );
}

function RoseDot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-accent align-middle mr-2" />;
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-400 hover:text-rose-accent transition-colors duration-200 tracking-wide"
    >
      {children}
    </a>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <BowIcon size={18} />
          <span className="font-display font-semibold text-white text-sm tracking-wider">
            Shalin<span className="text-rose-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-400 hover:text-rose-accent transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-surface border-b border-dark-border px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm text-gray-400 hover:text-rose-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center dot-grid overflow-hidden pt-20">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-deep/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <BowIcon size={22} />
              <span className="text-rose-accent text-sm font-medium tracking-widest uppercase">
                Software Engineer
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Shalin</span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-gray-300">Chepkoech Rono</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Building scalable web applications and driving product growth from{" "}
              <span className="text-rose-muted">Nairobi, Kenya</span>. Passionate about clean code,
              data-driven insights, and user-centric solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-rose-accent hover:bg-rose-deep text-white text-sm font-medium rounded-full transition-all duration-200 rose-glow-sm hover:rose-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-dark-border hover:border-rose-accent text-gray-300 hover:text-rose-accent text-sm font-medium rounded-full transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Availability badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 bg-dark-card border border-dark-border rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-400">Open to opportunities</span>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-rose-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-rose-accent/10 animate-[spin_30s_linear_infinite_reverse]" />

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-rose-accent/40 rose-glow">
                <Image
                  src="/shalin-img.jpg"
                  alt="Shalin Rono"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 bg-dark-card border border-dark-border px-3 py-2 rounded-xl rose-glow-sm animate-float">
                <p className="text-xs text-gray-400">Currently building</p>
                <p className="text-sm font-medium text-rose-muted">Resume AI SaaS</p>
              </div>
              <div className="absolute -top-2 -right-4 bg-dark-card border border-dark-border px-3 py-2 rounded-xl">
                <p className="text-xs text-gray-400">Based in</p>
                <p className="text-sm font-medium text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 reveal">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Code with purpose,<br />
            <span className="gradient-text">ship with care</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a Software Engineer and Product Support professional with a passion for building
              scalable web applications that solve real problems. I built and launched the full-stack
              print shop management system at{" "}
              <a href="https://printduka.co.ke/" className="text-rose-muted hover:text-rose-accent transition-colors" target="_blank" rel="noopener noreferrer">
                PrintDuka
              </a>
              {" "}— now live and actively used — and continue shipping new features as the product grows. I also support
              product growth at{" "}
              <a href="https://masaicode.com/" className="text-rose-muted hover:text-rose-accent transition-colors" target="_blank" rel="noopener noreferrer">
                Masai Code
              </a>.
            </p>
            <p>
              I hold a BSc in Computer Science from Africa Nazarene University and a Full Stack certificate
              from Moringa School. I&apos;m deeply interested in the intersection of engineering and
              product — writing clean, data-informed code that drives growth.
            </p>
            <p>
              When I&apos;m not shipping features, I&apos;m experimenting with AI tooling, contributing to
              community coding events, and building my next SaaS idea.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            { label: "Years Coding", value: "4+" },
            { label: "Projects Built", value: "10+" },
            { label: "Tech Stack", value: "Full-Stack" },
            { label: "Currently", value: "Nairobi, KE" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-dark-card border border-dark-border rounded-2xl p-5 text-center card-hover"
            >
              <p className="font-display text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-surface reveal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">What I Work With</p>
          <h2 className="font-display text-4xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-2 mb-4">
                <BowIcon size={16} />
                <h3 className="text-sm font-semibold text-rose-muted uppercase tracking-wider">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill px-3 py-1.5 text-xs text-gray-300 bg-dark-bg border border-dark-border rounded-full cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6 reveal">
      <div className="text-center mb-14">
        <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">Where I&apos;ve Been</p>
        <h2 className="font-display text-4xl font-bold text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </div>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 card-hover relative overflow-hidden"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
              style={{ background: `linear-gradient(to bottom, ${job.color}, transparent)` }}
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4 pl-2">
              <div>
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-accent hover:text-rose-muted transition-colors text-sm font-medium"
                    >
                      {job.company} ↗
                    </a>
                  ) : (
                    <span className="text-rose-accent text-sm font-medium">{job.company}</span>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-dark-bg border border-dark-border px-3 py-1 rounded-full whitespace-nowrap self-start">
                {job.period}
              </span>
            </div>

            <ul className="space-y-2 pl-2">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <RoseDot />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-surface reveal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">What I&apos;ve Built</p>
          <h2 className="font-display text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover flex flex-col relative overflow-hidden group"
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-3">
                <div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full border"
                    style={{
                      color: p.accent,
                      borderColor: `${p.accent}40`,
                      background: `${p.accent}10`,
                    }}
                  >
                    {p.tag}
                  </span>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-rose-accent transition-colors"
                    aria-label={`Visit ${p.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                {p.comingSoon && (
                  <span className="text-xs text-gray-500 border border-dark-border px-2.5 py-1 rounded-full">
                    Link coming soon
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 bg-dark-bg border border-dark-border text-gray-400 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6 reveal">
      <div className="text-center mb-14">
        <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">Academic Background</p>
        <h2 className="font-display text-4xl font-bold text-white">
          <span className="gradient-text">Education</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 card-hover relative"
          >
            <div className="absolute top-6 right-6">
              <BowIcon size={20} />
            </div>
            <p className="text-xs text-gray-500 bg-dark-bg border border-dark-border px-3 py-1 rounded-full inline-block mb-4">
              {e.period}
            </p>
            <h3 className="font-display text-xl font-bold text-white mb-1">{e.school}</h3>
            <p className="text-rose-accent text-sm font-medium mb-1">{e.degree}</p>
            <p className="text-xs text-gray-500 mb-3">{e.location}</p>
            <p className="text-gray-400 text-sm leading-relaxed border-t border-dark-border pt-3">
              {e.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-surface reveal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <BowIcon size={28} />
        </div>
        <p className="text-rose-accent text-sm font-medium tracking-widest uppercase mb-3">Let&apos;s Connect</p>
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 leading-relaxed mb-10">
          I&apos;m currently open to new opportunities, collaborations, and interesting conversations.
          Whether you have a project in mind or just want to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:ronoshalin@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-rose-accent hover:bg-rose-deep text-white font-medium rounded-full transition-all duration-200 rose-glow hover:scale-105 mb-12"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          ronoshalin@gmail.com
        </a>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://linkedin.com/in/shalin-rono-a7829a21b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-rose-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/sha-lin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-rose-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            GitHub
          </a>
          <a
            href="tel:+254701338496"
            className="flex items-center gap-2 text-gray-400 hover:text-rose-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12.9a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +254 701 338 496
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-dark-border text-center">
      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
        <BowIcon size={14} />
        <span>Built by Shalin Rono · {new Date().getFullYear()}</span>
        <BowIcon size={14} />
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useReveal();

  return (
    <main className="bg-dark-bg text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
