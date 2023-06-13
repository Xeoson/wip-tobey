import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import s from './PaymentInfo.module.scss'

const continueButtonStyles: ButtonStyles = {
  size: 'md',
  theme: 'secondary',
}

interface PaymentInfoProps {}

const PaymentInfo = (props: PaymentInfoProps) => {
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
      <div className={s.item}>
        <div className={s.title}>Total</div>
        <div className={s.valueTotal}>$406.50</div>
      </div>
      <Button styles={continueButtonStyles}>Continue</Button>
    </div>
  )
}

export default PaymentInfo
