import type { Metadata } from "next";
import Script from "next/script";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Quadsupreme Research & Technologies",
  description:
    "Human understanding, research intelligence, and technology for clearer decisions.",
};

const themeInit = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}