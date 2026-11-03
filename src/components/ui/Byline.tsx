import type { Author } from '@/data/homepage';
import Img from './Img';

type BylineProps = {
  author: Author;
  date?: string;
  size?: 'sm' | 'lg';
  className?: string;
};

export default function Byline({ author, date, size, className = '' }: BylineProps) {
  const avatar =
    size === 'lg' ? 'h-11 w-10 md:size-12 lg:size-20' : 'h-11 w-10 md:h-8 md:w-7 lg:h-11 lg:w-10';
  return (
    <div className={`flex items-center gap-2.5 md:gap-3 ${className}`}>
      {author.avatar && (
        <Img src={author.avatar} alt={author.name} className={`${avatar} shrink-0 rounded-full`} />
      )}
      <div className="font-serif leading-snug text-subtle">
        <div
          className={`${size === 'lg' ? 'text-base md:text-sm lg:text-lg' : 'text-base md:text-[11px] lg:text-sm'} text-foreground`}
        >
          By {author.name}
        </div>
        {date && (
          <div
            className={
              size === 'lg'
                ? 'text-[13px] md:text-xs lg:text-sm'
                : 'text-[13px] md:text-[9px] lg:text-[11px]'
            }
          >
            {date}
          </div>
        )}
      </div>
    </div>
  );
}
