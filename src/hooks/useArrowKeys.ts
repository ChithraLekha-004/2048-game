import { useEffect } from "react";

interface ArrowKeyHandler {
  [key: string]: () => void;
}

export const useArrowKeys = (handlers: Partial<ArrowKeyHandler>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          handlers.up?.();
          break;
        case "ArrowDown":
          handlers.down?.();
          break;
        case "ArrowLeft":
          handlers.left?.();
          break;
        case "ArrowRight":
          handlers.right?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlers]);
};
