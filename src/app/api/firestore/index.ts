import FirestoreCollection from 'shared/api/firestore'
import { db } from '../../lib/config/firebase'

export default class FirestoreDB {
  collection = new FirestoreCollection(db)
}

export const AppFirestore = new FirestoreDB()
