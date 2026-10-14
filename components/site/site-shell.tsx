"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Compass, 
  Building2, 
  ShieldCheck, 
  ChevronDown,
  BarChart2,
  Users,
  MessageSquare,
  FileCode2,
  PieChart,
  ShoppingBag,
  Cpu,
  HeartPulse,
  Landmark,
  BookOpen,
  HelpCircle,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingContact } from "@/components/site/floating-contact";

/* ==========================================================================
   MEGA MENU DATA STRUCTURE (DISQO / TOLUNA / CINT STYLE)
   ========================================================================== */
interface NavItem {
  label: string;
  to: string;
  children?: {
    title: string;
    description: string;
    to: string;
    icon: any;
  }[];
  featured?: {
    title: string;
    description: string;
    cta: string;
    to: string;
  };
}

const mainNav: NavItem[] = [
  { 
    label: "Home", 
    to: "/" 
  },
  {
    label: "Our Solutions",
    to: "/services",
    children: [
      {
        title: "Online Sampling & Fieldwork",
        description: "Quota-managed consumer & B2B panel access.",
        to: "/services#sampling",
        icon: Users,
      },
      {
        title: "Qualitative Research",
        description: "Focus groups, in-depth interviews & communities.",
        to: "/services#qualitative",
        icon: MessageSquare,
      },
      {
        title: "Survey Programming",
        description: "Mobile-optimized, multi-lingual survey scripting.",
        to: "/services#programming",
        icon: FileCode2,
      },
      {
        title: "Data Analytics & Reporting",
        description: "Tabulation, coding, interactive dashboards & stories.",
        to: "/services#analytics",
        icon: PieChart,
      },
    ],
    featured: {
      title: "Data Quality Engine",
      description: "Layered bot traps, speeder reviews, and identity checks built into every sample.",
      cta: "Explore Quality Protocol",
      to: "/services",
    }
  },
  {
    label: "Industries",
    to: "/industries",
    children: [
      {
        title: "Consumer & Retail",
        description: "Understand changing buyer expectations & product journeys.",
        to: "/industries#retail",
        icon: ShoppingBag,
      },
      {
        title: "Technology & Innovation",
        description: "Evaluate product-market fit & complex B2B solutions.",
        to: "/industries#tech",
        icon: Cpu,
      },
      {
        title: "Healthcare & Wellness",
        description: "Bring patient, practitioner & caregiver perspectives together.",
        to: "/industries#healthcare",
        icon: HeartPulse,
      },
      {
        title: "Financial Services",
        description: "Build confidence with consumer financial decision insights.",
        to: "/industries#finance",
        icon: Landmark,
      },
    ],
    featured: {
      title: "Target Any Audience",
      description: "Feasibility review across niche B2B & specialized global panels.",
      cta: "Request Feasibility",
      to: "/contact",
    }
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      {
        title: "Case Studies & Reports",
        description: "Real-world research impacts across leading sectors.",
        to: "/insights#cases",
        icon: BookOpen,
      },
      {
        title: "Methodology Guides",
        description: "Best practices for quantitative & qualitative study design.",
        to: "/insights#guides",
        icon: Lightbulb,
      },
      {
        title: "Frequently Asked Questions",
        description: "Quick answers about project start times, feasibility & deliverables.",
        to: "/#faq",
        icon: HelpCircle,
      },
    ],
  },
  { 
    label: "About Us", 
    to: "/about" 
  },
];

const companyLinks = [
  { to: "/about", label: "About Quadsupreme" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/contact", label: "Contact Us" },
];

/* ==========================================================================
   BRAND COMPONENT
   ========================================================================== */
export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Quadsupreme home"
      className={`flex min-w-0 items-center gap-3.5 group ${inverse ? "text-primary-foreground" : "text-foreground"}`}
    >
      <img
        src="/logo.png"
        alt="Quadsupreme logo"
        className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
        width={40}
        height={40}
      />
      <span className="min-w-0 flex flex-col justify-center">
        <span className="block font-display text-[22px] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 bg-clip-text text-transparent">
          Quadsupreme
          <span className="text-pink-500 inline-block animate-pulse"></span>
        </span>
        <span className="inline-flex items-center mt-0.5 px-2 py-0.5 rounded-full text-[8px] font-mono font-bold uppercase tracking-[1.8px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-primary/20 text-primary">
          Research & Technologies
        </span>
      </span>
    </Link>
  );
}

/* ==========================================================================
   SITE SHELL WITH MEGA MENU DROPDOWNS
   ========================================================================== */
