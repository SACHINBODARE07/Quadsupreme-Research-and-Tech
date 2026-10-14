"use client"

import { PageHeading, ContactBand } from "@/components/site/site-shell";
import { pageHead } from "@/lib/site-content";
const team = "/research-team.jpg";
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="ABOUT QUADSUPREME"
        title="Curiosity is our starting point. Clarity is our purpose."
        description="Quadsupreme Research & Technologies brings research and technology together around a simple idea: understanding people makes for better decisions."
      />
      <section className="section-space">
        <div className="container-site grid md:grid-cols-2 gap-12 items-center">
          <div className="photo-frame aspect-[1.15]">
            <img
              src={team}
              width={1536}
              height={1024}
              alt="A collaborative research team"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow text-primary mb-5">OUR PERSPECTIVE</p>
            <h2 className="section-title">
              A human lens.
              <br />A forward-looking mindset.
            </h2>
            <p className="section-copy mt-6">
              Markets change. Expectations evolve. Behind every shift are people making choices,
              navigating challenges, and imagining something better.
            </p>
            <p className="section-copy mt-5">
              Our approach connects those human perspectives with structured research and practical
              technology. We focus on asking meaningful questions, listening carefully, and making
              complex information easier to understand.
            </p>
            <p className="section-copy mt-5">
              Whether you’re exploring an idea or looking at a familiar market in a new way, the
              ambition remains the same: a clearer perspective for your next decision.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary section-space">
        <div className="container-site">
          <p className="eyebrow text-primary mb-5">WHAT GUIDES US</p>
          <h2 className="section-title mb-10">Better research starts with better principles.</h2>
          <div className="grid md:grid-cols-3 gap-9">
            {[
              {
                t: "Stay curious",
                d: "Ask the next question. Challenge assumptions. Make room for perspectives that change the conversation.",
              },
              {
                t: "Keep people at the center",
                d: "Treat every response as a human contribution, not simply a number in a spreadsheet.",
              },
              {
                t: "Make clarity useful",
                d: "Turn complex findings into understandable evidence that supports thoughtful decisions.",
              },
            ].map((v, i) => (
              <div key={v.t} className="border-t border-border pt-6">
                <p className="text-primary text-xs mb-5">0{i + 1}</p>
                <h3 className="text-xl mb-4">{v.t}</h3>
                <p className="section-copy">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
