import { useState, useEffect, useRef } from "react";

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const CountUpNumber = ({ end, suffix = "", prefix = "", duration = 2000 }: CountUpNumberProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="font-heading font-bold text-4xl md:text-5xl text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
};

export default CountUpNumber;
