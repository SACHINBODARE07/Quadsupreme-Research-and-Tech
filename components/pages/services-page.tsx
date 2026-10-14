"use client"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeading, ContactBand } from "@/components/site/site-shell";
import { ServiceGrid } from "@/components/site/service-grid";
import { pageHead } from "@/lib/site-content";
export default function Services() {
  return (
    <>
      <PageHeading
        eyebrow="OUR SOLUTIONS"
        title="Connected research. Clearer answers."
        description="A thoughtful mix of research methods, audience understanding, and technology—shaped around the questions that matter to you."
      />
      <section className="section-space">
        <div className="container-site">
          <ServiceGrid details />
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-7">
            <p className="section-copy">Not sure where to start?</p>
            <Link href="/contact" className="arrow-link">
              Let’s discuss your question <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space bg-secondary">
        <div className="container-site">
          <p className="eyebrow text-primary mb-5">OUR APPROACH</p>
          <h2 className="section-title mb-10">Thoughtful at every step.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Understand",
                d: "Start with your business decision, your audience, and the questions you need to answer.",
              },
              {
                t: "Design",
                d: "Shape the right methodology, sample, and research experience for your study.",
              },
              {
                t: "Explore",
                d: "Collect perspectives, examine the evidence, and look for meaningful patterns.",
              },
              {
                t: "Clarify",
                d: "Bring findings together into a clear story that supports your next step.",
              },
            ].map((s, i) => (
              <div key={s.t} className="border-t border-border pt-6">
                <span className="text-primary text-xs font-bold">0{i + 1}</span>
                <h3 className="text-xl mt-4 mb-3">{s.t}</h3>
                <p className="section-copy text-xs">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
