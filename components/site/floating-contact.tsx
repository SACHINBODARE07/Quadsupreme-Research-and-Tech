import { contactLinks } from "@/lib/contact-links";
import { ThemeToggle } from "@/components/site/theme-toggle";

function LinkedinIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GmailIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

const items = [
  {
    href: contactLinks.linkedin,
    label: "LinkedIn",
    icon: LinkedinIcon,
    cls: "bg-[#0A66C2] hover:bg-[#004182] text-white ring-[#0A66C2]/40",
  },
  {
    href: contactLinks.gmail,
    label: "Gmail",
    icon: GmailIcon,
    cls: "bg-white hover:bg-white text-[#EA4335] ring-[#EA4335]/30 border border-[#EA4335]/25",
  },
];

export function FloatingContact() {
  return (
    <div
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col items-center gap-3"
      aria-label="Quick contact"
    >
      <ThemeToggle />

      {items.map((i, idx) => (
        <a
          key={i.label}
          href={i.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={i.label}
          style={{ animationDelay: `${(idx + 1) * 0.4}s` }}
          className={`group relative flex size-14 items-center justify-center rounded-full shadow-lg ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:ring-4 animate-[float-bob_3s_ease-in-out_infinite] ${i.cls}`}
        >
          <i.icon size={26} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-bold text-background opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 shadow-md">
            {i.label}
          </span>
        </a>
      ))}
    </div>
  );
}