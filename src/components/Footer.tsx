import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { FiRss } from 'react-icons/fi';
import { footer } from '@/data/homepage';

const tabletOrder = [
  'md:order-1',
  'md:order-4',
  'md:order-2',
  'md:order-3',
  'md:order-5',
  'md:order-6',
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1620px] border-t-4 border-heavy px-5 pb-4 pt-3 md:px-8 lg:border-t-[5px] 2xl:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule/35 pb-3">
        <Link
          href="/"
          className="order-1 font-heading text-[32px] leading-none md:text-[40px] lg:order-2"
        >
          International Path
        </Link>
        <div className="order-2 flex gap-3 text-foreground lg:order-3" aria-label="Social links">
          <FaFacebookF className="size-4" />
          <FaXTwitter className="size-4" />
          <FaWhatsapp className="size-4" />
          <FiRss className="size-4" />
        </div>
        <form
          className="order-3 flex h-9 w-full border border-rule lg:order-1 lg:max-w-[440px] lg:border-foreground md:h-11 lg:h-9"
          action="#"
        >
          <input
            type="email"
            placeholder={footer.newsletterPlaceholder}
            aria-label="Email address"
            className="min-w-0 flex-1 bg-transparent px-3 font-sans text-sm outline-none placeholder:text-muted md:px-4 lg:text-xs"
          />
          <button
            type="submit"
            className="bg-foreground px-6 font-sans text-sm font-bold text-background md:w-[158px] md:text-[17px] md:font-semibold lg:w-auto lg:text-sm lg:font-bold"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-6 py-3 md:grid-cols-3 md:gap-x-6 md:gap-y-7 md:py-5 lg:grid-cols-7 lg:py-3">
        {footer.columns.map((column, index) => (
          <div key={column.title} className={`${tabletOrder[index]} lg:order-none`}>
            <h4 className="font-sans text-xs font-semibold leading-5 text-foreground">
              {column.title}
            </h4>
            <ul className="mt-1 grid grid-cols-1 gap-0.5 font-sans text-sm font-normal text-soft md:text-xs md:font-semibold lg:text-[13px]">
              {column.links.map((label) => (
                <li key={label}>
                  <Link href="#" className="flex min-h-11 items-center md:min-h-0">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="order-7 col-span-3 md:col-span-3 lg:order-none lg:col-span-1">
          <h4 className="font-sans text-xs font-semibold leading-5 text-foreground">
            {footer.shareAndRead.title}
          </h4>
          <p className="mt-1 font-sans text-xs text-soft">{footer.shareAndRead.text}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-rule/35 pt-2 font-sans text-[9px] text-soft">
        <span>{footer.copyright}</span>
        <ul className="flex flex-wrap gap-4">
          {footer.legal.map((label) => (
            <li key={label}>
              <Link href="#">{label}</Link>
            </li>
          ))}
        </ul>
        <span>{footer.credit}</span>
      </div>
    </footer>
  );
}
