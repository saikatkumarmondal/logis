import { useEffect, useState } from "react";

const FollowCursor = ({ color = "#ff0000aa" }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (target.closest(".hover-text")) {
        setIsHoveringText(true);
      } else {
        setIsHoveringText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none rounded-full z-[9999] transition-all duration-200 ease-linear 
        ${
          isHoveringText
            ? "w-[120px] h-[120px] mix-blend-difference"
            : "w-6 h-6"
        }`}
      style={{
        backgroundColor: color,
        left: cursorPos.x - (isHoveringText ? 60 : 12),
        top: cursorPos.y - (isHoveringText ? 60 : 12),
      }}></div>
  );
};

export default FollowCursor;
