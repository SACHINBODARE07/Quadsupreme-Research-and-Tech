"use client"
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeading, ContactBand } from "@/components/site/site-shell";
import { industries, pageHead } from "@/lib/site-content";
export default function Industries() {
  return (
    <>
      <PageHeading
        eyebrow="INDUSTRIES & AUDIENCES"
        title="Different worlds. One instinct to understand."
        description="Every industry has its own questions. Explore research applications that connect your business context with the people who shape it."
      />
      <section className="section-space">
        <div className="container-site grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <Link key={i.title} href="/contact" className="service-card">
              <div className="flex justify-between items-center mb-6">
                <span className="icon-tile">
                  <i.icon size={23} strokeWidth={1.5} />
                </span>
                <ArrowUpRight size={18} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl mb-4">{i.title}</h2>
              <p className="section-copy">{i.description}</p>
              <p className="arrow-link mt-6">Explore your research needs</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
