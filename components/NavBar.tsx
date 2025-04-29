'use client'
import Link from 'next/link'
import { LinkProp } from '@/types'
import { usePathname } from 'next/navigation'

interface Props {
   links: LinkProp[];
}

export function NavBar({ links }: Props) {
   const pathname = usePathname()

   return (
      <nav className='nav-bar'>
         {links.map((link) => (
            <Link
               className={pathname === link.href ? 'link active' : 'link'}
               key={link.name}
               href={link.href}
            >
               {link.name}
            </Link>
         ))}
      </nav>
   );
}
