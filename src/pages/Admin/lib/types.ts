import { type ICollections } from 'app/api/firestore/types'

export type AdminCollectionFieldType = 'text' | 'img' | 'img_multiple' | 'select'

export type IAdminCollections = {
  [Coll in keyof Omit<ICollections, 'api'>]: IAdminCollection<Coll>
}
export interface IAdminCollection<C extends keyof ICollections> {
  formFields: { [Field in keyof ICollections[C]]?: AdminCollectionFieldType },
	searchFields: Array<keyof ICollections[C]>
  titleField: keyof ICollections[C]
  adding?: boolean,
	deleting?: boolean
}
