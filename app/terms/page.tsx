import Link from "next/link";

export const metadata = { title: "Terms & Conditions | Quadsupreme", description: "Terms and conditions for using the Quadsupreme website." };

export default function TermsPage() {
  return (
    <main className="section-space">
      <div className="container-site max-w-3xl">
        <p className="eyebrow text-primary mb-5">LEGAL</p>
        <h1 className="section-title">Terms & Conditions</h1>
        <p className="section-copy mt-5">By using this website, you agree to use it responsibly and for lawful purposes.</p>
        <div className="mt-12 grid gap-8 text-sm leading-7">
          <section><h2 className="text-xl font-semibold mb-2">Website content</h2><p>Content on this website is provided for general information about Quadsupreme Research & Technologies and its services. While we aim to keep it accurate, information may change without notice.</p></section>
          <section><h2 className="text-xl font-semibold mb-2">Intellectual property</h2><p>Unless stated otherwise, the text, branding and visual materials on this website belong to Quadsupreme Research & Technologies and may not be copied or reused without permission.</p></section>
          <section><h2 className="text-xl font-semibold mb-2">Contact</h2><p>Questions about these terms can be sent to <a className="text-primary underline" href="mailto:info@quadsupreme.com">info@quadsupreme.com</a>.</p></section>
        </div>
        <Link href="/" className="arrow-link mt-10">Back to home</Link>
      </div>
    </main>
  );
}
