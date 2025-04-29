import { useEffect, useState } from "react";
import { BreakPointsProp } from "@/types";

export function useWindowSize() {

   const breakPoints: BreakPointsProp = {
      mobile: 700,
      tablet: 900,
      laptop: 1200,
   }

   const [windowWidth, setWindowWidth] = useState<number>(Infinity)

   useEffect(() => {
      function handleResize() {
         setWindowWidth(window.innerWidth);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return {
      windowWidth,
      isMobile: windowWidth < breakPoints.mobile,
      isTablet: windowWidth < breakPoints.tablet,
      isLaptop: windowWidth < breakPoints.laptop,
   }
}