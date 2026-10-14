"use client"
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { PageHeading, ContactBand } from "@/components/site/site-shell";
import { articles, pageHead } from "@/lib/site-content";
const insightsImage = "/research-insights.jpg";
const teamImage = "/research-team.jpg";
export default function Insights() {
  const [query, setQuery] = useState("");
  const filtered = articles.filter((a) =>
    (a.title + " " + a.summary + " " + a.category).toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        eyebrow="FRESH PERSPECTIVES"
        title="Ideas worth exploring."
        description="Notes on research, human understanding, and the possibilities that open up when you ask a better question."
      />
      <section className="section-space">
        <div className="container-site">
          <div className="relative max-w-md mb-10">
            <Search size={17} className="absolute left-3 top-3.5 text-muted-foreground" />
            <input
              aria-label="Search insights"
              type="search"
              placeholder="Search perspectives"
              className="field pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {filtered.map((a, i) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="editorial-card"
              >
                <div className="photo-frame aspect-[1.5] mb-6">
                  <img
                    src={i === 1 ? teamImage : insightsImage}
                    alt={i === 1 ? "A research discussion" : "Research data charts"}
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <p className="text-[9px] font-bold text-primary tracking-[1px]">{a.category}</p>
                <h2 className="text-xl mt-4 mb-3">{a.title}</h2>
                <p className="section-copy text-xs">{a.summary}</p>
                <span className="arrow-link mt-5">
                  Read perspective <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-muted-foreground py-10">No perspectives found for “{query}”.</p>
          )}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
