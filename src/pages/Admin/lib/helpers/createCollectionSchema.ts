import { type ICollections } from 'app/api/firestore/firestore'
import { object, string, type ObjectSchema } from 'yup'
import { adminCollections } from '../const'
import { type AdminCollectionFieldType, type IAdminCollections } from '../types'

export default <C extends keyof ICollections>(collection: C) => {
  const collec = { ...adminCollections[collection] }

  const schema: Record<string, any> = {}
  for (const [field, fieldType] of Object.entries(collec.fields) as Array<
    [string, AdminCollectionFieldType]
  >) {
    switch (fieldType) {
      case 'img':
      case 'select':
      case 'text':
        schema[field] = string()
    }
  }

  return { ...collec, schema: object(schema) } as IAdminCollections[C] & {
    schema: ObjectSchema<any>
  }
}
