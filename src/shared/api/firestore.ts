/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  type DocumentReference,
  type Firestore,
} from 'firebase/firestore'


export class FirestoreCollection<T extends { id: string }> {
  constructor(
    private readonly db: Firestore,
    private readonly collection: string
  ) {}

  async add(Doc: T, options?: { returnDoc: false }): Promise<DocumentReference>
  async add(Doc: T, options?: { returnDoc: true }): Promise<T>
  async add(Doc: T, options?: { returnDoc: boolean }) {
    const res = await addDoc(collection(this.db, this.collection), Doc)
    if (options?.returnDoc) {
      return await this.get(res.id)
    }
    return res
  }

  async set(Doc: T, options?: { returnDoc: false }): Promise<undefined>
  async set(Doc: T, options?: { returnDoc: true }): Promise<T | undefined>
  async set(Doc: T, options?: { returnDoc: boolean }) {
    await setDoc(doc(this.db, this.collection, Doc.id), Doc)
    if (options?.returnDoc) {
      return await this.get(Doc.id)
    }
  }

  async get(id: string) {
    const snap = await getDoc(doc(this.db, this.collection, id))
    return snap.data() as T | undefined
  }
}
