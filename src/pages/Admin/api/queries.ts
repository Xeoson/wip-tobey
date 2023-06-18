import { api } from 'app/api'
import {
  type ICollections,
  type ICollectionsValues,
} from 'app/api/firestore/types/index'
import {
  type ICollectionsAddData,
  type ICollectionsUpdateData,
} from 'app/api/firestore/types/query'
import { type AppBaseQueryApi } from 'app/api/types'
import { where, type QueryConstraint } from 'firebase/firestore'

export const {
  useCollectionDocsQuery,
  useAddDocMutation,
  useUpdateDocMutation,
  useDeleteDocMutation,
  util,
  endpoints,
} = api.injectEndpoints({
  endpoints: (build) => ({
    collectionDocs: build.query<ICollectionsValues[], keyof ICollections>({
      async queryFn(collection, { getState, extra }: AppBaseQueryApi) {
        try {
          const { searchTerm, selectedSearchField } = getState().admin!
          let constraints: QueryConstraint[] = []
          if (searchTerm && selectedSearchField) {
            constraints = [
              where(selectedSearchField, '>=', searchTerm),
              where(selectedSearchField, '<=', `${searchTerm} ~`),
            ]
          }
          const data = await extra.firestore.collection.getAll(
            collection,
            ...constraints
          )
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
      providesTags: (res, error, arg) => ['collection'],
    }),
    addDoc: build.mutation<ICollectionsValues, ICollectionsAddData>({
      async queryFn(doc, { getState, extra }: AppBaseQueryApi) {
        try {
          const { selectedCollection } = getState().admin!
          const data = await extra.firestore.collection.add(
            selectedCollection,
            doc,
            {
              returnDoc: true,
            }
          )
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
    }),
    updateDoc: build.mutation<ICollectionsValues, ICollectionsUpdateData>({
      async queryFn(doc, { getState, extra }: AppBaseQueryApi) {
        try {
          const { selectedCollection } = getState().admin!
          const data = await extra.firestore.collection.update(
            selectedCollection,
            doc,
            {
              returnDoc: true,
            }
          )
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
    }),
    deleteDoc: build.mutation<any, string>({
      async queryFn(id, { getState, extra }: AppBaseQueryApi) {
        try {
          const { selectedCollection } = getState().admin!
          await extra.firestore.collection.delete(selectedCollection, id)
          return { data: undefined }
        } catch (error: any) {
          return { error }
        }
      },
      invalidatesTags: ['collection'],
    }),
  }),
})
