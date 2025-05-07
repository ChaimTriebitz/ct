import React from "react";
import { Html } from "@react-three/drei";
import { TechIconProp } from "@/types";

export function TechIcon({ position, iconRef, icon }: TechIconProp) {
  return (
    <group ref={iconRef} position={position}>
      <Html transform>{icon}</Html>
    </group>
  );
}
