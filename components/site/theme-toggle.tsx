"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sync state with what's already on <html> (set by the inline script)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      style={{ animationDelay: "0s" }}
      className="group relative flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:ring-4 hover:ring-foreground/30 animate-[float-bob_3s_ease-in-out_infinite]"
    >
      {dark ? (
        <Sun size={24} strokeWidth={2.25} />
      ) : (
        <Moon size={24} strokeWidth={2.25} />
      )}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-bold text-background opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 shadow-md">
        {dark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}