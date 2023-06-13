import { type PropsWithChildren } from 'react'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import {
  type IAlign,
  type IDirection,
  type IGap,
  type IPadding,
} from '../../lib/types'
import s from './index.module.scss'

interface FlexProps
  extends PropsWithChildren,
    IGap,
    IAlign,
    IPadding,
    IDirection {}

const mcn = createClassNames(s)

const Flex = ({ children, ...props }: FlexProps) => {
  return <div className={mcn(props)}>{children}</div>
}

export default Flex
