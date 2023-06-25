import { array, object, string, type ObjectSchema } from 'yup'
import { adminCollections } from '../const'
import { type IAdminCollections } from '../types'

export type ICollectionInfo<C extends keyof IAdminCollections> = IAdminCollections[C] & {
  schema: ObjectSchema<any>
}

export default <C extends keyof IAdminCollections>(collection: C): ICollectionInfo<C> => {
  const collec = { ...adminCollections[collection] }

  const schema: Record<any, any> = {}
  for (const { title, type, required } of collec.fieldsInfo) {
    let rule
    switch (type) {
      case 'img_multiple': {
        rule = array()
        if (required) {
          rule = rule.min(1, 'Required field')
        }
        break
      }
      case 'img': {
        rule = object()
        if (required) {
          rule = rule.required('Required field')
        }
        break
      }
      case 'category':
      case 'number':
      case 'textarea':
      case 'select':
      case 'text': {
        rule = string()
        if (required) {
          rule = rule.required('Required field')
        }
        break
      }
    }
    schema[title] = rule
  }

  return { ...collec, schema: object(schema) }
}
