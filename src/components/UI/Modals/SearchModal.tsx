import { BsArrowLeftShort } from "react-icons/bs";
import products from "../../../mocks/products";
import ProductCard from "../Cards/ProductCard";
import SearchInput from "../Inputs/SearchInput";
import s from "./SearchModal.module.scss";

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal = ({ onClose, ...props }: SearchModalProps) => {
  const handleSearch = (v: string) => {};

  const handleValueChange = (v: string) => {};

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
        <SearchInput
          placeholder="Search for product"
          onValueChange={handleValueChange}
          onSearch={handleSearch}
        />
      </div>
      <div className={s.searchResultBlock}>
        {products.map((el) => (
          <ProductCard
            {...el}
            size="sm"
            withCart
          />
        ))}
      </div>
    </div>
  );
};

export default SearchModal;
