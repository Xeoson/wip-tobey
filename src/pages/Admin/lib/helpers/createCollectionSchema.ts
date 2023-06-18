import { array, object, string, type ObjectSchema } from 'yup'
import { adminCollections } from '../const'
import { type IAdminCollections } from '../types'

export type ICollectionInfo<C extends keyof IAdminCollections> =
  IAdminCollections[C] & {
    schema: ObjectSchema<any>
  }

export default <C extends keyof IAdminCollections>(
  collection: C
): ICollectionInfo<C> => {
  const collec = { ...adminCollections[collection] }

  const schema: Record<string, any> = {}
  for (const [field, fieldType] of Object.entries(collec.formFields)) {
    switch (fieldType) {
      case 'img_multiple':
      case 'img':
        schema[field] = array()
        break
      case 'select':
      case 'text':
        schema[field] = string()
    }
  }

  return { ...collec, schema: object(schema) }
}
