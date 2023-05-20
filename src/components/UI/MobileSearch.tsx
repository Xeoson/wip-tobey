import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import IconButton from "./Buttons/IconButton"
import SearchModal from "./Modals/SearchModal"

interface MobileSearchProps {}

const MobileSearch = (props: MobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => { setIsOpen(true) }}>
        <CiSearch />
      </IconButton>
      <SearchModal isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
      {/* {isOpen && <SearchModal onClose={() => setIsOpen(false)} />} */}
    </>
  )
}

export default MobileSearch
