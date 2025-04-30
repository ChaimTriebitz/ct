'use client'
import Link from 'next/link'
import { LinkProp } from '@/types'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


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
               <motion.span
                  initial={false}
                  className="underline"
                  animate={{
                     opacity: pathname === link.href ? 1 : 0,
                     scaleX: pathname === link.href ? 1 : 0,
                  }}
                  transition={{
                     type: 'spring',
                     damping: 12.5,
                     duration: 0.25,
                     bounce: 100,
                  }}
               />
            </Link>
         ))}
      </nav>
   );
}


