import { type PropsWithChildren } from 'react'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import {
  type IAlign,
  type IDirection,
  type IGap,
  type IPadding,
} from '../../lib/types'
import s from './Flex.module.scss'

export interface FlexStyles extends IGap, IAlign, IPadding, IDirection {}

interface FlexProps extends FlexStyles, PropsWithChildren {
  className?: string
}

const mcn = createClassNames(s)

const Flex = ({ children, className, ...props }: FlexProps) => {
  return <div className={mcn(props, className)}>{children}</div>
}

export default Flex
