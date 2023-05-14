import { useState } from "react";
import Button from "../Buttons/Button";
import s from "./CouponInput.module.scss";
import Input from "./Input";

interface CouponInputProps {}

const CouponInput = (props: CouponInputProps) => {
  const [value, setValue] = useState("");

  const handleClick = () => {};

  return (
    <div className={s.main}>
      <span>Have a coupon code? Enter here</span>
      <Input onChange={(e) => setValue(e.target.value)}>
        <Button onClick={handleClick}>Apply</Button>
      </Input>
    </div>
  );
};

export default CouponInput;
