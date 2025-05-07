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
    reactjs: useRef<Group>(null!),
    nextjs: useRef<Group>(null!),
    nodejs: useRef<Group>(null!),
    express: useRef<Group>(null!),
    mongodb: useRef<Group>(null!),
    js: useRef<Group>(null!),
    scss: useRef<Group>(null!),
  };

  const techPositions: Record<string, [number, number, number]> = {
    reactjs: [-0.7, 0.3, 0],
    nextjs: [0.7, -0.3, 0],
    nodejs: [0, 0.6, 0.5],
    express: [0, -0.6, 0.5],
    mongodb: [0.5, 0.4, 0.8],
    js: [0.5, -0.4, 1.0],
    scss: [-0.5, 0.4, 1.0],
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }

    Object.values(techRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += 0.01;
      }
    });
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={Math.PI}
        maxDistance={Math.PI}
      />
      <group scale={[1, 1, 1]} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.5, 64, 64]} />
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
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial
            color="#2a9d8f"
            transparent
            wireframe
            blendColor={"#264653"}
            opacity={0.2}
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
