import { type IAdminCollections } from './types'

export const adminCollections: IAdminCollections = {
  category: {
    titleField: 'title',
    fieldsInfo: [
      { title: 'preview', type: 'img', required: true },
      { title: 'title', type: 'text', required: true },
      { title: 'parentId', type: 'category' },
    ],
    searchFields: ['id', 'title', 'slug'],
    adding: 'admin',
    deleting: 'admin',
  },
  user: {
    titleField: 'name',
    fieldsInfo: [
      { title: 'avatar', type: 'img' },
      { title: 'name', type: 'text', required: true },
      { title: 'surname', type: 'text' },
      { title: 'phone', type: 'number' },
    ],
    searchFields: ['id', 'email', 'name', 'phone', 'surname'],
  },
  product: {
    titleField: 'title',
    fieldsInfo: [
      { title: 'images', type: 'img_multiple', required: true },
      { title: 'description', type: 'textarea' },
      { title: 'price', type: 'number', required: true },
      { title: 'title', type: 'text', required: true },
      { title: 'categoryId', type: 'category', required: true },
    ],
    searchFields: ['id', 'description', 'price', 'rating', 'title'],
    adding: 'all',
    deleting: 'all',
  },
}
