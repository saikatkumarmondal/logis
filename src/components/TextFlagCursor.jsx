import React, { useEffect, useState } from "react";

const TextFlagCursor = ({
  text = "Hello World",
  color = "#000",
  font = "monospace",
  textSize = 12,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Floating text */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x + 15,
          top: pos.y + 15,
          color,
          fontFamily: font,
          fontSize: `${textSize}px`,
        }}>
        {text}
      </div>

      {/* Red Circle */}
      <div
        className="fixed pointer-events-none z-[9998] transition-transform duration-100"
        style={{
          left: pos.x,
          top: pos.y,
          width: "300px", // 👈 Bigger width
          height: "300px", // 👈 Bigger height
          backgroundColor: "red",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default TextFlagCursor;
