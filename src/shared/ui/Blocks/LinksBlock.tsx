import { type ReactElement } from 'react'
import { type IconType } from 'react-icons'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import s from './LinksBlock.module.scss'

export interface IProfileSettingItem {
  icon: ReactElement<IconType>
  title: string
  url: string
}

interface LinksBlockProps {
  title: string
  items: IProfileSettingItem[]
}

const LinksBlock = ({ items, title }: LinksBlockProps) => {
  return (
    <div className={s.main}>
      <h4 className={s.title}>{title}</h4>
      <ul className={s.list}>
        {items.map((el, i) => (
          <li key={i} className={s.item}>
            <Link to={el.url}>
              {el.icon}
              <span>{el.title}</span>
              <AiOutlineRight className={s.arrow} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinksBlock
