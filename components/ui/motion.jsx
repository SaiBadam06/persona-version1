"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function useMouseSpring(strength = 0.25) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 22 });
  const sy = useSpring(y, { stiffness: 220, damping: 22 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { sx, sy, onMove, onLeave };
}

export function MagneticButton({ children, onClick, className = "", strength = 0.35, ...rest }) {
  const { sx, sy, onMove, onLeave } = useMouseSpring(strength);
  return (
    <motion.button
      onClick={onClick}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function SplitText({ children, delay = 0, className = "" }) {
  const words = String(children).split(" ");
  return (
    <span className={`split-text ${className}`}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <span className="split-word">
            <motion.span
              className="split-inner"
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: delay + i * 0.055, duration: 0.8, ease: [0.22, 0.8, 0.2, 1] }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function CountUp({ to, duration = 1.8, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf = null;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Marquee({ items, reverse = false, speed = 32 }) {
  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ children, className = "", glow = false }) {
  // Calm, flat-app feel: no 3D tilt; just a subtle lift on hover.
  return (
    <motion.div
      className={`${className} ${glow ? "glow-card" : ""}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      {children}
    </motion.div>
  );
}
