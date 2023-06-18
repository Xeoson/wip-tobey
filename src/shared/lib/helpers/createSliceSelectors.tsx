import { useAppSelector } from 'app/model/redux'
import { type AppState } from 'app/model/redux/types'
import capitalize from './capitalize'

export type AppStateNotNull = Required<AppState>

export default <S extends keyof AppState>(
  appStateField: S,
  ...sliceFields: Array<keyof AppStateNotNull[S]>
) => {
  const res: {
    [Key in keyof AppStateNotNull[S] as `get${Capitalize<Key & string>}`]-?: (
      state: AppState
    ) => AppStateNotNull[S][Key]
  } & {
    [Key in keyof AppStateNotNull[S] as `use${Capitalize<
      Key & string
    >}`]-?: () => AppStateNotNull[S][Key]
  } = {} as any

  sliceFields.forEach((el) => {
    const capField = capitalize(el as string)
    const selector = (state: AppState) =>
      (state[appStateField] as AppStateNotNull[S])[el]
    res[`get${capField}`] = selector
    res[`use${capField}`] = () => useAppSelector(selector)
  })

  return res
}
