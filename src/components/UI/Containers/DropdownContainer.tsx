import { useLayoutEffect, useRef } from "react";
import { DP } from "../../../types";
import s from "./DropdownContainer.module.scss";

interface DropdownContainerProps extends Pick<DP, "children" | "className"> {}

const DropdownContainer = ({ children, className }: DropdownContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (el) {
      const { left, right, bottom } = el.getBoundingClientRect();
      const sWidth = window.innerWidth;
      const sHeigth = window.innerHeight;

      if (right > sWidth) {
        const diff = right - sWidth;
        el.style.transform = `translate(-${diff}px, 101%)`;
      } else if (left < 0) {
        const diff = Math.abs(left);
        el.style.transform = `translate(${diff}px, 101%)`;
      } else if (bottom > sHeigth) {
        el.style.transform = `translateY(-101%)`;
      }
    }
  }, [containerRef.current]);

  return (
    <div ref={containerRef} className={`${s.main} ${className ?? ''}`}>
      {children}
    </div>
  );
};
export default DropdownContainer;
