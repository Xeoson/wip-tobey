import { useRef, useState } from "react";
import { DPInput } from "../../types";
import DropdownContainer from "./Containers/DropdownContainer";
import SearchInput from "./Inputs/SearchInput";
import s from "./TabletSearch.module.scss";
import useOutsideClick from "../../hooks/useOutsideClick";
import products from "../../mocks/products";
import ProductCard from "./Cards/ProductCard";

type SearchProps = Omit<DPInput, "type">;

const Search = ({ ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false);

	const wrapperRef = useOutsideClick(() => setIsOpen(false))

  const handleSearch = (v: string) => {};
  const handleValueChange = (v: string) => {};

  return (
    <div ref={wrapperRef} className={s.main}>
      <SearchInput
        onFocus={() => setIsOpen(true)}
        placeholder="Search for product"
        onSearch={handleSearch}
        onValueChange={handleValueChange}
      />
      {isOpen && (
        <DropdownContainer
          className={s.dropdown}
        >
          <div className={s.productsBlock}>
            {products.slice(0, 6).map((el) => (
              <ProductCard
                {...el}
                size="sm"
                withCart
              />
            ))}
          </div>
        </DropdownContainer>
      )}
    </div>
  );
};

export default Search;
