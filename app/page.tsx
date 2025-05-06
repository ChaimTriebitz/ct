"use client";
import {
   Button,
   CanvasThreeJs,
   FlipCard,
   ModelLoader,
   RotatingIcon,
   Scene,
   Stack,
   SVG,
} from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <main className="main home">
         <h1>Hello World</h1>
         {/* <FlipCard image={{ src: "/ME2.jpg", alt: "me" }}>
            <h1>Chaim Triebitz</h1>
            <h3>Fullstack Developer</h3>
            <p>
               Welcome to my portfolio! I build modern, performant web applications
               using MERN stack and Next.js.
            </p>
         </FlipCard> */}
         <Link href="/stack-overview"><Button name="CHECKOUT MY STACK"/></Link>
      </main>
   );
}
