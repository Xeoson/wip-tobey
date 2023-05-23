import { type IUserOrderPopulated } from 'app/model/db/types'
import dayjs from 'dayjs'
import ProductCard from 'entities/product-card/ui/ProductCard'
import { useRef } from 'react'
import groupByDate from 'shared/lib/helpers/groupByDate'
import { orders } from 'shared/lib/mocks/orders'
import s from './DateGrouppedList.module.scss'

interface DateGrouppedOrdersProps {}

const DateGrouppedOrders = (props: DateGrouppedOrdersProps) => {
  const sortedOrdersRef = useRef<IUserOrderPopulated[][]>(
    groupByDate(orders, 'createdAt')
  )

  return (
    <ul className={s.main}>
      {sortedOrdersRef.current.map((el, i) => (
        <li key={i} className={s.section}>
          <h3 className={s.sectionHeader}>
            {dayjs(el[0].createdAt).format('DD MMMM')}
          </h3>
          <ul className={s.sectionList}>
            {el.map((el) => (
              <li key={el.id}>
                <ProductCard {...el.products[0]} size="sm" />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default DateGrouppedOrders
