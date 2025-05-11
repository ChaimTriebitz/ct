"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { OrbitControls } from "@react-three/drei";
import { svgMap } from "@/assets/svgMap";
import { TechIcon } from "./TechIcon";

export const Scene = () => {
  const meshRef = useRef<Mesh>(null!);
  const techRefs = {
    js: useRef<Group>(null!),
    nextjs: useRef<Group>(null!),
    reactjs: useRef<Group>(null!),
    nodejs: useRef<Group>(null!),
    express: useRef<Group>(null!),
    mongodb: useRef<Group>(null!),
    scss: useRef<Group>(null!),
    css: useRef<Group>(null!),
    html: useRef<Group>(null!),
    typescript: useRef<Group>(null!),
    git: useRef<Group>(null!),
    github: useRef<Group>(null!),
    docker: useRef<Group>(null!),
    npm: useRef<Group>(null!),
    stripe: useRef<Group>(null!),
    redux: useRef<Group>(null!),
    redis: useRef<Group>(null!),
    prisma: useRef<Group>(null!),
    postgresql: useRef<Group>(null!),
    json: useRef<Group>(null!),
  };

  const techPositions: Record<string, [number, number, number]> = {
    reactjs: [0.75, 0.35, 0.75],
    nextjs: [-0.15, -0.45, -0.15],
    nodejs: [0.85, -0.25, 0.85],
    express: [-0.55, 0.35, -0.55],
    mongodb: [0.75, 0.25, 0.45],
    js: [-0.55, -0.35, 0.75],
    typescript: [-0.75, 0.45, 0.25],
    scss: [0.35, -0.75, -0.45],
    html: [0.75, -0.45, -0.25],
    css: [0.75, 0.5, -0.75],
    git: [-0.75, -0.45, 0.35],
    github: [0.45, -0.75, 0.25],
    docker: [-0.35, 0.75, -0.55],
    npm: [0.75, 0.25, -0.45],
    stripe: [-0.55, -0.35, -0.75],
    redux: [0.25, 0.75, 0.55],
    redis: [-0.75, 0.35, 0.85],
    prisma: [0.45, 0.75, -0.35],
    postgresql: [0.75, 0.25, 0.15],
    json: [-0.45, 0.35, -0.75],
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.5;
      meshRef.current.rotation.y += 0.5;
    }

    //  Object.values(techRefs).forEach((ref) => {
    //    if (ref.current) {
    //      ref.current.rotation.y += 0.01;
    //    }
    //  });
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={(Math.PI * 5) / 6}
        minDistance={2}
        maxDistance={4}
      />
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[2.0, 64, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
            metalness={0.1}
            roughness={0.5}
            envMapIntensity={0.1}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[2.0, 32, 32]} />
          <meshBasicMaterial
            color="#264653"
            blendColor={"#2a9d8f"}
            wireframe
            opacity={1}
          />
        </mesh>
        {Object.entries(svgMap.stack).map(([key, icon]) => (
          <TechIcon
            key={key}
            position={techPositions[key as keyof typeof techPositions]}
            iconRef={techRefs[key as keyof typeof techRefs]}
            icon={icon}
          />
        ))}
      </group>
    </>
  );
};
