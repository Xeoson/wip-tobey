import { type ReactNode } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import s from './ColumnButtonList.module.scss'

interface ColumnLinksProps<I> {
  title: string
  items: I[]
  children: (props: I) => ReactNode
}

const ColumnButtonList = <I,>({
  items,
  title,
  children,
}: ColumnLinksProps<I>) => {
  return (
    <div className={s.main}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {items.map((el, i) => (
          <li className={s.item} key={i}>
            {children(el)}
            <AiOutlineRight className={s.arrow} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColumnButtonList
