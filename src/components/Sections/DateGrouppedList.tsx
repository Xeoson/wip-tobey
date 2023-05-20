import dayjs from 'dayjs'
import { useRef } from 'react'
import groupByDate from '../../helpers/groupByDate'
import { orders } from '../../mocks/orders'
import { type IUserOrderPopulated } from '../../types/model'
import ProductCard from '../UI/Cards/ProductCard'
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
