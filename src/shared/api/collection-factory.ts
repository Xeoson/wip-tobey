import { type Firestore } from 'firebase/firestore'
import FirestoreCollection from './firestore'

export default class FirestoreCollectionFactory {
  constructor(private readonly db: Firestore) {}

  createCollection<T extends Record<string, any>>(collection: string) {
    return new FirestoreCollection<T>(this.db, collection)
  }
}
