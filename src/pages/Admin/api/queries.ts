import { api } from '@/app/api'
import { type ICollections, type ICollectionsValues } from '@/app/api/firestore/types/index'
import { type ICategory } from '@/app/api/firestore/types/models'
import { type AppBaseQueryApi } from '@/app/api/types'
import { type IImageData } from '@/shared/kit/ui/inputs/ImageInput/ImageInput'
import { where, type QueryConstraint } from 'firebase/firestore'
import serveImgData from './helpers/serveImgData'

const CLOUD_NAME = import.meta.env.VITE_CD_CLOUD_NAME
const API_KEY = import.meta.env.VITE_CD_API_KEY
const API_SECRET = import.meta.env.VITE_CD_API_SECRET

export const {
  useCollectionDocsQuery,
  useAddDocMutation,
  useUpdateDocMutation,
  useDeleteDocMutation,
  useLazySearchCategoryQuery,
	useLazyCategoryDocQuery,
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
          const data = await extra.firestore.collection.getAll(collection, ...constraints)
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
      providesTags: (res, error, arg) => ['collection'],
    }),
    addDoc: build.mutation<
      ICollectionsValues,
      {
        data: ICollectionsValues
        images: Record<string, IImageData[] | IImageData>
      }
    >({
      async queryFn(docData, { getState, extra }: AppBaseQueryApi) {
        try {
          const imgsRes = await serveImgData(docData.images)
          const { selectedCollection } = getState().admin!
          const data = await extra.firestore.collection.add(
            selectedCollection,
            { ...docData.data, ...imgsRes },
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
    updateDoc: build.mutation<
      ICollectionsValues,
      {
        data: ICollectionsValues
        images: Record<string, IImageData[] | IImageData>
      }
    >({
      async queryFn(docData, { getState, extra }: AppBaseQueryApi) {
        try {
          const imgsRes = await serveImgData(docData.images)
          const { selectedCollection } = getState().admin!
          const data = await extra.firestore.collection.update(
            selectedCollection,
            { ...docData.data, ...imgsRes },
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
          const collectionDoc = await extra.firestore.collection.get(selectedCollection, id)
          if (collectionDoc) {
            await extra.firestore.collection.delete(selectedCollection, id)
          }
          return { data: undefined }
        } catch (error: any) {
          return { error }
        }
      },
      invalidatesTags: ['collection'],
    }),
    searchCategory: build.query<ICategory[], string | undefined>({
      async queryFn(searchTerm, { getState, extra }: AppBaseQueryApi) {
        try {
          let constraints: QueryConstraint[] = []
          if (searchTerm) {
            constraints = [where('title', '>=', searchTerm), where('title', '<=', `${searchTerm} ~`)]
          }
          const data = await extra.firestore.collection.getAll('category', ...constraints)
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
    }),
    categoryDoc: build.query<ICategory, string>({
      async queryFn(categId, { extra, getState }: AppBaseQueryApi) {
        try {
          const data = await extra.firestore.collection.get('category', categId)
          return { data }
        } catch (error: any) {
          return { error }
        }
      },
    }),
  }),
})
