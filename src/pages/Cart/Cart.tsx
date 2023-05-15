import CartPaymentInfo from "../../components/UI/Blocks/CartPaymentInfo";
import ProductCard from "../../components/UI/Cards/ProductCard";
import PageLayout from "../../components/UI/Containers/PageLayout";
import DeliveryAddress from "../../components/UI/DeliveryAddress";
import CouponInput from "../../components/UI/Inputs/CouponInput";
import Hr from "../../components/UI/Other/Hr";
import products from "../../mocks/products";
import s from "./Cart.module.scss";

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <PageLayout withNavbarOn="tablet">
      <DeliveryAddress />
      <Hr size="full" />
      <div className={s.content}>
        <div className={s.products}>
          {products.map((el) => (
            <ProductCard
              img={el.images[0]}
              price={`${el.price}$`}
              productId={el.id!}
              size="cart"
              subtitle={el.description}
              title={el.title}
              withCart
              withFavorite
            />
          ))}
        </div>
        <CouponInput />
        <CartPaymentInfo />
      </div>
    </PageLayout>
  );
};

export default Cart;
