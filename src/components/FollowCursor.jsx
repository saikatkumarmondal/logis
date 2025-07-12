import { useEffect, useRef, useState } from "react";

const FollowCursor = ({ color = "#ff0000aa" }) => {
  const cursorRef = useRef(null);
  const requestRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target;
      setIsHoveringText(!!target.closest(".hover-text"));
    };

    const animate = () => {
      // Linear interpolation
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      const el = cursorRef.current;
      if (el) {
        const offset = isHoveringText ? 60 : 12;
        el.style.left = `${pos.current.x - offset}px`;
        el.style.top = `${pos.current.y - offset}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHoveringText]);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none rounded-full z-[9999] transition-all ease-linear 
        ${
          isHoveringText
            ? "w-[120px] h-[120px] mix-blend-difference"
            : "w-6 h-6"
        }`}
      style={{
        backgroundColor: color,
      }}></div>
  );
};

export default FollowCursor;
