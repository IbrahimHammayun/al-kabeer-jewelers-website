import { useState, useEffect } from "react";

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  isVisible: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  isVisible,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuad = (t: number): number => t * (2 - t);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(start + (end - start) * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, start, end, duration]);

  return count;
}
