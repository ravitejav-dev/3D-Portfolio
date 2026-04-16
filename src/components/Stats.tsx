import { useEffect, useRef, useState } from "react";
import "./styles/Stats.css";

const stats = [
  { value: 3.5, suffix: "+", label: "Years Experience", decimals: 1 },
  { value: 80, suffix: "%", label: "Efficiency Gain", decimals: 0 },
  { value: 10, suffix: "K+", label: "Records / Batch", decimals: 0 },
  { value: 10, suffix: "", label: "Days Critical Fix", decimals: 0 },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            className={`stat-card ${isVisible ? "stat-visible" : ""}`}
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="stat-value">
              {isVisible ? (
                <AnimatedCounter
                  target={stat.value}
                  decimals={stat.decimals}
                  duration={2000}
                  delay={index * 150}
                />
              ) : (
                "0"
              )}
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-glow" />
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedCounter = ({
  target,
  decimals,
  duration,
  delay,
}: {
  target: number;
  decimals: number;
  duration: number;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);

  return <>{count.toFixed(decimals)}</>;
};

export default Stats;
