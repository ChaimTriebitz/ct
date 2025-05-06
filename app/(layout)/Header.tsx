'use client'
import Image from "next/image";
import { Hamberger, NavBar } from "@/components";
import { LinkProp } from "@/types";
import { Theme } from "@/components/Theme";
import { useWindowSize } from "@/hooks";

export function Header() {
   const { isMobile } = useWindowSize()

   const links: LinkProp[] = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
   ]

   return (
      <header className="layout header">
         <Image
            src="/ME2.jpg"
            alt="logo"
            width={isMobile ? 35 : 50}
            height={isMobile ? 50 : 50}
         />
         <Theme />
         {/* <NavBar links={links} />
         {isMobile && <Hamberger />} */}
      </header>
   );
}
