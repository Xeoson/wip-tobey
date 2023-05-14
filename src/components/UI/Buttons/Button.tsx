import { ReactElement } from "react";
import { IconType } from "react-icons";
import { DPButton } from "../../../types";
import s from "./Button.module.scss";

interface ButtonProps extends DPButton {
  icon?: ReactElement<IconType>;
  color?: "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  icon,
  children,
  color,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${s.main} ${s[color ?? ""]} ${s[size ?? ""]} ${
        className ?? ""
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
