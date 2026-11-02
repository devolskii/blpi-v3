import Link from 'next/link';
import { footer } from '@/data/homepage';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1620px] border-t-[5px] border-black px-4 pb-4 pt-3 2xl:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#b0aeae]/35 pb-3">
        <form className="flex h-9 w-full max-w-[440px] border border-black" action="#">
          <input
            type="email"
            placeholder={footer.newsletterPlaceholder}
            aria-label="Email address"
            className="min-w-0 flex-1 px-3 font-sans text-xs outline-none"
          />
          <button type="submit" className="bg-black px-6 font-sans text-sm font-bold text-white">
            Subscribe
          </button>
        </form>
        <Link href="/" className="font-heading text-[40px] leading-none">
          International Path
        </Link>
        <div className="flex gap-3 font-sans text-xs font-bold" aria-label="Social links">
          <span>f</span>
          <span>X</span>
          <span>W</span>
          <span>RSS</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 py-3 md:grid-cols-7">
        {footer.columns.map((column) => (
          <div key={column.title}>
            <h4 className="font-sans text-xs font-semibold leading-5 text-[#1f1f1f]">
              {column.title}
            </h4>
            <ul className="mt-1 grid grid-cols-1 gap-0.5 font-sans text-[13px] font-semibold text-[#525252]">
              {column.links.map((label) => (
                <li key={label}>
                  <Link href="#">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-sans text-xs font-semibold leading-5 text-[#1f1f1f]">
            {footer.shareAndRead.title}
          </h4>
          <p className="mt-1 font-sans text-xs text-[#525252]">{footer.shareAndRead.text}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#b0aeae]/35 pt-2 font-sans text-[9px] text-[#525252]">
        <span>{footer.copyright}</span>
        <ul className="flex gap-4">
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
