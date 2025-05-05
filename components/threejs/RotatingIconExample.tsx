"use client";
import { CanvasThreeJs } from "./CanvasThreeJs";
import { RotatingIcon } from "./RotatingIcon";

export function RotatingIconExample() {
  // Example SVG path (you can replace this with your own SVG path)
  const svgPath = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5";

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <CanvasThreeJs>
        <RotatingIcon
          svgPath={svgPath}
          color="#ff0000"
          size={0.5}
          rotationSpeed={0.5}
        />
      </CanvasThreeJs>
    </div>
  );
}
