import { useEffect, useRef } from 'react';
import placeholderImage from 'figma:asset/bbef7db76f3553555c686d773d458b288255fc93.png';

interface CursorFollowerProps {
  activeImage: string | null;
  side?: 'left' | 'right';
}

export function CursorFollower({ activeImage, side = 'right' }: CursorFollowerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef(side);

  // Update ref when prop changes
  useEffect(() => {
    sideRef.current = side;
  }, [side]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const viewportHeight = window.innerHeight;
        const containerSize = viewportHeight * 0.5; // 50vh
        const offset = 16; // 1rem

        const isLowerHalf = e.clientY > viewportHeight / 2;
        const currentSide = sideRef.current;

        // X Position
        // If Right: Cursor X + Offset
        // If Left: Cursor X - ContainerWidth - Offset
        const x = currentSide === 'right' 
          ? e.clientX + offset
          : e.clientX - containerSize - offset;
        
        // Y Position
        // If lower half, position above cursor (top-right/left). 
        // If upper half, position below cursor (bottom-right/left).
        const y = isLowerHalf 
          ? e.clientY - containerSize - offset 
          : e.clientY + offset;

        containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Empty dependency array is fine as we use refs for dynamic values inside the listener

  if (activeImage === null) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 z-0 pointer-events-none hidden md:block overflow-hidden"
      style={{
        width: '50vh',
        height: '50vh',
      }}
    >
      <div className="w-full h-full relative bg-brand-blue">
        <img 
          src={activeImage || placeholderImage} 
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Color tint overlay - matching EventDetailModal treatment */}
        <div className="absolute inset-0 bg-[var(--brand-blue)] dark:bg-[var(--brand-white)] mix-blend-screen opacity-80" />
      </div>
    </div>
  );
}
