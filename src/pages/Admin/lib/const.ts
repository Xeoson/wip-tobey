import { type IAdminCollections } from './types'

export const adminCollections: IAdminCollections = {
  category: {
		titleField: "title",
    fields: { preview: 'img', title: 'text' },
    adding: true,
  },
  user: {
		titleField: 'name',
    fields: { avatar: 'img', name: 'text', surname: 'text' },
  },
}
