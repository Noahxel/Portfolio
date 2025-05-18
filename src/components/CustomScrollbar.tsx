import { useEffect, useRef } from 'react';
import React from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    if (!container || !scrollbar || !thumb) return;

    const updateScrollbar = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollbarHeight = scrollbar.clientHeight;
      const thumbHeight = (clientHeight / scrollHeight) * scrollbarHeight;
      const thumbTop = (scrollTop / scrollHeight) * scrollbarHeight;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${thumbTop}px)`;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollbar);
    };

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const startY = e.clientY;
      const startTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const scrollRatio = container.scrollHeight / containerHeight;

      const handleMouseMove = (e: MouseEvent) => {
        const deltaY = e.clientY - startY;
        const newScrollTop = startTop + deltaY * scrollRatio;
        container.scrollTop = Math.max(0, Math.min(newScrollTop, container.scrollHeight - containerHeight));
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    container.addEventListener('scroll', handleScroll);
    scrollbar.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('resize', updateScrollbar);

    // Initial update
    updateScrollbar();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      scrollbar.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  return (
    <div className="relative h-full">
      <div
        ref={containerRef}
        className="h-full overflow-y-auto scrollbar-none"
      >
        {children}
      </div>
      <div
        ref={scrollbarRef}
        className="absolute top-0 right-0 w-2 h-full bg-secondary rounded-full"
      >
        <div
          ref={thumbRef}
          className="absolute top-0 left-0 w-full bg-secondary rounded-full transition-transform duration-100 hover:bg-secondary"
        />
      </div>
    </div>
  );
};

export default CustomScrollbar; 