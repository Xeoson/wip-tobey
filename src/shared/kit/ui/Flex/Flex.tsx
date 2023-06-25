import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import { ForwardedRef, forwardRef, type PropsWithChildren } from 'react'
import {
	IBorder,
  type IAlign,
  type IDirection,
  type IGap,
  type IHeight,
  type IJustify,
  type IMargin,
  type IPadding,
	IRound,
} from '../../lib/types'
import s from './Flex.module.scss'

export interface FlexStyles extends IGap, IAlign, IJustify, IPadding, IDirection, IMargin, IHeight, IBorder, IRound {}

interface FlexProps extends FlexStyles, PropsWithChildren {
  className?: string
  disabled?: boolean
}

const mcn = createClassNames(s)

const Flex = forwardRef(({ children, className, ...props }: FlexProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <div className={mcn(props, className)} ref={ref}>{children}</div>
})

export default Flex
