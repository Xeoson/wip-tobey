import React, { useState } from 'react'

import { CiSearch } from 'react-icons/ci'
import Button from '../../../shared/ui/Buttons/Button'
import Input, { type InputProps } from '../../../shared/ui/Inputs/Input'

type SearchInputProps = Omit<InputProps, 'onKeyDown' | 'value' | 'onChange'> & {
  onSearch: (v: string) => void
  onValueChange: (v: string) => void
}

const SearchInput = ({
  onSearch,
  onValueChange,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    onValueChange(value)
  }

  const handleClick = () => {
    onSearch(value)
  }

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && value.length) {
      onSearch(value)
    }
  }

  return (
    <Input {...props} onKeyDown={handleKeydown} onChange={handleChange}>
      <Button theme='none' size="square" onClick={handleClick}>
        <CiSearch />
      </Button>
    </Input>
  )
}

export default SearchInput
