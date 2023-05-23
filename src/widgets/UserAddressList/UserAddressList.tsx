import { useRef, useState, type FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineEdit } from 'react-icons/md'
import s from './UserAddressList.module.scss'
import addresses from 'shared/lib/mocks/addresses'

interface UserAddressListProps {}

const UserAddressList: FC<UserAddressListProps> = (props) => {
  const [editingIdx, setEditingIdx] = useState<number>()
  const inputValueRef = useRef<string>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = e.target.value
  }
  const handleEditClick = (idx: number) => () => {
    if (idx === editingIdx) {
      if (inputValueRef.current) {
        // onAddressEditSave(idx, inputValueRef.current);
        inputValueRef.current = ''
      }
      setEditingIdx(undefined)
    } else {
      inputValueRef.current = ''
      setEditingIdx(idx)
    }
  }

  return (
    <div className={s.main}>
      <h4 className={s.header}>My Address</h4>
      <ul className={s.list}>
        {addresses.map((el, i) => (
          <li key={el} className={s.item}>
            <input
              disabled={i !== editingIdx}
              defaultValue={el}
              onChange={handleChange}
            />
            <button onClick={handleEditClick(i)}>
              {editingIdx === i ? <AiOutlineCheck /> : <MdOutlineEdit />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserAddressList
