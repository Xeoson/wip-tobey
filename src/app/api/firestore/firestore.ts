import { type IUser } from 'app/api/firestore/types'
import FirestoreCollectionFactory from 'shared/api/collection-factory'
import { db } from '../firebase'

const factory = new FirestoreCollectionFactory(db)

export default class Firestore {
  user = factory.createCollection<IUser>('user')
}

export const AppFirestore = new Firestore()
