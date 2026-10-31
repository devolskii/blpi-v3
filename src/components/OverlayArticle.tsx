import Link from 'next/link'
import Highlight from './ui/Highlight'
import Img from './ui/Img'

type OverlayArticleProps = {
  title: string
  href: string
  image?: string
  deck?: string
  titleClassName?: string
  imageClassName?: string
  tone?: 'light' | 'dark'
  className?: string
}

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
  const dark = tone === 'dark'
  return (
    <article className={`relative overflow-hidden ${className}`}>
      <Img src={image} alt="" className={`w-full ${imageClassName}`} />
      <div
        className={`absolute inset-0 flex flex-col px-0 ${dark ? 'justify-center items-center text-center text-white' : 'items-start'}`}
      >
        <h3 className={`font-dm-serif-display leading-[1.48] max-w-full ${titleClassName}`}>
          <Link href={href}>
            {dark ? (
              <Highlight className="bg-black/60">{title}</Highlight>
            ) : (
              <Highlight className="bg-white">{title}</Highlight>
            )}
          </Link>
        </h3>

        {deck && (
          <p
            className={`mt-4 px-2 font-ancizar text-[17px] leading-snug whitespace-pre-line max-w-full wrap-break-word ${dark ? 'text-white bg-black/60' : 'text-gray-600'}`}
          >
            {deck}
          </p>
        )}
      </div>
    </article>
  )
}
