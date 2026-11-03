import Link from 'next/link';
import { sidebar } from '@/data/homepage';
import Byline from './ui/Byline';
import Highlight from './ui/Highlight';
import Img from './ui/Img';
import { FiPlay } from 'react-icons/fi';
import Divider from './ui/Divider';

type SidebarProps = typeof sidebar;

export default function Sidebar({ video, tabs, latest, quote, program, classic }: SidebarProps) {
  return (
    <aside className="flex min-w-0 flex-col gap-4 overflow-visible md:gap-2">
      <Link
        href={video.href}
        className="relative block aspect-[458/262] overflow-hidden md:mb-3 md:-mr-5 lg:-mr-15"
      >
        <Img src={video.image} alt={video.title} className="absolute inset-0 size-full" />
        <FiPlay
          aria-hidden
          className="absolute bottom-2.5 left-2.5 size-8 text-white lg:bottom-[15px] lg:left-[15px] lg:size-14"
        />
      </Link>

      <div>
        <div className="grid grid-cols-3 gap-2 text-center font-sans text-[11px] font-medium md:gap-1 md:text-[9px] lg:gap-2.5 lg:text-sm">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`h-11 md:h-auto md:pb-1 md:pt-0.5 ${index === 0 ? 'border-b-2 border-foreground text-foreground md:border-b' : 'text-muted'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:gap-0">
          {latest.map((item) => (
            <li
              key={item.href}
              className="flex items-start gap-4 border-b border-rule pb-4 md:items-center md:gap-2.5 md:border-b-0 md:py-2 lg:items-start lg:px-[5px] lg:py-2.5"
            >
              <Link
                href={item.href}
                className="flex-1 font-heading text-[17px] leading-[1.3] md:text-[10px] md:text-xs lg:text-lg lg:leading-snug"
              >
                {item.title}
              </Link>
              <Img
                src={item.image}
                alt=""
                className="aspect-[4/3] w-24 shrink-0 md:aspect-[5/3] md:w-[76px] lg:w-[101px]"
              />
            </li>
          ))}
        </ul>
      </div>
      <Divider className="my-3 max-md:my-0" />
      <blockquote className="mb-2 text-center font-serif italic">
        <p className="text-lg leading-snug lg:text-3xl">{quote.text}</p>
        <footer className="mt-4 text-base text-subtle">
          <cite className="text-xs lg:text-2xl">— {quote.attribution}</cite>
          <div className="text-xs not-italic lg:text-xl">({quote.date})</div>
        </footer>
      </blockquote>
      <Link href={quote.href} className="block">
        <Img src={quote.image} alt="" className="w-full" />
      </Link>
      <Divider className="my-3" />
      <Link href={program.href} className="block overflow-hidden md:-mr-5 lg:-mr-15">
        <Img src={program.image} alt="" className="w-full max-w-full !object-contain" />
        <h3 className="mt-2 font-heading text-xl lg:mr-15 lg:text-3xl">{program.title}</h3>
      </Link>
      <Divider className="my-3" />

      <article className="flex flex-col gap-2">
        <Img src={classic.image} alt="" className="aspect-[458/260] w-full" />
        <p className="font-sans text-xs">{classic.kicker}</p>
        <h3 className="font-heading text-lg leading-tight lg:text-[22px]">
          <Link href={classic.href}>
            <Highlight className="!bg-transparent !p-0">{classic.title}</Highlight>
          </Link>
        </h3>
        <div className="flex flex-col gap-3">
          <p className="font-serif text-base italic leading-snug lg:text-xl">{classic.deck}</p>
          {classic.author && <Byline author={classic.author} date={classic.date} size="sm" />}
        </div>
      </article>
    </aside>
  );
}
