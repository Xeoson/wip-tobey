import { type ICollections } from '@/app/api/firestore/types'
import { type IFieldInfo } from '../types'

export default <C extends keyof ICollections>(
  data: ICollections[C],
  fieldsType: Array<IFieldInfo<C>>
) => {
  return Object.fromEntries(
    Object.entries(data).filter(([field, value]) => {
      return fieldsType.some(
        (el) =>
          el.title === field &&
          (el.type === 'img' || el.type === 'img_multiple')
      )
    })
  )
}
