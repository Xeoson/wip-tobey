import { useState } from "react";
import { DP } from "../../../types";
import { IVariant } from "../../../types/model";
import s from "./ColorVariants.module.scss";

interface ColorVariantsProps extends Pick<DP, "className"> {
  variants: string[];
  onSetVariant: (varIdx: number) => void;
}

const ColorVariants = ({
  variants,
  onSetVariant,
  className,
}: ColorVariantsProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleClick = (variantIdx: number) => () => {
    setSelectedIdx(variantIdx);
    onSetVariant(variantIdx);
  };

  return (
    <div className={`${s.main} ${className ?? ""}`}>
      {variants.map((el, i) => (
        <button
          className={`${s.item} ${i == selectedIdx ? s.selected : ""}`}
          onClick={handleClick(i)}
        >
          <span style={{backgroundColor: el}} ></span>
        </button>
      ))}
    </div>
  );
};

export default ColorVariants;
