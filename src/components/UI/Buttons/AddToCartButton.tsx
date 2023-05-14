
import React, { useState } from 'react'
import s from './AddToCartButton.module.scss'
import { DP } from '../../../types';

interface AddToCartButtonProps extends Pick<DP, 'className'> {
	rotation: 'vertical' | 'horizontal',
	productId: string,
	initValue?: number;
}

const AddToCartButton = ({initValue = 0, rotation, productId, className, ...props}: AddToCartButtonProps) => {
	const [value, setValue] = useState(initValue)

	const handleChange = (inc: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
		e.stopPropagation()
    const val = value + inc;
    setValue(val);
  }

	return (
    <div className={`${s.main} ${s[rotation]} ${className ?? ''}`}>
      <button className={s.moreBtn} onClick={handleChange(1)}></button>
      {value > 0 && (
        <>
          <span>{value}</span>
          <button
            className={s.lessBtn}
            onClick={handleChange(-1)}
          ></button>
        </>
      )}
    </div>
  );
};

export default AddToCartButton;