import dayjs from "dayjs";
import { IUserOrderPopulated } from "../../types/model";
import ProductCard from "../UI/Cards/ProductCard";
import s from "./DateGrouppedList.module.scss";
import { orders } from "../../mocks/orders";
import { useRef } from "react";
import groupByDate from "../../helpers/groupByDate";

interface DateGrouppedOrdersProps {}

const DateGrouppedOrders = (props: DateGrouppedOrdersProps) => {
	const sortedOrdersRef = useRef<IUserOrderPopulated[][]>(groupByDate(orders, 'createdAt'))

  return (
    <ul className={s.main}>
      {sortedOrdersRef.current.map((el) => (
        <li className={s.section}>
          <h3 className={s.sectionHeader}>
            {dayjs(el[0].createdAt).format("DD MMMM")}
          </h3>
          <ul className={s.sectionList}>
            {el.map(({ product: el }) => (
              <li>
                <ProductCard {...el} size="sm" />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DateGrouppedOrders;
