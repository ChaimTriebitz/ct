"use client";
import { NavBar } from "@/components";
import { LinkProp } from "@/types";
import { Theme } from "@/components/Theme";

export function Header() {
  const links: LinkProp[] = [
    { name: "Home", href: "/" },
    { name: "Stack", href: "/stack" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="layout header">
      <NavBar links={links} />
      <Theme />
    </header>
  );
}
