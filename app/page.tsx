"use client";
import { svgMap } from "@/assets";
import {
   Button,
   FlipCard,
} from "@/components";
import Link from "next/link";

export default function Home() {
   return (
      <main className="main home">
         <h1>Hello World</h1>
         {/* <FlipCard image={{ src: "/ME2.jpg", alt: "me" }}>
            <h1>Chaim Triebitz</h1>
            <h2>Fullstack Developer</h2>
            <h3>Fullstack Developer</h3>
            <p>I build modern, performant web applications using the latest best stack and technology <span>🚀</span></p>
         </FlipCard> */}
         <div style={{ flexDirection: 'row' }}>
            {Object.entries(svgMap.stack).map(([key, icon]) => (
               <div style={{ width: '50px' }} key={key}>{icon}</div>
            ))}
         </div>

      </main>
   );
}
