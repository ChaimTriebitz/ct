"use client";
import { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

interface RotatingIconProps {
   svgPath: string;
   size?: number;
   rotationSpeed?: number;
}

export function RotatingIcon({
   svgPath = "./stack/nodejs1.glb",
   size = 1,
   rotationSpeed = 0.5,
}: RotatingIconProps) {
   const meshRef = useRef<THREE.Group>(null);
   const gltf = useLoader(GLTFLoader, svgPath);

   useFrame((state, delta) => {
      if (meshRef.current) {
         meshRef.current.rotation.y += delta * rotationSpeed;
      }
   });

   return (
      <Center>
         <primitive object={gltf.scene} ref={meshRef} scale={size} />
      </Center>
   );
}
