import { type PropsWithChildren } from 'react'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import { type IDirection, type IGap } from '../../lib/types'
import s from './Grid.module.scss'

interface GridProps extends PropsWithChildren, IDirection, IGap {
  columns?: '1_3'
}

const mcn = createClassNames(s)

const Grid = ({ children, ...props }: GridProps) => {
  return <div className={mcn(props)}>{children}</div>
}

export default Grid
