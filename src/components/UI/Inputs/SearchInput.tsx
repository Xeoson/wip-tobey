import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Input, { InputProps } from "./Input";
import s from "./SearchInput.module.scss";

type SearchInputProps = Omit<InputProps, "onKeyDown" | "value" | "onChange"> & {
  onSearch: (v: string) => void;
	onValueChange: (v: string) => void;
};

const SearchInput = ({
  onSearch,
  onValueChange,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
    setValue(value);
		onValueChange(value)
  };

  const handleClick = () => {
    onSearch(value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code == "Enter" && value.length) {
      onSearch(value);
    }
  };

  return (
    <Input
      className={s.main}
      {...props}
      onKeyDown={handleKeydown}
      onChange={handleChange}
    >
      <button onClick={handleClick}>
        <CiSearch />
      </button>
    </Input>
  );
};

export default SearchInput;
