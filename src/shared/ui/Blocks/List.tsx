import { type ComponentType } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import s from './List.module.scss'

export interface ListProps<T extends { id: string }, C extends T> extends DP {
  data: T[]
  Item: ComponentType<C>
  otherItemProps: Omit<C, keyof T>
  rotation?: 'row' | 'column'
}

const List = <T extends { id: string }, C extends T>({
  Item,
  data,
  otherItemProps,
  className,
  rotation = 'column',
  ...props
}: ListProps<T, C>) => {
  return (
    <div className={cn(s.main, className, s[rotation])} {...props}>
      {data.map((el) => (
        <Item key={el.id} {...el} {...(otherItemProps as C)} />
      ))}
    </div>
  )
}

export default List
