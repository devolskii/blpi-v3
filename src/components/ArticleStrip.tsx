import {Fragment} from 'react'
import Link from 'next/link'
import type {Article} from '@/data/homepage'
import Divider from './ui/Divider'
import Img from './ui/Img'

export default function ArticleStrip({articles}: {articles: Article[]}) {
  return (
    <section className="grid grid-cols-2 gap-x-[5px] gap-y-6 lg:flex lg:gap-x-[5px]">
      {articles.map((article, index) => {
        const titleSize =
          article.title.length < 45
            ? 'text-3xl'
            : article.title.length < 85
              ? 'text-2xl'
              : 'text-xl'
        return (
          <Fragment key={article.href}>
            {index > 0 && <Divider vertical className="hidden lg:block" />}
            <article className="h-100 flex flex-1 flex-col gap-2.5 overflow-hidden">
              <Img src={article.image} alt="" className="aspect-[794/568] w-full" />
              <h3 className={`my-auto text-center font-heading leading-tight ${titleSize}`}>
                <Link href={article.href}>{article.title}</Link>
              </h3>
            </article>
          </Fragment>
        )
      })}
    </section>
  )
}
