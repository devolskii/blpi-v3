import Link from 'next/link';
import Highlight from './ui/Highlight';
import Img from './ui/Img';

type OverlayArticleProps = {
  title: string;
  href: string;
  image?: string;
  deck?: string;
  titleClassName?: string;
  imageClassName?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

export default function OverlayArticle({
  title,
  href,
  image,
  deck,
  titleClassName = 'text-[26px]',
  imageClassName = 'aspect-[7/5]',
  tone = 'light',
  className = '',
}: OverlayArticleProps) {
  const dark = tone === 'dark';
  return (
    <article className={`relative overflow-hidden ${className}`}>
      <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      <div
        className={`flex flex-col md:absolute md:inset-0 md:px-0 ${
          dark
            ? 'absolute inset-0 items-center justify-end p-6 text-center text-white md:justify-center md:p-0'
            : 'items-start pt-3 md:pt-0'
        }`}
      >
        <div className={dark ? 'flex flex-col items-center gap-6 bg-black/50 p-3 md:contents' : ''}>
          <h3
            className={`max-w-full font-heading text-[28px] leading-[1.18] md:leading-[1.48] ${titleClassName}`}
          >
            <Link href={href}>
              {dark ? (
                <Highlight className="max-md:bg-transparent bg-black/60">{title}</Highlight>
              ) : (
                <Highlight className="bg-background max-md:p-0">{title}</Highlight>
              )}
            </Link>
          </h3>

          {deck && (
            <p
              className={`max-w-full whitespace-pre-line font-serif text-lg leading-[1.35] wrap-break-word md:mt-3 md:px-2 md:text-[13px] md:leading-snug lg:mt-4 lg:text-[17px] ${dark ? 'bg-black/60 text-[#d1d5db] max-md:bg-transparent md:text-white' : 'text-subtle'}`}
            >
              {deck}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
