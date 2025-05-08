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
      { name: "Stack", href: "/stack" },
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
         <NavBar links={links} />
         <Theme />
         {/* {isMobile && <Hamberger />} */}
      </header>
   );
}
