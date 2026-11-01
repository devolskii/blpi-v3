import Link from 'next/link'
import Highlight from './ui/Highlight'
import Img from './ui/Img'

type FeatureBannerProps = {
  title: string
  href: string
  deck: string
  image: string
}

export default function FeatureBanner({title, href, deck, image}: FeatureBannerProps) {
  return (
    <section className="relative aspect-[1620/1080] overflow-hidden">
      <Img src={image} alt={title} className="absolute inset-0 size-full" />
      <div className="relative flex flex-col items-start gap-6 pt-10">
        <h2 className="font-heading text-[40px] leading-tight md:text-[86px]">
          <Link href={href}>
            <Highlight className="bg-white">{title}</Highlight>
          </Link>
        </h2>
        <p className="max-w-[833px] font-heading text-xl leading-tight md:text-[31px]">
          <Highlight className="bg-white">{deck}</Highlight>
        </p>
      </div>
    </section>
  )
}
