"use client";
import Link from "next/link";
import { LinkProp } from "@/types";
import { usePathname } from "next/navigation";
import { Button } from "./Button";

interface Props {
  links: LinkProp[];
}

export function NavBar({ links }: Props) {
  const pathname = usePathname();

  return (
    <nav className="nav-bar">
      {links.map((link) => (
        <Link
          style={{ width: `${100 / links.length}%` }}
          key={link.name}
          href={link.href}
        >
          <Button name={link.name} active={pathname === link.href} />
        </Link>
      ))}
    </nav>
  );
} 