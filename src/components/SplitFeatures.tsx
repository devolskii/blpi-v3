import Link from 'next/link'
import type {Article} from '@/data/homepage'
import Img from './ui/Img'

export default function SplitFeatures({articles}: {articles: Article[]}) {
  return (
    <section className="grid gap-6 border-t border-[#b0aeae] pt-4 md:grid-cols-2 md:gap-0">
      {articles.map((article, index) => (
        <article
          key={article.href}
          className={`grid grid-cols-[1fr_1.4fr] items-center gap-4 ${index > 0 ? 'md:border-l md:border-[#b0aeae] md:pl-4' : 'md:pr-4'}`}
        >
          <Img src={article.image} alt="" className="aspect-[4/3] w-full" />
          <h3 className="font-dm-serif-display text-[30px] leading-tight">
            <Link href={article.href}>{article.title}</Link>
          </h3>
        </article>
      ))}
    </section>
  )
}
