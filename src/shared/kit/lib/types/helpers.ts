import { type Key } from 'react'

export type KeyFieldsType<I extends Record<string, any>> = {
  [KeyItem in keyof I]: I[KeyItem] extends Key ? KeyItem : never
}[keyof I]

export type DefineTypes<Types extends string, Values> = {
  [Key in Types]?: Values
}
