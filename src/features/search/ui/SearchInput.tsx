import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Input, { type InputProps } from '../../../shared/ui/Inputs/Input'

const buttonStyles: ButtonStyles = {
	theme: 'none',
	size: 'sm'
}

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
      <Button styles={buttonStyles} onClick={handleClick}>
        <CiSearch />
      </Button>
    </Input>
  )
}

export default SearchInput
