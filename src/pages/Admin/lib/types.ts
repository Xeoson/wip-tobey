import { type ICollections } from 'app/api/firestore/types'

export type AdminCollectionFieldType = 'text' | 'img' | 'select'

export type IAdminCollections = {
  [Coll in keyof ICollections]: IAdminCollection<Coll>
}
export interface IAdminCollection<C extends keyof ICollections> {
  fields: { [Field in keyof ICollections[C]]?: AdminCollectionFieldType }
  titleField: keyof ICollections[C]
  adding?: boolean
}
