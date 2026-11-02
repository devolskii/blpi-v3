import Link from 'next/link';
import type { Article } from '@/data/homepage';
import Byline from './ui/Byline';
import Img from './ui/Img';

type ArticleFeatureProps = {
  article: Article;
  layout?: 'stacked' | 'split' | 'split-row';
  imageClassName?: string;
};

export default function ArticleFeature({
  article,
  layout = 'stacked',
  imageClassName = 'aspect-[7/5]',
}: ArticleFeatureProps) {
  const { title, href, deck, image, author, date } = article;

  if (layout === 'split') {
    return (
      <article className="grid items-center gap-2.5 md:grid-cols-[208px_1fr]">
        <div className="flex flex-col">
          <h3 className="font-heading text-[31px] leading-tight">
            <Link href={href}>{title}</Link>
          </h3>
          {deck && <p className="mt-3 font-serif text-lg leading-snug">{deck}</p>}
          {author && <Byline author={author} date={date} size="lg" className="mt-4" />}
        </div>
        <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      </article>
    );
  }

  if (layout === 'split-row') {
    return (
      <article className="flex flex-col gap-2.5">
        <Img src={image} alt="" className={`w-full ${imageClassName}`} />
        <div className="flex">
          <div>
            <h3 className="font-heading text-[31px] leading-tight">
              <Link href={href}>{title}</Link>
            </h3>
            {deck && <p className="mt-2 font-serif text-[17px] leading-snug">{deck}</p>}
          </div>
          {author && (
            <div className="flex justify-end">
              <Byline author={author} date={date} size="lg" />
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col gap-2.5 justify-between my-auto">
      <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      <div className="flex flex-1 flex-col justify-around items-center text-center">
        <h3 className="font-heading text-[31px] leading-tight">
          <Link href={href}>{title}</Link>
        </h3>
        {deck && <p className="mt-2 font-serif text-[17px] leading-snug">{deck}</p>}
        {author && (
          <div className="mt-3 flex justify-end">
            <Byline author={author} date={date} size="sm" />
          </div>
        )}
      </div>
    </article>
  );
}
