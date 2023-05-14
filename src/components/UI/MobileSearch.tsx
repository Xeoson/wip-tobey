import { CiSearch } from "react-icons/ci";
import s from "./MobileSearch.module.scss";
import React from 'react'
import { useState } from "react";
import SearchModal from "./Modals/SearchModal";

interface MobileSearchProps {}

const MobileSearch = (props: MobileSearchProps) => {
	const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.main}>
      <button className={s.openSearchBtn} onClick={() => setIsOpen(true)}>
        <CiSearch />
      </button>
      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default MobileSearch;
