import ProductCard from '@/entities/product-card/ui/ProductCard'
import { useState } from 'react'
import DropdownContainer from '@/shared/ui/Containers/DropdownContainer'
import useOutsideClick from '../../shared/lib/hooks/useOutsideClick'
import products from '../../shared/lib/mocks/products'
import { type DPInput } from '../../shared/lib/types'
import s from './Search.module.scss'
import List from '@/shared/kit/ui/List/List'
import SearchInput from '@/shared/ui/Inputs/SearchInput/SearchInput'

type SearchProps = Omit<DPInput, 'type'>

const Search = ({ ...props }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useOutsideClick(() => {
    setIsOpen(false)
  })

  const handleSearch = (v: string) => {}
  const handleValueChange = (v: string) => {}

  return (
    <div ref={wrapperRef} className={s.main}>
      <SearchInput
        onFocus={() => {
          setIsOpen(true)
        }}
        placeholder="Search for product"
        onSearch={handleSearch}
        onValueChange={handleValueChange}
      />
      {isOpen && (
        <DropdownContainer className={s.dropdown}>
          {/* <List
            Item={ProductCard}
            data={products.slice(0, 4)}
            otherItemProps={{ size: 'sm', withCart: true }}
          /> */}
        </DropdownContainer>
      )}
    </div>
  )
}

export default Search
