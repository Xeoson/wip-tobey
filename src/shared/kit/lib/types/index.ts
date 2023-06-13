import { type DefaultSizesType, type DefaultSizesTypeWithAuto } from './const'
import { type DefineTypes } from './helpers'

export type IFontSize = DefineTypes<'fontSize', DefaultSizesType>
export type IDirection = DefineTypes<'direction', 'row' | 'column'>
export type IAlign = DefineTypes<'align', 'center' | 'start' | 'end'>
export type IJustify = DefineTypes<'justify', 'center' | 'start' | 'end'>

type GapTypes = 'gap' | 'gapX' | 'gapY'
export type IGap<Values = DefaultSizesType> = DefineTypes<GapTypes, Values>

type MarginTypes = 'm' | 'mx' | 'my' | 'ml' | 'mr' | 'mt' | 'mb'
export type IMargin = DefineTypes<MarginTypes, DefaultSizesTypeWithAuto>

type PaddingTypes = 'p' | 'px' | 'py' | 'pl' | 'pr' | 'pt' | 'pb'
export type IPadding = DefineTypes<PaddingTypes, DefaultSizesTypeWithAuto>

export type IWidth = DefineTypes<'w', 'full'>
