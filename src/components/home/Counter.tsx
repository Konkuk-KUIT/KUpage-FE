import { useState, useEffect, useRef } from 'react';

type EasingFunction = (t: number) => number;

const easeOutQuad: EasingFunction = (t) => t * (2 - t);

interface CounterProps {
  end?: number;
  duration?: number;
}

const Counter = ({ end = 100, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 } // 요소가 60% 이상 보이면 시작
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const animate = () => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const eased = easeOutQuad(percentage);
      const current = Math.floor(eased * end);
      setCount(current);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
  };

  return (
    <div ref={ref} className="text-main font-700 text-48 w-56">
      {count}
    </div>
  );
};

export default Counter;
