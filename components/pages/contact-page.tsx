"use client";

import { useState, Suspense, type FormEvent } from "react";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  MessagesSquare,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  Clock,
  ShieldCheck,
  Building2,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/site/site-shell";
import { services } from "@/lib/site-content";

const ContactMap = dynamic(() => import("@/components/site/contact-map"), { ssr: false });

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Flip to success view instantly — no waiting, no spinner
    form.reset();
    setSubmitted(true);

    // Fire the email in the background
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("Name"),
          email: formData.get("Email"),
          company: formData.get("Company"),
          interest: formData.get("Interest"),
          message: formData.get("Project"),
        }),
      });
    } catch (err) {
      console.error("Contact send failed:", err);
    }
  }

  return (
    <>
      <PageHeading
        eyebrow="LET'S TALK"
        title="Your next insight starts with a conversation."
        description="Tell us what you're curious about — a business challenge, a new market entry, or an audience you'd like to understand better."
      />

      {/* CONTACT SECTION */}
      <section className="section-space relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-10 right-10 size-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-site relative z-10 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Contact Info Card */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <MessagesSquare size={14} />
                <span>DIRECT INQUIRIES</span>
              </div>
              <h2 className="section-title text-3xl sm:text-4xl">
                Start with <br />
                <span className="text-primary">your big question.</span>
              </h2>
              <p className="section-copy mt-4 text-base leading-relaxed">
                A clear brief is a great first step. Share a little about your goals, audience, and timeline, and our team will get back to you within 24 hours.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/80 bg-background shadow-sm hover:border-primary/40 transition-colors">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Our Office</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/80 bg-background shadow-sm hover:border-primary/40 transition-colors">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:info@quadsupreme.com" className="text-xs text-primary font-medium hover:underline mt-1 block">
                    info@quadsupreme.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/80 bg-background shadow-sm hover:border-primary/40 transition-colors">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Call Us</h3>
                  <a href="tel:+919545242549" className="text-xs text-primary font-medium hover:underline mt-1 block">
                    +91 95452 42549
                  </a>
                </div>
              </div>
            </div>

            {/* Response Promise Badge */}
            <div className="p-5 rounded-2xl bg-secondary/60 border border-border/60 flex items-center gap-3 text-xs text-muted-foreground">
              <Clock size={18} className="text-primary shrink-0" />
              <span>We respond to all project briefs within <strong>1 business day</strong>.</span>
            </div>
          </div>

          {/* RIGHT SIDE: Modern Contact Form Card */}
          <div className="rounded-3xl border border-border/80 bg-background p-8 sm:p-10 shadow-2xl shadow-primary/5 relative">
            
            {submitted ? (
              /* Success Message View */
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="size-16 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold">Inquiry Received!</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Quadsupreme. Our research team has received your message and will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="mt-6 rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              /* Actual Contact Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Send a Message</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill out the form below to get in touch with our team.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <User size={14} className="text-primary" /> Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      placeholder=""
                      className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Mail size={14} className="text-primary" /> Work Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      placeholder=""
                      className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Building2 size={14} className="text-primary" /> Organization
                    </label>
                    <input
                      type="text"
                      name="Company"
                      placeholder="Company or institution"
                      className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>

                  {/* Research Interest Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Sparkles size={14} className="text-primary" /> Solution Needed
                    </label>
                    <select 
                      name="Interest" 
                      defaultValue="Not sure yet"
                      className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none cursor-pointer"
                    >
                      <option value="Not sure yet">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief Area */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-primary" /> Project Brief / Inquiry <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="Project"
                    required
                    rows={4}
                    placeholder="Tell us about your target audience, research goals, or specific timeline..."
                    className="w-full p-4 text-sm rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  />
                </div>

                {/* Privacy Guarantee Note */}
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-1">
                  <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                  <span>Your details are safe with us. We strictly respect your privacy.</span>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="brand" 
                  className="w-full h-12 rounded-xl text-base font-semibold shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Send Message <Send size={16} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}