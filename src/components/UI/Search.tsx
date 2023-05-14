import { useState } from "react";
import { DPInput } from "../../types";
import s from "./Search.module.scss";

type SearchProps = Omit<DPInput, "type">;

const Search = ({ ...props }: SearchProps) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {};

  return (
    <div className="">
      <label className={s.main}>
        <input {...props} type="text" />
      </label>
    </div>
  );
};

export default Search;
