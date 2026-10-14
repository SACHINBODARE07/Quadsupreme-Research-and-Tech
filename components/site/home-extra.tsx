"use client";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Bot, ScanFace, Timer, Users, BarChart3, MessagesSquare, ClipboardList, ChevronDown, Quote } from 'lucide-react';

const steps = [
  { n: '01', t: 'Understand', s: 'We start with your business question, decision timeline and the audience that matters.' },
  { n: '02', t: 'Design', s: 'Methodology, questionnaire and sampling plan shaped around what you need to learn.' },
  { n: '03', t: 'Collect', s: 'Fieldwork across online, B2B, consumer and niche audiences with live monitoring.' },
  { n: '04', t: 'Deliver', s: 'Clean data, clear tables and a story your team can act on.' },
];

const approaches = [
  { icon: Users, t: 'Online sampling', s: 'Reach consumer and B2B audiences with quota-managed fieldwork.' },
  { icon: MessagesSquare, t: 'Qualitative research', s: 'In-depth interviews, focus groups and communities.' },
  { icon: ClipboardList, t: 'Survey programming', s: 'Mobile-friendly surveys built, tested and hosted.' },
  { icon: BarChart3, t: 'Data & reporting', s: 'Tabulation, coding, dashboards and insight reports.' },
];

const quality = [
  { icon: ScanFace, t: 'Identity checks', s: 'Duplicate and device checks before respondents enter.' },
  { icon: Bot, t: 'Bot protection', s: 'Automated traps to filter non-human responses.' },
  { icon: Timer, t: 'Speeder review', s: 'Flag rushed or straight-lined answers.' },
  { icon: ShieldCheck, t: 'Privacy first', s: 'Respondent data handled with care and consent.' },
];

const industries = [
  { name: 'Consumer & retail', copy: 'Understand changing expectations, journeys and buying decisions.' },
  { name: 'Technology & innovation', copy: 'Translate complex products into clear market opportunity.' },
  { name: 'Healthcare & wellness', copy: 'Bring patient, practitioner and caregiver perspectives into focus.' },
  { name: 'Financial services', copy: 'Build confidence through sharper customer understanding.' },
];

const testimonials = [
  { quote: 'Quadsupreme helped us move from a broad business question to a clear, confident direction.', person: 'Marketing Director', company: 'Growth-stage technology company' },
  { quote: 'The team combined rigor with genuine curiosity. The final story was easy for everyone to act on.', person: 'Consumer Insights Lead', company: 'National retail brand' },
  { quote: 'A thoughtful research partner from brief through delivery, with quality built into every step.', person: 'Strategy & Innovation Lead', company: 'Healthcare organization' },
  { quote: 'Their data quality control gave our stakeholders total peace of mind before launch.', person: 'Head of Research', company: 'Global Fintech Enterprise' },
];

const faqs = [
  { q: 'What kinds of projects do you support?', a: 'Quantitative surveys, qualitative studies, survey programming, and data processing — individually or end to end.' },
  { q: 'Can you work with niche or B2B audiences?', a: 'Yes. Tell us who you need to hear from and we will review feasibility with you before fieldwork begins.' },
  { q: 'How quickly can a project start?', a: 'Timelines depend on scope and audience. Share your brief and we will propose a realistic schedule.' },
  { q: 'How do you protect data quality?', a: 'Layered checks before, during and after fieldwork, from identity validation to response review.' },
];

export function HomeExtra() {
  return (
    <>
      {/* HOW WE WORK */}
      <section className="section-space relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-primary mb-3">HOW WE WORK</p>
            <h2 className="section-title">From question to <span className="text-primary">confident decision.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div 
                key={s.n} 
                className="group relative rounded-3xl border border-border/80 bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute top-6 right-6 text-xs font-mono font-semibold text-primary/40">STEP {idx + 1}</div>
                <span className="font-display text-4xl text-primary font-bold tracking-tight">{s.n}</span>
                <h3 className="text-xl font-semibold mt-6 mb-3 group-hover:text-primary transition-colors">{s.t}</h3>
                <p className="section-copy text-sm leading-relaxed">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH APPROACHES */}
      <section className="bg-ink text-primary-foreground section-space relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-accent mb-3">RESEARCH APPROACHES</p>
            <h2 className="section-title text-white">Every method you need, <span className="text-accent">one partner.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map(a => (
              <div 
                key={a.t} 
                className="group rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.02] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:bg-primary-foreground/[0.06] hover:shadow-2xl hover:shadow-black/40"
              >
                <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <a.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{a.t}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{a.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA QUALITY */}
      <section className="section-space bg-secondary/50">
        <div className="container-site grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="eyebrow text-primary mb-3">DATA QUALITY</p>
            <h2 className="section-title">Insights you can <span className="text-primary">trust.</span></h2>
            <p className="section-copy mt-5 text-base leading-relaxed">Good decisions need rock-solid data. Rigorous quality checks are engineered into every stage of our pipeline so you can act without hesitation.</p>
            <Link href="/services" className="arrow-link mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
              See our solutions <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {quality.map(q => (
              <div 
                key={q.t} 
                className="group rounded-3xl border border-border/60 bg-background p-6 lg:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <q.icon size={22} />
                </span>
                <h3 className="text-base font-semibold mt-5 mb-2">{q.t}</h3>
                <p className="section-copy text-sm leading-relaxed">{q.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-space">
        <div className="container-site">
          <p className="eyebrow text-primary mb-3">INDUSTRIES WE SERVE</p>
          <div className="grid md:grid-cols-[.9fr_1.1fr] gap-8 items-end mb-12">
            <h2 className="section-title">Insight that meets your <span className="text-primary">world.</span></h2>
            <p className="section-copy text-base">Every sector has its own language, regulatory context, and strategic pressures. We bring sector-specific perspective to every study.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="group rounded-3xl border border-border/80 p-7 bg-background transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-primary/10">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                <p className="section-copy text-sm leading-relaxed">{industry.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFINITE SLIDER TESTIMONIALS */}
      <section className="section-space overflow-hidden bg-secondary/30">
        <div className="container-site mb-12">
          <p className="eyebrow text-primary mb-3">CLIENT PERSPECTIVES</p>
          <h2 className="section-title">Built on trust. <span className="text-primary">Proven in practice.</span></h2>
        </div>

        {/* Marquee Slider Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 py-4">
            {/* Render items twice to create seamless loop effect */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <figure 
                key={`${testimonial.company}-${idx}`} 
                className="w-[350px] sm:w-[420px] shrink-0 rounded-3xl border border-border/80 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <Quote className="text-primary/20 mb-4" size={32} />
                  <blockquote className="font-display text-lg lg:text-xl leading-snug tracking-tight">
                    “{testimonial.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 pt-6 border-t border-border/60 text-xs text-muted-foreground flex items-center justify-between">
                  <div>
                    <strong className="block text-foreground text-sm font-semibold">{testimonial.person}</strong>
                    <span className="text-primary/80 font-medium">{testimonial.company}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-space">
        <div className="container-site max-w-3xl">
          <p className="eyebrow text-primary mb-3 text-center">FAQ</p>
          <h2 className="section-title text-center mb-12">Questions, answered.</h2>
          <div className="grid gap-4">
            {faqs.map(f => (
              <details key={f.q} className="group rounded-2xl border border-border/80 bg-background p-6 transition-all hover:border-primary open:border-primary open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-lg">
                  {f.q}
                  <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-open:rotate-180">
                    <ChevronDown size={18} />
                  </div>
                </summary>
                <p className="section-copy text-sm sm:text-base mt-4 leading-relaxed pt-3 border-t border-border/40">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}