export function SiteShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <>
      <header className="site-header relative z-50">
        <div className="container-site flex h-full items-center justify-between gap-5">
          <Brand />

          {/* DESKTOP NAVIGATION WITH MEGA-MENU DROPDOWNS */}
          <nav
            aria-label="Main navigation"
            className="desktop-nav hidden lg:flex items-center gap-2 h-full"
          >
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveHover(item.label)}
                onMouseLeave={() => setActiveHover(null)}
              >
                <Link
                  href={item.to}
                  className="nav-link text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors hover:text-primary hover:bg-primary/5"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeHover === item.label ? "rotate-180 text-primary" : "text-muted-foreground"
                      }`}
                    />
                  )}
                </Link>

                {/* MEGA MENU DROPDOWN PANEL */}
                {item.children && activeHover === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] sm:w-[640px] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-3xl border border-border/80 bg-background/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/10 grid grid-cols-[1fr_200px] gap-6">
                      
                      {/* Sub-links Grid */}
                      <div className="grid gap-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.to}
                            onClick={() => setActiveHover(null)}
                            className="group/item flex items-start gap-3.5 p-3 rounded-2xl transition-all hover:bg-primary/5 border border-transparent hover:border-primary/10"
                          >
                            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0">
                              <child.icon size={18} />
                            </span>
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors flex items-center gap-1">
                                {child.title}
                                <ArrowUpRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Featured Side Card */}
                      {item.featured ? (
                        <div className="rounded-2xl bg-secondary/80 border border-border/60 p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-wider block mb-2">
                              FEATURED HIGHLIGHT
                            </span>
                            <h4 className="text-xs font-bold text-foreground mb-1">
                              {item.featured.title}
                            </h4>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {item.featured.description}
                            </p>
                          </div>
                          <Link
                            href={item.featured.to}
                            onClick={() => setActiveHover(null)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-4"
                          >
                            {item.featured.cta} <ArrowRight size={12} />
                          </Link>
                        </div>
                      ) : (
                        <div className="rounded-2xl bg-primary/5 border border-primary/10 p-5 flex flex-col justify-between">
                          <BarChart2 size={32} className="text-primary/40" />
                          <div>
                            <h4 className="text-xs font-bold text-foreground">Need custom specs?</h4>
                            <p className="text-[11px] text-muted-foreground mt-1">
                              Share your target audience or feasibility constraints.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3 hover:underline">
                              Talk to an Specialist <ArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTON */}
          <Button variant="brand" asChild className="hidden lg:inline-flex rounded-full px-6 shadow-md hover:shadow-lg transition-all">
            <Link href="/contact">
              Let’s talk <ArrowUpRight className="ml-1" size={16} />
            </Link>
          </Button>

          {/* MOBILE TOGGLE BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden absolute top-full left-0 w-full bg-background/95 border-b border-border/80 px-6 py-6 shadow-xl backdrop-blur-md max-h-[85vh] overflow-y-auto"
          >
            <div className="grid gap-4">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-border/40 pb-3">
                  <Link
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-bold text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="grid gap-2 mt-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs text-muted-foreground hover:text-primary py-1 flex items-center justify-between"
                        >
                          <span>{child.title}</span>
                          <ArrowUpRight size={12} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button variant="brand" asChild className="mt-6 w-full rounded-full">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Let’s talk <ArrowUpRight size={16} />
              </Link>
            </Button>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <FloatingContact />

      {/* MODERN FOOTER */}
      <footer className="bg-ink text-primary-foreground relative overflow-hidden pt-20 pb-10 border-t border-primary-foreground/10">
        <div className="absolute top-0 right-1/4 size-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 size-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 grid gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr] pb-16 border-b border-primary-foreground/10">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Brand inverse />
            <p className="text-sm leading-relaxed max-w-sm text-primary-foreground/70 font-light">
              Human understanding meets research intelligence. We equip decision-makers with the clarity required to navigate what’s next.
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-foreground/[0.04] border border-primary-foreground/10 text-xs text-primary-foreground/80 backdrop-blur-sm">
              <Sparkles size={14} className="text-accent shrink-0" />
              <span>Delivering precision intelligence worldwide</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <nav aria-label="Solutions navigation" className="space-y-5">
            <div className="flex items-center gap-2 text-accent">
              <Compass size={16} />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider">Explore Solutions</h3>
            </div>
            <ul className="grid gap-3 text-sm text-primary-foreground/70">
              {mainNav.map((n) => (
                <li key={n.to}>
                  <Link
                    href={n.to}
                    className="group inline-flex items-center gap-2 transition-all hover:text-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent group-hover:scale-125 transition-all" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Company */}
          <nav aria-label="Company navigation" className="space-y-5">
            <div className="flex items-center gap-2 text-accent">
              <Building2 size={16} />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider">Company</h3>
            </div>
            <ul className="grid gap-3 text-sm text-primary-foreground/70">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.to}
                    className="group inline-flex items-center gap-2 transition-all hover:text-accent"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/30 group-hover:bg-accent group-hover:scale-125 transition-all" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck size={16} />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider">Get in Touch</h3>
            </div>
            <div className="space-y-3.5 text-xs sm:text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a className="hover:text-accent transition-colors" href="mailto:info@quadsupreme.com">
                  info@quadsupreme.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a className="hover:text-accent transition-colors" href="tel:+919545242549">
                  +91 95452 42549
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
              >
                Start a conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container-site pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Quadsupreme Research & Technologies. All rights reserved.</p>
            <p className="text-primary-foreground/70 font-mono text-[11px] tracking-wide">
              Built around people. Driven by possibility.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-heading">
      <div className="container-site reveal">
        <p className="eyebrow text-primary mb-6">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="section-copy mt-5 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="cta-band">
      <div className="container-site py-16 grid md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <p className="eyebrow mb-4">YOUR NEXT CHAPTER</p>
          <h2 className="text-[30px] md:text-[38px] font-medium leading-tight tracking-tight">
            Big questions deserve
            <br className="hidden sm:block" /> a thoughtful research partner.
          </h2>
        </div>
        <Button variant="light" asChild className="justify-self-start md:justify-self-end rounded-full px-8 py-6 text-base font-semibold shadow-xl">
          <Link href="/contact">
            Let’s build clarity together <ArrowUpRight className="ml-1" size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
}