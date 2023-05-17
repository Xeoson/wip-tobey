import { useNavigate } from "react-router-dom";
import AddToCartButton from "../Buttons/AddToCartButton";
import AddToFavoriteButton from "../Buttons/AddToFavoriteButton";
import s from "./ProductCard.module.scss";
import browserRoutes from "../../../common/browserRoutes";
import { IProduct } from "../../../types/model";

interface ProductCardProps extends IProduct {
  size?: "sm" | "md" | "lg" | 'cart';
	withCart?: boolean
	withFavorite?: boolean
}

const ProductCard = ({
  size = 'md',
  images,
	description,
  title,
  price,
  id,
	withCart = false,
	withFavorite = false
}: ProductCardProps) => {

	const navigate = useNavigate()

	const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
		navigate(browserRoutes.product(id))
	}

  return (
    <div onClick={handleClick} className={`${s.main} ${s[size]}`}>
      <div className={s.imgBlock}>
        <img src={images[0]} alt="product_img" className={s.image} />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{description}</div>
      <div className={s.price}>{price}</div>
      {withCart && (
        <AddToCartButton
          className={s.cartBtn}
          rotation={size == "sm" ? "vertical" : "horizontal"}
          productId={id}
        />
      )}
      {withFavorite && <AddToFavoriteButton className={s.favorite} productId={id} />}
    </div>
  );
};

export default ProductCard;
