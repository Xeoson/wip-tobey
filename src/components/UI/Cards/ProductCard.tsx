import { useNavigate } from "react-router-dom";
import AddToCartButton from "../Buttons/AddToCartButton";
import AddToFavoriteButton from "../Buttons/AddToFavoriteButton";
import s from "./ProductCard.module.scss";
import browserRoutes from "../../../common/browserRoutes";

interface ProductCardProps {
  size: "sm" | "md" | "lg" | 'cart';
  img: string;
  title: string;
  subtitle: string;
  price: string;
  productId: string;
	withCart?: boolean
	withFavorite?: boolean
}

const ProductCard = ({
  size,
  img,
  subtitle,
  title,
  price,
  productId,
	withCart = false,
	withFavorite = false
}: ProductCardProps) => {

	const navigate = useNavigate()

	const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
		navigate(browserRoutes.product(productId))
	}

  return (
    <div onClick={handleClick} className={`${s.main} ${s[size]}`}>
      <div className={s.imgBlock}>
        <img src={img} alt="product_img" className={s.image} />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.price}>{price}</div>
      {withCart && (
        <AddToCartButton
          className={s.cartBtn}
          rotation={size == "sm" ? "vertical" : "horizontal"}
          productId={productId}
        />
      )}
      {withFavorite && <AddToFavoriteButton className={s.favorite} productId={productId} />}
    </div>
  );
};

export default ProductCard;
