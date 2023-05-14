import { useState } from "react";
import Button from "../Buttons/Button";
import s from "./CouponInput.module.scss";
import Input from "./Input";
import { DP } from "../../../types";

interface CouponInputProps extends Pick<DP, 'className'> {}

const CouponInput = ({className, ...props}: CouponInputProps) => {
  const [value, setValue] = useState("");

  const handleClick = () => {};

  return (
    <div className={`${s.main} ${className ?? ''}`}>
      <span>Have a coupon code? Enter here</span>
      <Input onChange={(e) => setValue(e.target.value)}>
        <Button onClick={handleClick}>Apply</Button>
      </Input>
    </div>
  );
};

export default CouponInput;
