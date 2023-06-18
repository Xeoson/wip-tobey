import { type IAdminCollections } from './types'

export const adminCollections: IAdminCollections = {
  category: {
    titleField: 'title',
    formFields: { preview: 'img', title: 'text' },
    searchFields: ['id', 'title', 'slug'],
    adding: true,
    deleting: true,
  },
  user: {
    titleField: 'name',
    formFields: { avatar: 'img', name: 'text', surname: 'text', phone: 'text' },
    searchFields: ['id', 'email', 'name', 'phone', 'surname'],
  },
  product: {
    titleField: 'title',
    formFields: {
      description: 'text',
      images: 'img_multiple',
      price: 'text',
      title: 'text',
    },
    searchFields: ['id', 'description', 'price', 'rating', 'title'],
    adding: true,
    deleting: true,
  },
}
