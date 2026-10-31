import type {Author} from '@/data/homepage'
import Img from './Img'

type BylineProps = {
  author: Author
  date?: string
  size?: 'sm' | 'lg'
  className?: string
}

export default function Byline({author, date, size, className = ''}: BylineProps) {
  const avatar = size === 'lg' ? 'size-20' : 'h-11 w-10'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {author.avatar && (
        <Img src={author.avatar} alt={author.name} className={`${avatar} shrink-0 rounded-full`} />
      )}
      <div className="font-ancizar leading-snug text-[#4c4c4c]">
        <div className={`${size === 'lg' ? 'text-lg' : 'text-sm'} text-black`}>
          By {author.name}
        </div>
        {date && <div className={size === 'lg' ? 'text-sm' : 'text-[11px]'}>{date}</div>}
      </div>
    </div>
  )
}
