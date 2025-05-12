"use client";

import { Theme } from "@/components";
import { NavBar } from "@/components/NavBar";
import { LinkProp } from "@/types";

const links: LinkProp[] = [
   { href: "/", name: "Home" },
   { href: "/projects", name: "Projects" },
   // { href: "/contact", name: "Contact" },
   { href: "/stack", name: "Stack" },
];

export function Header() {
   return (
      <header className="header">
         <NavBar links={links} />
         <Theme />
      </header>
   );
}
