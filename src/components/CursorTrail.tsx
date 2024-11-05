"use client"
import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const trailRef = useRef<SVGPathElement>(null);
  const pointsRef = useRef<{ x: number; y: number }[]>([]);

  const maxPoints = 30; // Control the length of the trail

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      pointsRef.current.push({ x: clientX, y: clientY });

      if (pointsRef.current.length > maxPoints) {
        pointsRef.current.shift();
      }

      const pathData = pointsRef.current
        .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
        .join(' ');

      if (trailRef.current) {
        trailRef.current.setAttribute('d', pathData);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg className="fixed top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={trailRef}
        stroke="rgba(255, 255, 255, 0.8)" // Glowing color
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          filter: 'blur(4px)', // Adds the glowing effect
        }}
      />
    </svg>
  );
};

export default CursorTrail;
