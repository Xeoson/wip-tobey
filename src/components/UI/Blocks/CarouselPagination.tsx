
import React from 'react'
import s from './CarouselPagination.module.scss'

interface CarouselPaginationProps {
	itemsCount: number,
	currentIdx: number,
	onSetCurrentIdx: (idx: number) => void;
}

const CarouselPagination = ({currentIdx, itemsCount, onSetCurrentIdx}: CarouselPaginationProps) => {
	return (
    <div className={s.main}>
      {Array(itemsCount)
        .fill("")
        .map((el, i) => (
          <span
            className={`${s.item} ${
              i == currentIdx ? s.current : ""
            }`}
            onClick={() => onSetCurrentIdx(i)}
          ></span>
        ))}
    </div>
  );
};

export default CarouselPagination;