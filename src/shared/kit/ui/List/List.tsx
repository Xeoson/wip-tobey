import { type IDirection, type IGap, type IMargin } from '@/shared/kit/lib/types'
import { type KeyFieldsType } from '@/shared/kit/lib/types/helpers'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import { type ReactNode } from 'react'
import s from './List.module.scss'

const mcn = createClassNames(s)

export interface ListStyles extends IMargin, IGap, Required<IDirection> {}

interface ListProps<I extends Record<string, any>> {
  styles: ListStyles
  items: I[]
  isFetching?: boolean
  children: (props: I) => ReactNode
}

const List = <I extends Record<string, any>>({
  items,
  styles,
  children,
  isFetching,
}: ListProps<I>) => {
  return (
    <ul className={mcn(styles, isFetching && s.fetching)}>
      {items.map((el, i) => (
        <li key={i}>
          {children(el)}
        </li>
      ))}
    </ul>
  )
}

export default List
