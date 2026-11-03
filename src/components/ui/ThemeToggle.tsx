'use client';

import { useSyncExternalStore } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => false;

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
    listeners.forEach((listener) => listener());
  };

  const Icon = isDark ? FiSun : FiMoon;

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      className={`relative z-10 cursor-pointer ${className}`}
    >
      <Icon className="size-[22px] lg:size-[30px]" />
    </button>
  );
}
