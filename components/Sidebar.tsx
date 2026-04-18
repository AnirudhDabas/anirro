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

const linkBase =
  "no-underline hover:underline hover:decoration-1 hover:underline-offset-[6px]";
const linkActive = "underline decoration-1 underline-offset-[6px]";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 md:w-48">
      <nav className="flex flex-col gap-1">
        {primary.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? linkActive : linkBase}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <nav className="mt-8 flex flex-col gap-1">
        {secondary.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={linkBase}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div aria-hidden="true" className="mt-10 text-center text-[var(--muted)]">
        ‹ ⚜ ›
      </div>
      <p className="mt-2 text-center text-[0.7rem] text-[var(--muted)]">
        Inspired by{" "}
        <a
          href="https://www.zacharyyu.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] no-underline hover:underline"
        >
          Zachary Yu
        </a>
      </p>
    </aside>
  );
}
