
import React from 'react'
import s from './Hr.module.scss'

interface HrProps {
	type?: 'dashed',
	size?: 'full'
}

const Hr = ({type, size}: HrProps) => {
	return <hr className={`${s.main} ${s[type ?? '']} ${s[size ?? '']}`}></hr>;
};

export default Hr;