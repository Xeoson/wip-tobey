
import React, { ReactElement } from 'react'
import s from './Button.module.scss'
import { IconType } from 'react-icons';
import { DPButton } from '../../../types';
import cn from 'classnames'

interface ButtonProps extends Omit<DPButton, 'className'> {
  icon?: ReactElement<IconType>;
	color?: 'secondary'
	size?: 'sm' | 'md' | 'lg'
}

const Button = ({icon, children, color, size, ...props}: ButtonProps) => {
	return (
    <button
      {...props}
      className={`${s.main} ${s[color ?? ""]} ${s[size ?? ""]}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;