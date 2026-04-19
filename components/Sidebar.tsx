"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const primary: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Building", href: "/building" },
  { label: "Blog", href: "/blog" },
  { label: "Archive", href: "/archive" },
];

const secondary: NavItem[] = [
  {
    label: "Twitter",
    href: "https://twitter.com/AnirudhDabas",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anirudhdabas",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/AnirudhDabas",
    external: true,
  },
  { label: "Email", href: "mailto:a2dabas@uwaterloo.ca" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar w-full shrink-0 pb-2 md:w-48 md:pb-0">
      <nav className="nav-primary flex flex-row flex-wrap gap-x-5 gap-y-1 md:flex-col md:gap-2">
        {primary.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${active ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="nav-secondary-row mt-3 flex flex-row flex-wrap items-center gap-x-4 gap-y-1 md:mt-0 md:block">
        <nav className="nav-secondary flex flex-row flex-wrap gap-x-4 gap-y-1 text-[0.8rem] text-[var(--muted)] md:mt-8 md:flex-col md:gap-2 md:text-[1.0625rem] md:text-[var(--fg)]">
          {secondary.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <span className="sidebar-ornament inline-flex items-center gap-1.5 leading-none text-[0.95rem] text-[var(--muted)] md:mt-8 md:flex md:justify-center md:gap-2 md:text-[1.15rem]">
          <a href="https://cs.uwatering.com/#anirro.com?nav=prev" aria-label="Previous site in CS Webring">‹</a>
          <a
            href="https://cs.uwatering.com/#anirro.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CS Webring"
          >
            <img
              src="/cs-webring.svg"
              alt="CS Webring"
              className="h-auto w-[18px] opacity-80 md:w-[18px]"
            />
          </a>
          <a href="https://cs.uwatering.com/#anirro.com?nav=next" aria-label="Next site in CS Webring">›</a>
        </span>
      </div>
    </aside>
  );
}
