import Link from 'next/link';
import Img from './ui/Img';

type CampaignCardProps = {
  title: string;
  href: string;
  image: string;
  ctaLabel: string;
  imageClassName?: string;
};

export default function CampaignCard({
  title,
  href,
  image,
  ctaLabel,
  imageClassName = 'aspect-[64/87]',
}: CampaignCardProps) {
  return (
    <article className="flex flex-col items-center gap-2">
      <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      <h3 className="px-1 text-center font-heading text-2xl leading-tight">{title}</h3>
      <Link
        href={href}
        className="flex h-9 w-[164px] items-center justify-center border border-black font-heading text-base"
      >
        {ctaLabel}
      </Link>
    </article>
  );
}
