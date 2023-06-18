import React, { memo, useCallback, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Input, { type InputStyles } from 'shared/kit/ui/inputs/Input/Input'
import { type DPInput } from 'shared/lib/types'

const buttonStyles: ButtonStyles = {
  theme: 'none',
  size: 'sm',
  align: 'center',
}
const inputStyles: InputStyles = {
  m: 'lg',
}

interface SearchInputProps extends Pick<DPInput, 'placeholder' | 'disabled'> {
  onSearch: (v: string) => void
  onValueChange?: (v: string) => void
}

const SearchInput = ({
  onSearch,
  onValueChange,
  placeholder = 'Search for a product',
  disabled,
}: SearchInputProps) => {
  const [value, setValue] = useState('')

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
      disabled={disabled}
      placeholder={placeholder}
      styles={inputStyles}
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
