import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Counter({ end = 50, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 30); // update every ~30ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold mb-2">
      {count}
    </div>
  );
}
