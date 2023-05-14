import { BsArrowLeftShort } from "react-icons/bs";
import avatar from "../../assets/avatar.png";
import s from "./DeliveryAddress.module.scss";
import Input from "./Inputs/Input";
import Popup from "./Popups/Popup";

interface DeliveryAddressProps {}

const DeliveryAddress = (props: DeliveryAddressProps) => {
  return (
    <div className={s.main}>
      <div className={s.info}>
        <img src={avatar} />
        <p>Deliver to USER</p>
      </div>
      <Popup
        buttonContent={
          <>
            <span>San Diego, California</span>
            <BsArrowLeftShort />
          </>
        }
        buttonClassName={s.openBtn}
        content={<Input />}
      />
    </div>
  );
};

export default DeliveryAddress;
