import Link from 'next/link';
import {sidebar} from '@/data/homepage';
import Byline from './ui/Byline';
import Highlight from './ui/Highlight';
import Img from './ui/Img';
import {FiPlay} from 'react-icons/fi';
import Divider from './ui/Divider';

type SidebarProps = typeof sidebar;

export default function Sidebar({video, tabs, latest, quote, program, classic}: SidebarProps) {
  return (
    <aside className="flex min-w-0 flex-col gap-2 overflow-visible">
      <Link
        href={video.href}
        className="relative block aspect-[458/262] overflow-hidden -mr-15 mb-3"
      >
        <Img src={video.image} alt={video.title} className="absolute inset-0 size-full" />
        <FiPlay size={57} className="absolute bottom-[15px] left-[15px]" aria-hidden />
      </Link>

      <div>
        <div className="grid grid-cols-3 gap-2.5 text-center font-sans text-sm font-medium">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`pb-1 pt-0.5 ${index === 0 ? 'border-b border-black text-black' : 'text-[#898989]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul>
          {latest.map((item) => (
            <li key={item.href} className="flex items-start gap-2.5 px-[5px] py-2.5">
              <Link href={item.href} className="flex-1 font-serif text-[15px] leading-snug">
                {item.title}
              </Link>
              <Img src={item.image} alt="" className="aspect-[5/3] w-[101px] shrink-0" />
            </li>
          ))}
        </ul>
      </div>
      <Divider className="my-3" />
      <blockquote className="py-4 text-center font-serif italic">
        <p className="text-3xl leading-snug">{quote.text}</p>
        <footer className="mt-4 text-base text-[#4c4c4c]">
          <cite className="text-2xl">— {quote.attribution}</cite>
          <div className="text-xl not-italic">({quote.date})</div>
        </footer>
      </blockquote>
      <Link href={quote.href} className="block">
        <Img src={quote.image} alt="" className="w-full" />
      </Link>
      <Divider className="my-3" />
      <Link href={program.href} className="block overflow-hidden -mr-15">
        <Img src={program.image} alt="" className="w-full max-w-full !object-contain" />
        <h3 className="mt-2 font-heading text-3xl mr-15">{program.title}</h3>
      </Link>
      <Divider className="my-3" />

      <article className="flex flex-col gap-2">
        <Img src={classic.image} alt="" className="aspect-[458/260] w-full" />
        <p className="font-sans text-xs">{classic.kicker}</p>
        <h3 className="font-heading text-[22px] leading-tight">
          <Link href={classic.href}>
            <Highlight className="!bg-transparent !p-0">{classic.title}</Highlight>
          </Link>
        </h3>
        <div className="flex flex-col gap-3">
          <p className="font-serif text-xl italic leading-snug">{classic.deck}</p>
          {classic.author && <Byline author={classic.author} date={classic.date} size="sm" />}
        </div>
      </article>
    </aside>
  );
}
