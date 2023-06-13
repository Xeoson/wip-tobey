import { type DetailedHTMLProps, type HTMLAttributes } from 'react'

export interface DP<T = HTMLDivElement>
  extends DetailedHTMLProps<HTMLAttributes<T>, T> {}
