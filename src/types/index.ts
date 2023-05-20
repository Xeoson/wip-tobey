import { type ButtonHTMLAttributes, type DetailedHTMLProps, type HTMLAttributes, type InputHTMLAttributes, type ReactElement } from "react"
import { type IconType } from "react-icons"

export interface DP extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export interface DPInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface DPButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export interface IProfileSettingItem {
  icon: ReactElement<IconType>
  title: string
  url: string
}
