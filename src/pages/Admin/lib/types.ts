import { type ICollections } from '@/app/api/firestore/types'

type IAccessType = 'all' | 'admin'
export type AdminCollectionFieldType = 'text' | 'category' | 'img' | 'img_multiple' | 'select' | 'number' | 'textarea'

export interface IFieldInfo<C extends keyof ICollections> {
  title: keyof ICollections[C]
  type: AdminCollectionFieldType
  required?: boolean
}

export type IAdminCollections = {
  [Coll in keyof Omit<ICollections, 'api'>]: IAdminCollection<Coll>
}
export interface IAdminCollection<C extends keyof ICollections> {
  fieldsInfo: Array<IFieldInfo<C>>
  searchFields: Array<keyof ICollections[C]>
  titleField: keyof ICollections[C]
  adding?: IAccessType
  deleting?: IAccessType
  editing?: IAccessType
}
