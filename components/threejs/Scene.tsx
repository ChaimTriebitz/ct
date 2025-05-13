"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { OrbitControls } from "@react-three/drei";
import { svgMap } from "@/assets/svgMap";
import { TechIcon } from "./TechIcon";

export const Scene = () => {
  const meshRef = useRef<Mesh>(null!);
  const ref1 = useRef<Group>(null!);
  const ref2 = useRef<Group>(null!);
  const ref3 = useRef<Group>(null!);
  const ref4 = useRef<Group>(null!);
  const ref5 = useRef<Group>(null!);
  const ref6 = useRef<Group>(null!);
  const ref7 = useRef<Group>(null!);
  const ref8 = useRef<Group>(null!);
  const ref9 = useRef<Group>(null!);
  const ref10 = useRef<Group>(null!);
  const ref11 = useRef<Group>(null!);
  const ref12 = useRef<Group>(null!);
  const ref13 = useRef<Group>(null!);
  const ref14 = useRef<Group>(null!);
  const ref15 = useRef<Group>(null!);
  const ref16 = useRef<Group>(null!);
  const ref17 = useRef<Group>(null!);
  const ref18 = useRef<Group>(null!);
  const ref19 = useRef<Group>(null!);

  const refs = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9,
    ref10,
    ref11,
    ref12,
    ref13,
    ref14,
    ref15,
    ref16,
    ref17,
    ref18,
    ref19,
  ];

  const icons = useMemo(
    () =>
      Object.entries(svgMap.stack)
        .sort(() => Math.random() - 0.5)
        .map(([key, icon], index) => ({
          key,
          icon,
          ref: refs[index],
          position: [
            Math.random() * 1.5 - 1,
            Math.random() * 1.5 - 1,
            Math.random() * 1.5 - 1,
          ] as [number, number, number],
        })),
    [refs]
  );

  useFrame(() => {
    Object.values(icons).forEach((icon) => {
      if (icon.ref.current) {
        const randomSpeed = Math.random() * (0.04 - 0.02) + 0.02;
        icon.ref.current.rotation.y += randomSpeed;
      }
    });
  });

  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={(Math.PI * 5) / 6}
        minDistance={2}
        maxDistance={6}
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
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial
            color="#264653"
            blendColor={"#2a9d8f"}
            wireframe
            opacity={1}
          />
        </mesh>
        {icons.map(({ key, icon, ref, position }) => (
          <TechIcon key={key} position={position} iconRef={ref} icon={icon} />
        ))}
      </group>
    </>
  );
};
