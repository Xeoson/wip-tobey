import Button from "../Buttons/Button";
import Hr from "../Other/Hr";
import s from "./CartPaymentInfo.module.scss";

interface CartPaymentInfoProps {}

const CartPaymentInfo = (props: CartPaymentInfoProps) => {
  return (
    <div className={s.main}>
      <div className={s.item}>
        <div className={s.title}>Subtotal</div>
        <div className={s.value}>$80.00</div>
      </div>
      <div className={s.item}>
        <div className={s.title}>Delivery Fee</div>
        <div className={s.value}>$5.00</div>
      </div>
      <div className={s.item}>
        <div className={s.title}>Discount</div>
        <div className={s.value}>50%</div>
      </div>
      <Hr type="dashed" />
      <div className={s.item}>
        <div className={s.title}>Total</div>
        <div className={s.valueTotal}>$406.50</div>
      </div>
      <Button size="md" color="secondary">
        Continue
      </Button>
    </div>
  );
};

export default CartPaymentInfo;
