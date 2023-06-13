import SearchInput from 'features/search/ui/SearchInput'
import { useMemo, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import products from 'shared/lib/mocks/products'
import Modal from 'shared/ui/Modals/Modal'
import s from './MobileSearch.module.scss'

const searchButtonStyles: ButtonStyles = {
  shape: 'square',
  theme: 'none',
}

interface MobileSearchProps {}

const MobileSearch = (props: MobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleValueChange = () => {}
  const handleSearch = () => {}

  const MemoList = useMemo(
    () => [],
    [products]
  )

  return (
    <>
      <Button
        styles={searchButtonStyles}
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
