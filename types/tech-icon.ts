import { Group } from "three";

type TechIconProp = {
   position: [number, number, number];
   iconRef: React.RefObject<Group>;
   icon: React.ReactNode;
}

export type { TechIconProp };
