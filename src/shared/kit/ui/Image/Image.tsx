
import React from 'react'
import s from './Image.module.scss'

export interface ImageProps {}

const Image = (props: ImageProps) => {
	return <div className={s.main}></div>;
};

export default Image;