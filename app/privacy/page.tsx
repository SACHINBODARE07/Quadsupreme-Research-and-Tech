import Link from "next/link";

export const metadata = { title: "Privacy Policy | Quadsupreme", description: "Privacy policy for Quadsupreme Research & Technologies." };

export default function PrivacyPage() {
  return (
    <main className="section-space">
      <div className="container-site max-w-3xl">
        <p className="eyebrow text-primary mb-5">LEGAL</p>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-copy mt-5">Your privacy matters to Quadsupreme Research & Technologies. This policy explains how we handle information shared through this website.</p>
        <div className="mt-12 grid gap-8 text-sm leading-7">
          <section><h2 className="text-xl font-semibold mb-2">Information you share</h2><p>When you contact us, we may receive your name, email address, phone number, company details and project information. We use this information only to respond to your enquiry and discuss relevant services.</p></section>
          <section><h2 className="text-xl font-semibold mb-2">How we protect information</h2><p>We take reasonable measures to protect information from unauthorized access, alteration or disclosure. We do not sell personal information.</p></section>
          <section><h2 className="text-xl font-semibold mb-2">Contact</h2><p>For privacy questions, email <a className="text-primary underline" href="mailto:info@quadsupreme.com">info@quadsupreme.com</a>.</p></section>
        </div>
        <Link href="/" className="arrow-link mt-10">Back to home</Link>
      </div>
    </main>
  );
}
