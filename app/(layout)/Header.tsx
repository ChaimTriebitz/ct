"use client";

import { NavBar } from "@/components/NavBar";
import { LinkProp } from "@/types";

const links: LinkProp[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/contact", name: "Contact" },
];

export function Header() {
  return (
    <header className="header">
      <NavBar links={links} />
    </header>
  );
}
