import { useState } from "react"
import useOutsideClick from "../../hooks/useOutsideClick"
import products from "../../mocks/products"
import { type DPInput } from "../../types"
import ProductList from "./Blocks/ProductList"
import DropdownContainer from "./Containers/DropdownContainer"
import SearchInput from "./Inputs/SearchInput"
import s from "./Search.module.scss"

type SearchProps = Omit<DPInput, "type">

const Search = ({ ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useOutsideClick(() => { setIsOpen(false) })

  const handleSearch = (v: string) => {}
  const handleValueChange = (v: string) => {}

  return (
    <div ref={wrapperRef} className={s.main}>
      <SearchInput
        onFocus={() => { setIsOpen(true) }}
        placeholder="Search for product"
        onSearch={handleSearch}
        onValueChange={handleValueChange}
      />
      {isOpen && (
        <DropdownContainer className={s.dropdown}>
          <ProductList products={products.slice(0, 4)} size="sm" withCart />
        </DropdownContainer>
      )}
    </div>
  )
}

export default Search
