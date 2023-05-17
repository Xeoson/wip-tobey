import { useEffect, useRef } from "react";

export default (callback: () => void) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (!contentRef.current?.contains(e.target)) {
        callback();
      }
    };
    window.addEventListener("pointerdown", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [contentRef.current]);

  return contentRef;
};
