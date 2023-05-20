import { BsArrowLeftShort } from "react-icons/bs"
import products from "../../../mocks/products"
import ProductList from "../Blocks/ProductList"
import SearchInput from "../Inputs/SearchInput"
import Modal from "./Modal"
import s from "./SearchModal.module.scss"

interface SearchModalProps {
  onClose: () => void
  isOpen: boolean
}

const SearchModal = ({ onClose, isOpen, ...props }: SearchModalProps) => {
  const handleSearch = (v: string) => {}

  const handleValueChange = (v: string) => {}

  return (
    <Modal isOpen={isOpen}>
      <div className={s.inputBlock}>
        <button
          className={s.backBtn}
          onClick={() => {
            onClose()
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
      <ProductList products={products} size="sm" withCart />
    </Modal>
  )
}

export default SearchModal
