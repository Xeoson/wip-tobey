import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import Input from '@/shared/kit/ui/inputs/Input/Input'
import { type DPInput } from '@/shared/lib/types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const buttonStyles: ButtonStyles = {
  theme: 'none',
  size: 'sm',
  align: 'center',
}

interface SearchInputProps extends Pick<DPInput, 'placeholder' | 'disabled'> {
  onSearch: (v: string) => void
  onValueChange?: (v: string) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  subscribeSetValue?: (setValue: (v: string) => void) => () => void
}

const SearchInput = ({
  onSearch,
  onValueChange,
  placeholder = 'Search for a product',
  disabled,
  onFocus,
  onBlur,
  subscribeSetValue,
}: SearchInputProps) => {
  const [value, setValue] = useState('')

  useEffect(() => subscribeSetValue?.(setValue), [])

  const cb = {
    onChange: useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      onValueChange?.(e.target.value)
    }, []),
    onSearch: () => {
      onSearch(value)
    },
    onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter' && value.length) {
        onSearch(value)
      }
    },
  }

  return (
    <Input
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      placeholder={placeholder}
      onKeyDown={cb.onKeydown}
      onChange={cb.onChange}
    >
      <Button disabled={disabled} styles={buttonStyles} onClick={cb.onSearch}>
        <CiSearch />
      </Button>
    </Input>
  )
}

export default memo(SearchInput)
