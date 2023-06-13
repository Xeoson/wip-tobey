import { type ICollections } from './index'

export type ICollectionsSet = {
  [Key in keyof ICollections]: Omit<ICollections[Key], 'createdAt'>
}
export type ICollectionsSetData = ICollectionsSet[keyof ICollections]

export type ICollectionsAdd = {
  [Key in keyof ICollections]: Omit<ICollections[Key], 'id' | 'createdAt'>
}
export type ICollectionsAddData = ICollectionsAdd[keyof ICollections]

export type ICollectionsUpdate = {
  [Key in keyof ICollections]: Partial<Omit<ICollections[Key], 'createdAt'>> & {
    id: string
  }
}
export type ICollectionsUpdateData = ICollectionsUpdate[keyof ICollections]
