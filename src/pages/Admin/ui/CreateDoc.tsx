import { type ICollectionsValues } from '@/app/api/firestore/types'
import { useAppSelector } from '@/app/model/redux'
import { type IImageData } from '@/shared/kit/ui/inputs/ImageInput/ImageInput'
import { memo } from 'react'
import { useAddDocMutation } from '../api/queries'
import { getSelectedCollectionData, useFormType } from '../model/selectors'
import AdminForm from './AdminForm'

interface CreateDocProps {}

const CreateDoc = (props: CreateDocProps) => {
  const collectionInfo = useAppSelector(getSelectedCollectionData)
  const formType = useFormType()

  const [addDoc, { isLoading: isCreating }] = useAddDocMutation()

  if (formType !== 'create') return null

  const cb = {
    onCreate: (data: {
      data: ICollectionsValues
      images: Record<string, IImageData[] | IImageData>
    }) => {
      addDoc(data)
    },
  }

  return (
    <AdminForm
      buttonText="Create"
      collectionInfo={collectionInfo}
      isLoading={isCreating}
      onSubmit={cb.onCreate}
    />
  )
}

export default memo(CreateDoc)
