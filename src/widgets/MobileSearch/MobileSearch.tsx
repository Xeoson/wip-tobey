import ProductCard from 'entities/product-card/ui/ProductCard'
import SearchInput from 'features/search/ui/SearchInput'
import { useMemo, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import products from 'shared/lib/mocks/products'
import List from 'shared/ui/Blocks/List'
import Button from 'shared/ui/Buttons/Button'
import Modal from 'shared/ui/Modals/Modal'
import s from './MobileSearch.module.scss'

interface MobileSearchProps {}

const MobileSearch = (props: MobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleValueChange = () => {}
  const handleSearch = () => {}

  const MemoList = useMemo(
    () => (
      <List
        className={s.productList}
        Item={ProductCard}
        data={products}
        otherItemProps={{ size: 'sm', withCart: true }}
      />
    ),
    [products]
  )

  return (
    <>
      <Button
        size="square"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        <CiSearch />
      </Button>
      <Modal className={s.modal} isOpen={isOpen}>
        <div className={s.inputBlock}>
          <button
            className={s.backBtn}
            onClick={() => {
              setIsOpen(false)
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
        {MemoList}
      </Modal>
    </>
  )
}

export default MobileSearch
