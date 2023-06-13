import { memo, type ReactNode } from 'react'
import { type IDirection, type IGap, type IMargin } from 'shared/kit/lib/types'
import { type KeyFieldsType } from 'shared/kit/lib/types/helpers'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import s from './List.module.scss'

const mcn = createClassNames(s)

export interface ListStyles extends IMargin, IGap, IDirection {
  theme?: 'primary'
}

interface ListProps<I extends Record<string, any>> {
  key?: KeyFieldsType<I>
  styles: ListStyles
  items: I[]
  children: (props: I) => ReactNode
}

const List = <I extends Record<string, any>>({
  items,
  key,
  styles,
  children,
}: ListProps<I>) => {
  const { theme } = styles
  return (
    <ul className={mcn(styles)}>
      {items.map((el, i) => (
        <li className={mcn({ theme })} key={key ? el[key] : i}>
          {children(el)}
        </li>
      ))}
    </ul>
  )
}

export default memo(List)
