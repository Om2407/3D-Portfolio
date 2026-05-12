"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState([]);

  // Motion values for the dot (exact following)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring values for the circle (smooth lag / lerp)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Create trail particles - limited to avoid performance issues
      if (Math.random() > 0.5) {
        const newParticle = {
          id: Math.random(),
          x: clientX,
          y: clientY,
        };
        setTrail((prev) => [...prev.slice(-10), newParticle]);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over interactive elements
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* Trail Particles */}
      <AnimatePresence mode="popLayout">
        {trail.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full z-[99998]"
            style={{
              x: particle.x,
              y: particle.y,
              translateX: "-50%",
              translateY: "-50%",
              backgroundColor: isHovered ? "#915EFF" : "#ffffff",
              boxShadow: isHovered ? "0 0 10px #915EFF" : "0 0 5px #ffffff",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Large Smooth Circle (Lagging) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full z-[99999] flex items-center justify-center mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovered ? "#915EFF" : "white",
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(145, 94, 255, 0.2)" : "transparent",
        }}
      />

      {/* Small Center Dot (Exact) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full z-[100000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHovered ? "#915EFF" : "#ffffff",
        }}
      />

      {/* Spotlight Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[99997]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, rgba(145, 94, 255, 0.15) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
