import s from './DeliveryAddress.module.scss'
import avatar from '../../shared/lib/assets/avatar.png'

interface DeliveryAddressProps {}

const DeliveryAddress = (props: DeliveryAddressProps) => {
  return (
    <div className={s.main}>
      <div className={s.info}>
        <img src={avatar} />
        <p>Deliver to USER</p>
      </div>
    </div>
  )
}

export default DeliveryAddress
