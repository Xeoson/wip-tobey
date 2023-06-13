import { AppFirestore } from 'app/api/firestore/firestore'
import { type ICollections } from 'app/api/firestore/types/index'
import {
  type ICollectionsAddData,
  type ICollectionsUpdateData,
} from 'app/api/firestore/types/query'
import { useMutation, useQuery } from 'react-query'

export const useCollectionDocs = (collection: keyof ICollections) =>
  useQuery({
    queryKey: ['collections', collection],
    queryFn: async () => await AppFirestore.collection.getAll(collection),
  })

export const useCreateDoc = () =>
  useMutation({
    mutationFn: async ({
      collection,
      data,
    }: {
      collection: keyof ICollections
      data: ICollectionsAddData
    }) => await AppFirestore.collection.add(collection, data),
  })

export const useUpdateDoc = () =>
  useMutation({
    mutationFn: async ({
      collection,
      data,
    }: {
      collection: keyof ICollections
      data: ICollectionsUpdateData
    }) => await AppFirestore.collection.update(collection, data),
  })
