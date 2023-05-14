
import { useState } from "react";
import { DPInput } from "../../../types";
import "./Input.module.scss";

export type InputProps = Omit<DPInput, "type">

const Input = ({children, ...props}: InputProps) => {

  return (
    <label>
      <input {...props} type='text' />
			{children}
    </label>
  );
};

export default Input;
