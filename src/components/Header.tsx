import Link from 'next/link'
import {navLinks} from '@/data/homepage'
import {FiChevronDown, FiMoon, FiSearch, FiUser} from 'react-icons/fi'

const outlineBtn = 'flex h-[38px] items-center justify-center border border-black px-4 font-dm-sans font-bold'

export default function Header() {
  return (
    <header className="mx-auto w-full max-w-[1620px] bg-white px-4 pt-3 2xl:px-0">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex items-center gap-2">
          <button type="button" className={`${outlineBtn} w-[185px] gap-2 text-[17px]`}>
            <FiChevronDown size={20} />
            SECTIONS
          </button>
          <button type="button" aria-label="Search" className="flex h-[38px] items-center border border-[#909090] px-2">
            <FiSearch size={24} />
          </button>
        </div>

        <Link href="/" className="text-center font-dm-serif-display text-[40px] leading-none text-black lg:text-[66px]">
          International Path
        </Link>

        <div className="flex items-center justify-end gap-6">
          <button type="button" className={`${outlineBtn} w-[185px] text-[22px]`}>
            Latest Edition
          </button>
          <button type="button" aria-label="Toggle dark mode">
            <FiMoon size={30} />
          </button>
          <span className="font-dm-sans text-[21px] font-bold">EN/BN</span>
          <button type="button" aria-label="Account">
            <FiUser size={36} />
          </button>
        </div>
      </div>

      <nav className="mt-2 border-b-[5px] border-black pb-[5px]">
        <ul className="grid grid-cols-9 border-b border-[#b0aeae] pb-1 pt-0.5 text-center font-dm-sans text-[19px] font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={link.muted ? 'text-[#898989]' : 'text-black'}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
