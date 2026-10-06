"use client";
import Link from "next/link";
import { LinkProp } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./Button";

interface Props {
   links: LinkProp[];
}

export function NavBar({ links }: Props) {
   const pathname = usePathname();
   const [pendingHref, setPendingHref] = useState<string | null>(null);

   useEffect(() => {
      setPendingHref(null);
   }, [pathname]);

   return (
      <nav className="nav-bar">
         {links.map((link) => (
            <Link
               style={{ width: `${100 / links.length}%` }}
               key={link.name}
               href={link.href}
               onClick={(event) => {
                  if (
                     event.button === 0 &&
                     !event.metaKey &&
                     !event.ctrlKey &&
                     !event.shiftKey &&
                     !event.altKey
                  ) {
                     setPendingHref(link.href);
                  }
               }}
            >
               <Button
                  name={link.name}
                  active={pathname === link.href || pendingHref === link.href}
               />
            </Link>
         ))}
      </nav>
   );
} 