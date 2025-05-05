"use client";
import {
  CanvasThreeJs,
  ModelLoader,
  RotatingIcon,
  Scene,
  Stack,
  SVG,
} from "@/components";

export default function Home() {
  return (
    <main className="main home">
      <section>
        <h1>Chaim Triebitz</h1>
        <h3>Fullstack Developer | JavaScript, React, Node.js, MongoDB</h3>
        <p>
          Welcome to my portfolio! I build modern, performant web applications
          using MERN stack and Next.js.
        </p>
      </section>
      <section>
        <Stack />
      </section>
      <section>
        {/* <SVG /> */}
        <CanvasThreeJs>
          <RotatingIcon svgPath="./stack/baba2.glb" />
          {/* <Scene /> */}
          {/* <ModelLoader /> */}
        </CanvasThreeJs>
      </section>
      <section>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
      </section>
      <section>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
      </section>
      <section>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
        <h1>Welcome To My Portfolio</h1>
      </section>
    </main>
  );
}
