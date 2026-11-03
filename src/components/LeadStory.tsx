import Link from 'next/link';
import type { Article, Author } from '@/data/homepage';
import { shareActions } from '@/data/homepage';
import Byline from './ui/Byline';
import Divider from './ui/Divider';
import Highlight from './ui/Highlight';
import Img from './ui/Img';
import ShareBar from './ui/ShareBar';

type LeadStoryProps = {
  kicker: string;
  title: string;
  href: string;
  deck: string;
  image: string;
  author: Author;
  date: string;
  related: Article[];
};

export default function LeadStory({
  kicker,
  title,
  href,
  deck,
  image,
  author,
  date,
  related,
}: LeadStoryProps) {
  return (
    <section className="relative grid gap-x-4 gap-y-4 md:grid-cols-[148px_minmax(0,1fr)] lg:h-157 lg:grid-cols-[1fr_4.5fr] lg:gap-x-2.5 lg:gap-y-0">
      <div className="relative z-10 md:col-start-1 md:row-start-1">
        <div className="md:absolute md:left-0 md:top-0 md:w-105 lg:w-107.5">
          <p className="font-sans text-[13px] text-muted md:text-foreground lg:text-base">
            {kicker}
          </p>
          <h2 className="mt-4 font-heading text-[36px] leading-[1.14] md:mt-0 md:text-[30px] md:leading-[1.35] lg:text-[36px] lg:leading-[1.49]">
            <Link href={href}>
              <Highlight className="bg-background">{title}</Highlight>
            </Link>
          </h2>
          <div className="md:max-w-37 lg:max-w-54">
            <p className="mt-4 bg-background font-serif text-[19px] italic leading-[1.20] md:mt-2 md:text-[10px] md:leading-[1.24] lg:mt-5 lg:text-lg lg:leading-snug">
              {deck}
            </p>
            <Byline author={author} date={date} size="sm" className="mt-4 bg-background md:mt-3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 md:col-start-2 md:row-start-1 lg:col-start-2">
        <ShareBar
          actions={shareActions}
          className="order-2 max-md:justify-between max-md:gap-0 md:order-none"
        />
        <div className="relative aspect-73/48 overflow-hidden max-md:order-1 lg:aspect-952/590">
          <Img src={image} alt={title} className="absolute inset-0 size-full" />
        </div>
      </div>

      <Divider className="md:hidden" />

      <ul className="z-10 grid grid-cols-1 gap-4 bg-background md:grid-cols-3 md:gap-3 md:col-span-2 md:row-start-2 md:absolute md:left-0 md:top-[-115] md:h-29 md:w-100 md:gap-x-2 md:bg-panel md:pr-3 md:pt-2 lg:absolute lg:left-0 lg:top-[-215] lg:h-54 lg:w-150 lg:gap-x-2 lg:bg-panel lg:pr-3 lg:pt-2">
        {related.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center gap-4 overflow-clip max-md:flex-row-reverse md:flex-col md:items-stretch md:justify-between md:gap-2 lg:h-49 lg:gap-0"
            >
              <p className="flex-1 font-heading text-xl leading-[1.2] md:text-[9px] md:leading-[1.15] lg:min-h-12 lg:text-sm lg:leading-normal">
                {item.title}
              </p>
              <Img
                src={item.image}
                alt=""
                className="aspect-4/3 w-[104px] shrink-0 md:aspect-7/4 md:w-full lg:mt-2.5 lg:aspect-7/5"
              />
            </Link>
          </li>
        ))}
      </ul>

      <div aria-hidden className="h-[3px] w-full bg-foreground md:hidden" />
    </section>
  );
}
