import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ImgHTMLAttributes,
  type InputHTMLAttributes,
} from 'react'

export interface DP<T = HTMLDivElement>
  extends DetailedHTMLProps<HTMLAttributes<T>, T> {}
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

export interface DPImage
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}
