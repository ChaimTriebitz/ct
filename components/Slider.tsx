'use client'

import { useEffect, useRef, useState, ReactNode } from "react";

interface SliderProps {
  children: ReactNode[];
  data: any[];
  autoPlay?: boolean;
}

export function Slider({ children, data, autoPlay = true }: SliderProps) {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [currSlideIdx, setCurrSlideIdx] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (children.length === 0) return;
    setSlides(
      Array.from(
        slidesRef.current
          ? (Array.from(slidesRef.current.children) as HTMLElement[])
          : []
      )
    );
  }, [children]);

  useEffect(() => {
    if (!slides.length) return;
    const currSlide = slides[currSlideIdx];
    slidesRef.current!.style.transform = `translateX(-${currSlide.style.left})`;
  }, [currSlideIdx]);

  useEffect(() => {
    handleResize();
    if (slides.length < 2 || !autoPlay) return;
    const intervalId = setInterval(() => {
      handleClick(currSlideIdx + 1);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [slides, currSlideIdx]);

  const handleResize = () => {
    slides.forEach((slide, idx) => {
      slide.style.left = slides[0].getBoundingClientRect().width * idx + "px";
    });
  };

  const handleClick = (idx: number) => {
    slidesRef.current?.classList?.add("transition");
    if (idx === slides.length - 1) {
      setTimeout(() => {
        slidesRef.current?.classList?.remove("transition");
        setCurrSlideIdx(0);
      }, 500);
    } else if (idx === 0) {
      setTimeout(() => {
        slidesRef.current?.classList?.remove("transition");
        setCurrSlideIdx(slides.length - 1);
      }, 500);
    }
    if (idx >= 0 && idx < slides.length) {
      setCurrSlideIdx(idx);
    }
    handleResize();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;
    if (touchDown === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 7) handleClick(currSlideIdx + 1);
    if (diff < -7) handleClick(currSlideIdx - 1);
    setTouchPosition(null);
  };

  return (
    <div
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slides" ref={slidesRef}>
        {children.map((child, index) => (
          <div key={index} data-index={index} className="slide">
            {child}
          </div>
        ))}
        <div className="slide">{children[0]}</div>
      </div>
      {slides.length > 2 && (
        <>
          <button
            className="navigate prev"
            onClick={() => handleClick(currSlideIdx - 1)}
          />
          <button
            className="navigate next"
            onClick={() => handleClick(currSlideIdx + 1)}
          />
          <nav className="indicators">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={
                  index === currSlideIdx ? "indicator active" : "indicator"
                }
              />
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
