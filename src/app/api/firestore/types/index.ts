import { type ICategory, type IProduct, type IUser } from './models'

export interface ICollections {
  user: IUser
  category: ICategory
  product: IProduct
}

export type ICollectionsValues = ICollections[keyof ICollections]
