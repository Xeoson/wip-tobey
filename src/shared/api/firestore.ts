/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { type ICollections } from 'app/api/firestore/types/index'
import {
  type ICollectionsAdd,
  type ICollectionsSet,
  type ICollectionsUpdate,
} from 'app/api/firestore/types/query'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  type DocumentReference,
  type Firestore,
  type QueryConstraint,
	deleteDoc,
} from 'firebase/firestore'

export default class FirestoreCollection {
  constructor(private readonly db: Firestore) {}

  async add<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsAdd[C],
    options?: { returnDoc: false }
  ): Promise<DocumentReference>
  async add<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsAdd[C],
    options?: { returnDoc: true }
  ): Promise<ICollections[C]>
  async add<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsAdd[C],
    options?: { returnDoc: boolean }
  ) {
    const res = await addDoc(collection(this.db, collec), Doc)
    if (options?.returnDoc) {
      return await this.get(collec, res.id)
    }
    return res
  }

  async set<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsSet[C] & { id: string },
    options?: { returnDoc: false }
  ): Promise<undefined>
  async set<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsSet[C] & { id: string },
    options?: { returnDoc: true }
  ): Promise<ICollections[C] | undefined>
  async set<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsSet[C] & { id: string },
    options?: { returnDoc: boolean }
  ) {
    await setDoc(doc(this.db, collec, Doc.id), Doc)
    if (options?.returnDoc) {
      return await this.get(collec, Doc.id)
    }
  }

  async update<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsUpdate[C] & { id: string },
    options?: { returnDoc: false }
  ): Promise<undefined>
  async update<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsUpdate[C] & { id: string },
    options?: { returnDoc: true }
  ): Promise<ICollections[C]>
  async update<C extends keyof ICollections>(
    collec: C,
    Doc: ICollectionsUpdate[C] & { id: string },
    options?: { returnDoc: boolean }
  ) {
    await updateDoc(doc(this.db, collec, Doc.id), Doc)
    if (options?.returnDoc) {
      return await this.get(collec, Doc.id)
    }
  }

	async delete<C extends keyof ICollections>(collec: C, id: string) {
		await deleteDoc(doc(this.db, collec, id))
	}

  async get<C extends keyof ICollections>(collec: C, id: string) {
    const snap = await getDoc(doc(this.db, collec, id))
    return { ...snap.data(), id: snap.id } as ICollections[C] | undefined
  }

  async getAll<C extends keyof ICollections>(
    collec: C,
    ...constraints: QueryConstraint[]
  ) {
    const docsSnap = await getDocs(
      query(collection(this.db, collec), ...constraints)
    )
    return docsSnap.docs.map(
      (el) => ({ ...el.data(), id: el.id } as ICollections[C])
    )
  }
}
