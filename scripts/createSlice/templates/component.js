
module.exports = ({filename}) => {
	return `
import React from 'react'
import s from './${filename}.module.scss'

export interface ${filename}Props {}

const ${filename} = (props: ${filename}Props) => {
	return <div className={s.main}></div>;
};

export default ${filename};`
}