'use client';

import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button type="button" aria-label="Toggle dark mode" onClick={toggle} className={className}>
      <FiMoon className="size-[22px] lg:size-[30px] dark:hidden" />
      <FiSun className="hidden size-[22px] lg:size-[30px] dark:block" />
    </button>
  );
}
