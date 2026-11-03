import Link from 'next/link';
import Img from './ui/Img';

type CampaignCardProps = {
  title: string;
  href: string;
  image: string;
  ctaLabel: string;
  imageClassName?: string;
  className?: string;
};

export default function CampaignCard({
  title,
  href,
  image,
  ctaLabel,
  imageClassName = 'aspect-[64/87]',
  className = '',
}: CampaignCardProps) {
  return (
    <article className={`flex flex-col items-center gap-4 md:gap-2 ${className}`}>
      <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      <h3 className="px-1 text-center font-heading text-[23px] leading-[1.25] md:text-lg md:leading-[1.23] lg:text-2xl lg:leading-tight">
        {title}
      </h3>
      <Link
        href={href}
        className="flex min-h-11 items-center justify-center border border-foreground px-7 font-heading text-sm md:h-9 md:min-h-0 md:px-5 md:text-xs lg:w-[164px] lg:px-0 lg:text-base"
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
