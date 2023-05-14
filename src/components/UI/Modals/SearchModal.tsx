import { BsArrowLeftShort } from "react-icons/bs";
import phoneImg from "../../../mocks/phone.webp";
import ProductCard from "../Cards/ProductCard";
import SearchInput from "../Inputs/SearchInput";
import s from "./SearchModal.module.scss";
import products from "../../../mocks/products";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal = ({ onClose, ...props }: SearchModalProps) => {
  const onSearch = (v: string) => {};

  return (
    <div className={s.main}>
      <div className={s.inputBlock}>
        <button
          className={s.backBtn}
          onClick={() => {
            onClose();
          }}
        >
          <BsArrowLeftShort />
        </button>
        <SearchInput onSearch={onSearch} />
      </div>
      <div className={s.searchResultBlock}>
        {products.map((el) => (
          <ProductCard
						productId={el.id!}
            img={el.images[0]}
            title={el.title}
            subtitle={el.description}
            price={`${el.price}$`}
            size="sm"
						withCart
          />
        ))}
      </div>
    </div>
  );
};

export default SearchModal;
