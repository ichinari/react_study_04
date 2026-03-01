import { useEffect, useState } from "react";

function UseEffect_1_1() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handlePointerMove);

    // アンマウント時にイベントリスナーを削除（メモリリークの防止）
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.5,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: -20,
        left: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
}

export default UseEffect_1_1;
