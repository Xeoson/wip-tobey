import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";

export interface DP extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export interface DPInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
export interface DPButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}