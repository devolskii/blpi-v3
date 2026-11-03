import Link from 'next/link';
import type { Article } from '@/data/homepage';
import Byline from './ui/Byline';
import Img from './ui/Img';

type ArticleFeatureProps = {
  article: Article;
  layout?: 'stacked' | 'split' | 'split-row';
  imageClassName?: string;
  className?: string;
};

export default function ArticleFeature({
  article,
  layout = 'stacked',
  imageClassName = 'aspect-[7/5]',
  className = '',
}: ArticleFeatureProps) {
  const { title, href, deck, image, author, date } = article;

  if (layout === 'split') {
    return (
      <article className={`flex flex-col gap-3 ${className}`}>
        <Img src={image} alt="" className={`w-full ${imageClassName}`} />
        <div className="flex flex-col gap-3 md:gap-0">
          <h3 className="font-heading text-[28px] leading-[1.14] md:text-[22px] md:leading-tight lg:text-[31px]">
            <Link href={href}>{title}</Link>
          </h3>
          {deck && (
            <p className="font-serif text-[19px] italic leading-[1.35] md:mt-2 md:text-sm md:not-italic md:leading-snug lg:mt-3 lg:text-lg">
              {deck}
            </p>
          )}
          {author && (
            <Byline
              author={author}
              date={date}
              size="lg"
              className="md:row-span-2 md:mt-3 lg:mt-4"
            />
          )}
        </div>
      </article>
    );
  }

  if (layout === 'split-row') {
    return (
      <article className={`flex flex-col gap-3 md:gap-2.5 ${className}`}>
        <Img src={image} alt="" className={`w-full ${imageClassName}`} />
        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-[28px] leading-[1.14] md:text-[30px] md:leading-tight lg:text-[35px]">
            <Link href={href}>{title}</Link>
          </h3>
          <div className="flex gap-3">
            <div className="grow-10">
              {deck && (
                <p className="font-serif text-[19px] italic leading-[1.35] md:mt-2 md:text-lg md:not-italic md:leading-snug lg:text-2xl">
                  {deck}
                </p>
              )}
            </div>
            <div className="grow-1">
              {author && (
                <div className="flex md:justify-end">
                  <Byline author={author} date={date} size="sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`flex h-full flex-col gap-3 md:my-auto md:justify-between md:gap-2.5 ${className}`}
    >
      <Img src={image} alt="" className={`w-full ${imageClassName} max-md:aspect-[7/4]`} />
      <div className="flex flex-1 flex-col gap-3 md:items-center md:justify-around md:gap-0 md:text-center">
        <h3 className="font-heading text-[28px] leading-[1.14] md:text-[19px] md:leading-tight lg:text-[31px]">
          <Link href={href}>{title}</Link>
        </h3>
        {deck && (
          <p className="font-serif text-[19px] italic leading-[1.35] md:mt-2 md:text-lg md:not-italic md:leading-snug lg:text-2xl">
            {deck}
          </p>
        )}
        {author && (
          <div className="flex md:mt-3 md:justify-end">
            <Byline author={author} date={date} size="sm" />
          </div>
        )}
      </div>
    </article>
  );
}
