/* eslint-disable @next/next/no-img-element */
type ImgProps = {
  src?: string
  alt?: string
  className?: string
}

export default function Img({src, alt = '', className = ''}: ImgProps) {
  if (!src) return <div aria-hidden className={`bg-neutral-300 ${className}`} />
  return <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />
}
