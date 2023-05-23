import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type InputHTMLAttributes,
} from 'react'

export interface DPof<T> extends DetailedHTMLProps<HTMLAttributes<T>, T> {}
export interface DP
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export interface DPInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
export interface DPButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
