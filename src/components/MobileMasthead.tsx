'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FiChevronRight, FiMenu, FiUser, FiX } from 'react-icons/fi';
import { Link as IntlLink } from '@/i18n/navigation';
import ThemeToggle from './ui/ThemeToggle';

type MobileMastheadProps = {
  title: string;
  latestLabel: string;
  sectionsLabel: string;
  categories: { label: string; href: string; muted?: boolean }[];
  sections: { label: string; href: string }[];
  switchLocaleHref: string;
};

export default function MobileMasthead({
  title,
  latestLabel,
  sectionsLabel,
  categories,
  sections,
  switchLocaleHref,
}: MobileMastheadProps) {
  const [open, setOpen] = useState(false);
  const track = useRef<HTMLUListElement>(null);

  return (
    <div className="flex flex-col gap-2 px-5 pt-3 md:hidden">
      <div className="relative flex items-center justify-between">
        <button
          type="button"
          aria-label={sectionsLabel}
          aria-expanded={open}
          aria-controls="mobile-sections"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-[30px] items-center"
        >
          {open ? (
            <FiX className="size-[30px]" />
          ) : (
            <FiMenu className="size-[30px]" strokeWidth={1.5} />
          )}
        </button>

        <div className="flex h-11 items-center gap-3 min-[400px]:gap-[15px]">
          <button
            type="button"
            className="h-[22px] whitespace-nowrap border border-foreground px-3 font-sans text-[13px] font-bold leading-none"
          >
            {latestLabel}
          </button>
          <ThemeToggle className="flex size-[26px] items-center justify-center" />
          <Link
            href={switchLocaleHref}
            aria-label="Toggle language"
            className="flex h-11 items-center font-sans text-[13px] font-bold"
          >
            EN/BN
          </Link>
          <button type="button" aria-label="Account" className="flex h-11 items-center">
            <FiUser className="size-[25px]" strokeWidth={1.8} />
          </button>
        </div>

        {open && (
          <ul
            id="mobile-sections"
            className="absolute left-0 top-full z-30 mt-1 w-56 border border-rule bg-background py-1 font-sans text-sm shadow-lg"
          >
            {sections.map((item) => (
              <li key={item.label}>
                <IntlLink href={item.href} className="flex min-h-11 items-center px-4">
                  {item.label}
                </IntlLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link href="/" className="text-center font-heading text-[39px] leading-[1.1] text-foreground">
        {title}
      </Link>

      <div aria-hidden className="h-px w-full bg-rule" />

      <nav aria-label="Categories" className="flex h-[30px] items-center">
        <ul
          ref={track}
          className="flex h-[30px] min-w-0 flex-1 items-center gap-1.5 overflow-x-auto whitespace-nowrap font-sans text-[13px] font-medium [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((link) => (
            <li key={link.label} className="shrink-0">
              <Link
                href={link.href}
                className={`flex h-[30px] items-center border border-rule bg-background px-4 ${
                  link.muted ? 'rounded-full text-muted' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Scroll categories"
          onClick={() => track.current?.scrollBy({ left: 160, behavior: 'smooth' })}
          className="flex size-[30px] shrink-0 items-center justify-center"
        >
          <FiChevronRight className="size-4" strokeWidth={2} />
        </button>
      </nav>

      <div aria-hidden className="h-[3px] w-full bg-foreground" />
    </div>
  );
}
