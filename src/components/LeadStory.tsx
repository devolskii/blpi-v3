import Link from 'next/link'
import type {Article, Author} from '@/data/homepage'
import {shareActions} from '@/data/homepage'
import Byline from './ui/Byline'
import Highlight from './ui/Highlight'
import Img from './ui/Img'
import ShareBar from './ui/ShareBar'

type LeadStoryProps = {
  kicker: string
  title: string
  href: string
  deck: string
  image: string
  author: Author
  date: string
  related: Article[]
}

export default function LeadStory({
  kicker,
  title,
  href,
  deck,
  image,
  author,
  date,
  related,
}: LeadStoryProps) {
  return (
    <section className="grid gap-x-2.5 lg:grid-cols-[1fr_4.5fr] lg:h-157">
      <div className="relative z-10 flex flex-col justify-between lg:col-start-1 lg:row-start-1">
        <div className="pr-5 lg:absolute lg:left-0 lg:top-0 lg:w-107.5 lg:pr-0">
          <p className="font-sans text-base">{kicker}</p>
          <h2 className="mt-0 font-heading text-[36px] leading-[1.49]">
            <Link href={href}>
              <Highlight className="bg-white">{title}</Highlight>
            </Link>
          </h2>
          <div className="max-w-54">
            <p className="mt-5  bg-white font-serif text-lg italic leading-snug">{deck}</p>
            <Byline author={author} date={date} size="sm" className="mt-3 bg-white" />
          </div>
        </div>
        <div className="">
          <ul className=" grid grid-cols-3 gap-x-2 bg-white pt-1 lg:absolute lg:left-0 lg:top-105 lg:mt-0 lg:w-150 lg:pr-3 lg:pt-2 lg:h-54">
            {related.map((item) => (
              <li key={item.href} className="">
                <Link
                  href={item.href}
                  className="flex flex-col justify-between pt-0 lg:h-49 overflow-clip "
                >
                  <div className=" pt-0">
                    <p className=" min-h-12 font-heading text-sm">{item.title}</p>
                  </div>
                  <Img src={item.image} alt="" className=" mt-2.5 aspect-7/5 w-full " />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 lg:col-start-2 lg:row-start-1">
        <ShareBar actions={shareActions} />
        <div className="relative aspect-952/590 overflow-hidden">
          <Img src={image} alt={title} className="absolute inset-0 size-full" />
        </div>
      </div>
    </section>
  )
}
