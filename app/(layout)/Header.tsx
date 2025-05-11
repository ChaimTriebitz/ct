"use client";
import Image from "next/image";
import { Hamberger, NavBar } from "@/components";
import { LinkProp } from "@/types";
import { Theme } from "@/components/Theme";
import { useWindowSize } from "@/hooks";

export function Header() {
  const { isMobile } = useWindowSize();

  const links: LinkProp[] = [
    { name: "Home", href: "/" },
    { name: "Stack", href: "/stack" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="layout header">
      <NavBar links={links} />
      <Theme />
      {/* {isMobile && <Hamberger />} */}
    </header>
  );
}
