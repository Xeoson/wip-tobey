import { type ICategory } from '@/app/api/firestore/types/models'
import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import Flex from '@/shared/kit/ui/Flex/Flex'
import debounce from '@/shared/lib/helpers/debounce'
import useOutsideClick from '@/shared/lib/hooks/useOutsideClick'
import { type DPInput } from '@/shared/lib/types'
import SearchInput from '@/shared/ui/Inputs/SearchInput/SearchInput'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLazyCategoryDocQuery, useLazySearchCategoryQuery, util } from '../../api/queries'

const pillBtnStyles: ButtonStyles = {
  round: 'md',
  theme: 'secondary',
  my: 'xs',
  p: 'xs',
}

export interface CategorySearchProps extends Pick<DPInput, 'disabled' | 'placeholder'> {
  onSet: (categoryId: string) => void
  selectedCategoryId: string
}

const CategorySearch = ({ onSet, selectedCategoryId, ...props }: CategorySearchProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  const [searchCategory, { isLoading, data: categories }] = useLazySearchCategoryQuery()
  const [getCategory, { isLoading: isCategoryLoading, data: selectedCategoryDoc }] = useLazyCategoryDocQuery()
  const setSearchValueRef = useRef<(v: string) => void>()

  useEffect(() => {
    getCategory(selectedCategoryId)
  }, [])

  useEffect(() => {
    if (isOpen) {
      searchCategory(undefined)
    }
  }, [isOpen])

  const cb = {
    setCat: (cat: ICategory | undefined) => {
      onSet(cat?.id || '')
      setSelectedCategory(cat?.title || '')
      setSearchValueRef.current?.(cat?.title || '')
    },
    onFocus: useCallback(() => setIsOpen(true), []),
    onBlur: useCallback(() => setIsOpen(false), []),
    onSearch: useCallback(async (value: string) => await searchCategory(value), []),
    onChange: useCallback(
      debounce(async (value: string) => await searchCategory(value), 300),
      []
    ),
    onSelectCat: useCallback(
      (cat: ICategory) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        if (selectedCategoryId === cat.id) {
          cb.setCat(undefined)
        } else {
          cb.setCat(cat)
        }
      },
      [selectedCategoryId]
    ),
    onSubscribeSetSearchValue: (cb: (v: string) => void) => {
      setSearchValueRef.current = cb
      return () => (setSearchValueRef.current = undefined)
    },
  }

  const outsideRef = useOutsideClick(cb.onBlur)

  return (
    <Flex direction="column" ref={outsideRef}>
      <SearchInput
        onFocus={cb.onFocus}
        onSearch={cb.onSearch}
        onValueChange={cb.onChange}
        disabled={props.disabled}
        subscribeSetValue={cb.onSubscribeSetSearchValue}
        {...props}
      />
      {!isOpen && selectedCategoryId && <Button styles={pillBtnStyles}>{selectedCategory}</Button>}
      {isOpen && (
        <Flex direction="column" p="xs" gap="xs" border="solid" round="sm">
          {categories?.map((el) => (
            <Button
              styles={{
                p: 'md',
                theme: el.id === selectedCategoryId ? 'secondary' : 'primary',
                w: 'full',
              }}
              onClick={cb.onSelectCat(el)}
              key={el.id}
            >
              {el.title}
            </Button>
          ))}
        </Flex>
      )}
    </Flex>
  )
}

export default CategorySearch
