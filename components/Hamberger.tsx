'use client'
import { svgs } from "@/assets"
import { useState } from "react"
export function Hamberger() {

   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

   return (
      <button
         className={isMenuOpen ? 'hamberger open' : 'hamberger'}
         onClick={() => setIsMenuOpen(prev => !prev)}
         onBlur={() => setIsMenuOpen(false)}
         aria-label="Menu"
         title={isMenuOpen ? "Close menu" : "Open menu"}
      >
         {svgs.hamberger}
      </button>
   )
}
