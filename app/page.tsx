"use client";
import { svgMap } from "@/assets";
import { Button, FlipCard } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main home">
      <section className="home-section">
        <h1>Hello World</h1>
          <h2>Chaim Triebitz</h2>
          <h4>Fullstack Developer</h4>
          <p>
            I build modern, performant web applications using the latest best
            stack and technology <span>🚀</span>
          </p>
        {/* <div style={{ flexDirection: "row" }}>
          {Object.entries(svgMap.stack).map(([key, icon]) => (
            <div style={{ width: "50px" }} key={key}>
              {icon}
            </div>
          ))}
        </div> */}
      </section>
    </main>
  );
}
