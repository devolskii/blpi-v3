import Link from 'next/link';
import { navLinks } from '@/data/homepage';
import { FiChevronDown, FiSearch, FiUser } from 'react-icons/fi';
import { useLocale, useTranslations } from 'next-intl';
import ThemeToggle from './ui/ThemeToggle';
import MobileMasthead from './MobileMasthead';

const sectionKeys = ['frontpage', 'politics', 'economics', 'philosophy', 'history', 'videos'];

const outlineBtn =
  'flex h-[30px] items-center justify-center border border-foreground px-3 font-sans font-bold lg:h-[38px] lg:px-4';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  return (
    <header className="mx-auto w-full max-w-[1620px] bg-background md:px-15 md:pt-5 lg:pt-3 2xl:px-0">
      <MobileMasthead
        title={t('title')}
        latestLabel={t('latest')}
        sectionsLabel={t('sections')}
        categories={navLinks.map((link) => ({ ...link, label: t(link.label) }))}
        sections={sectionKeys.map((key) => ({ label: t(`sections_list.${key}`), href: '#' }))}
        switchLocaleHref={locale === 'en' ? '/bn' : '/en'}
      />

      <div className="hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={`${outlineBtn} gap-2 text-[11px] lg:w-[185px] lg:text-[17px]`}
          >
            <FiChevronDown className="size-3 lg:size-5" />
            {t('sections')}
          </button>
          <button
            type="button"
            aria-label="Search"
            className="flex h-[30px] items-center border border-[#909090] px-1 lg:h-[38px] lg:px-2"
          >
            <FiSearch className="size-5 lg:size-6" />
          </button>
        </div>
        <div className="grow text-center">
          <Link
            href="/"
            className="font-heading text-[42px] leading-none text-foreground lg:text-[66px]"
          >
            {t('title')}
          </Link>
        </div>

        <div className="flex items-center justify-between gap-4 lg:gap-6">
          <button type="button" className={`${outlineBtn} text-xs lg:w-[185px] lg:text-[22px]`}>
            {t('latest')}
          </button>
          <ThemeToggle />
          <Link href={locale === 'en' ? '/bn' : '/en'} aria-label="Toggle language">
            <span className="font-sans text-xs font-bold lg:text-[21px]">EN/বাং</span>
          </Link>
          <button type="button" aria-label="Account">
            <FiUser className="size-6 lg:size-9" />
          </button>
        </div>
      </div>

      <nav className="mt-2 hidden border-b-4 border-heavy pb-1 md:block lg:border-b-[5px] lg:pb-[5px]">
        <ul className="grid grid-cols-9 whitespace-nowrap border-t border-rule py-2 text-center font-sans text-sm font-medium lg:border-t-0 lg:border-b lg:pb-1 lg:pt-0.5 lg:text-[19px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={link.muted ? 'text-muted' : 'text-foreground'}>
                {t(link.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
