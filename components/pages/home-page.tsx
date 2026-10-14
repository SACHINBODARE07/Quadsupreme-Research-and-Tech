"use client"
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Fingerprint,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBand } from "@/components/site/site-shell";
import { ServiceGrid } from "@/components/site/service-grid";
import { HomeExtra } from "@/components/site/home-extra";
import { articles, pageHead } from "@/lib/site-content";
const teamImage = "/research-team.jpg";
const insightsImage = "/research-insights.jpg";
export default function Index() {
  const featured = articles[0];
  if (!featured) return null;
  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src={teamImage}
          alt="Research professionals exchanging ideas around a table"
          width={1536}
          height={1024}
          fetchPriority="high"
        />
        <div className="container-site hero-content reveal">
          <p className="eyebrow text-primary">PEOPLE. PERSPECTIVES. POSSIBILITIES.</p>
          <h1>
            Quadsupreme.
            <br />
            Human insights.
            <br />
            <em>Smarter decisions.</em>
          </h1>
          <p className="hero-description">
            We bring people, research, and technology together to turn your biggest questions into
            your next confident move.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Button variant="brand" asChild>
              <Link href="/services">
                Explore our solutions <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="light" asChild>
              <Link href="/contact">
                Let’s talk <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-6 text-[10px] font-semibold text-muted-foreground">
            <span className="flex size-4 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check size={10} />
            </span>
            Human-centered research. Technology-enabled thinking.
          </div>
        </div>
        <div className="insight-note">
          <div className="flex items-center justify-between">
            <span className="note-bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <MoveUpRight className="text-primary" size={23} />
          </div>
          <p className="font-display text-sm font-medium mt-3">
            From information
            <br />
            to informed action.
          </p>
          <p className="text-[10px] text-muted-foreground mt-2">
            A clearer perspective changes everything.
          </p>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 py-7 gap-x-6 gap-y-6">
          {[
            { icon: Globe2, t: "Broader perspectives", s: "Connect with the right audiences" },
            {
              icon: Fingerprint,
              t: "People-first research",
              s: "Real voices. Meaningful understanding.",
            },
            { icon: Sparkles, t: "Technology with purpose", s: "Simplify the path to insight" },
            {
              icon: MoveUpRight,
              t: "Clarity that moves you",
              s: "Research shaped around your decisions",
            },
          ].map((v) => (
            <div key={v.t} className="flex items-center gap-3">
              <v.icon className="text-primary shrink-0" size={25} strokeWidth={1.5} />
              <div>
                <h2 className="text-[11px] font-semibold">{v.t}</h2>
                <p className="text-[9px] text-muted-foreground mt-1.5">{v.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-space">
        <div className="container-site">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-9">
            <div>
              <p className="eyebrow text-primary mb-4">WHAT WE DO</p>
              <h2 className="section-title">
                Your questions.
                <br />
                Our research. <span className="text-primary">Real clarity.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="section-copy">
                From the first conversation to the final insight, a connected approach to
                understanding your market.
              </p>
              <Link href="/services" className="arrow-link mt-4">
                Discover all solutions <ArrowRight />
              </Link>
            </div>
          </div>
          <ServiceGrid limit={3} />
        </div>
      </section>
      <section className="bg-secondary section-space">
        <div className="container-site grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="photo-frame aspect-[1.2] relative">
            <img
              src={insightsImage}
              alt="Researchers examining blue and coral data charts"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
          <div>
            <p className="eyebrow text-primary mb-5">THE QUADSUPREME PERSPECTIVE</p>
            <h2 className="section-title">
              Behind every data point,
              <br />
              there’s a <span className="text-primary">human story.</span>
            </h2>
            <p className="section-copy mt-6">
              The most valuable insights start with understanding people. Their needs. Their
              motivations. The choices that shape their world.
            </p>
            <p className="section-copy mt-4">
              At Quadsupreme Research & Technologies, we connect thoughtful research with practical
              technology to help you see the bigger picture—and what to do next.
            </p>
            <div className="flex gap-6 my-7 text-[12px] font-semibold">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-primary" />
                Human-led thinking
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-primary" />
                Insight-led action
              </span>
            </div>
            <Button variant="brand" asChild>
              <Link href="/about">
                Get to know us <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-site">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-9">
            <div>
              <p className="eyebrow text-primary mb-4">FRESH PERSPECTIVES</p>
              <h2 className="section-title">
                A little curiosity.
                <br />A lot of possibility.
              </h2>
            </div>
            <Link className="arrow-link" href="/insights">
              Explore our insights <ArrowRight />
            </Link>
          </div>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-9">
            <Link
              href={`/insights/${featured.slug}`}
              className="editorial-card group"
            >
              <div className="photo-frame aspect-[2] mb-5">
                <img
                  src={insightsImage}
                  alt="Data charts on a research desk"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
              </div>
              <p className="text-[9px] text-primary font-bold tracking-[1.2px]">
                {featured.category}
              </p>
              <h3 className="text-xl mt-3 mb-3">{featured.title}</h3>
              <p className="section-copy text-xs">{featured.summary}</p>
              <span className="arrow-link mt-4">
                Read perspective <ArrowRight />
              </span>
            </Link>
            <div className="grid gap-8">
              {articles.slice(1).map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="editorial-card"
                >
                  <p className="text-[9px] text-primary font-bold tracking-[1.2px]">{a.category}</p>
                  <h3 className="text-xl mt-3 mb-3">{a.title}</h3>
                  <p className="section-copy text-xs">{a.summary}</p>
                  <span className="arrow-link mt-4">
                    Read perspective <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HomeExtra />
      <ContactBand />
    </>
  );
}
