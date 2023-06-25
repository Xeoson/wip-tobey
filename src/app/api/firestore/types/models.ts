import { type IUserRole } from './other'

export interface IVariant {
  type: 'color' | 'spec'
  variants: string[]
}

export interface IProduct {
  id: string
  title: string
  description: string
  price: number
  categoryId: string // +
  rating: number
  images: string[]
}

export interface ICategory {
  id: string
  title: string
  preview: string
  slug: string
  parentId?: string // +
}

export interface IUser {
  id: string
  name: string
  surname?: string
  avatar?: string
  email: string
  phone?: string
  createdAt: number
  updatedAt: number
  role?: IUserRole
}

export interface IUserOrder {
  id: string
  createdAt: number
  productIds: string[]
  status: 'created' | 'delivery' | 'canceled' | 'finished'
  totalPrice: number
}
export interface IUserOrderPopulated extends IUserOrder {
  products: IProduct[]
}
