import { useIntersectionObserver } from "./useIntersectionObserver";
import { RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

interface ScrollAnimationResult<T extends HTMLElement> {
  ref: RefObject<T>;
  isVisible: boolean;
  animationClass: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): ScrollAnimationResult<T> {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px" } = options;
  
  const [ref, isVisible] = useIntersectionObserver<T>({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const animationClass = isVisible 
    ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
    : "opacity-0 translate-y-8";

  return { ref, isVisible, animationClass };
}

export function getStaggerDelay(index: number, baseDelay: number = 100): string {
  return `${index * baseDelay}ms`;
}
