"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, BookOpen } from "lucide-react";
import { articles } from "@/lib/site-content";
import { ContactBand } from "@/components/site/site-shell";

const insightsImage = "/research-insights.jpg";

interface ArticleProps {
  params?: { slug?: string };
  slug?: string;
}

export default function Article({ params, slug }: ArticleProps) {
  // Find article by slug/id or fallback safely to the first article
  const currentSlug = params?.slug || slug;
  const a = articles.find((item) => item.slug === currentSlug) || articles[0];

  return (
    <>
      <article className="section-space relative overflow-hidden">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-0 right-1/3 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site max-w-4xl relative z-10">
          
          {/* Top Bar: Back Link & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to all perspectives</span>
            </Link>

            {a?.category && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Sparkles size={13} />
                {a.category}
              </span>
            )}
          </div>

          {/* Article Header */}
          <header className="space-y-6 text-left mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground">
              {a?.title}
            </h1>

            {a?.summary && (
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
                {a.summary}
              </p>
            )}

            {/* Reading Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-primary shrink-0" />
                <span>Quadsupreme Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-primary shrink-0" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={15} className="text-primary shrink-0" />
                <span>Research & Technologies</span>
              </div>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl shadow-primary/5 aspect-[16/9] mb-12 group">
            <Image
              src={insightsImage}
              alt={a?.title || "Researchers reviewing data"}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Article Paragraphs */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 leading-relaxed text-foreground/90 font-normal">
            {a?.paragraphs ? (
              a.paragraphs.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-base text-muted-foreground">
                Detailed research perspective content is being updated. Check back shortly.
              </p>
            )}
          </div>

          {/* Footer Metadata & Share CTA */}
          <footer className="mt-16 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Quadsupreme Perspectives
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Data intelligence and strategic research insights.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: a?.title,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article link copied to clipboard!");
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-background text-xs font-semibold text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Share2 size={14} className="text-primary" />
              <span>Share this perspective</span>
            </button>
          </footer>

        </div>
      </article>

      <ContactBand />
    </>
  );
}