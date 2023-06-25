/* eslint-disable no-case-declarations */
import { type ICollectionsValues } from '@/app/api/firestore/types'
import { useAppSelector } from '@/app/model/redux'
import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import CollapsedItem, { type CollapsedItemStyles } from '@/shared/kit/ui/CollapsedItem/CollapsedItem'
import Flex from '@/shared/kit/ui/Flex/Flex'
import Icon from '@/shared/kit/ui/Icon/Icon'
import List, { type ListStyles } from '@/shared/kit/ui/List/List'
import Text from '@/shared/kit/ui/Text/Text'
import { type IImageData } from '@/shared/kit/ui/inputs/ImageInput/ImageInput'
import Spinner from '@/shared/ui/Loaders/Spinner'
import { memo, useCallback, useEffect, useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useCollectionDocsQuery, useDeleteDocMutation, useUpdateDocMutation } from '../api/queries'
import { adminCollections } from '../lib/const'
import { getSelectedCollectionData, useFormType, useSelectedCollection } from '../model/selectors'
import AdminForm from './AdminForm'
import { useUser } from '@/entities/user/model/selectors'

const collapsedList: ListStyles = {
  gap: 'sm',
}
const collapsedItem: CollapsedItemStyles = {
  border: 'solid',
  round: 'sm',
  px: 'lg',
  py: 'md',
}
const delBtnStyles: ButtonStyles = {
  ml: 'auto',
}

interface DocListProps {}

const DocList = (props: DocListProps) => {
  const collectionInfo = useAppSelector(getSelectedCollectionData)
  const selectedCollection = useSelectedCollection()
  const formType = useFormType()
	const user = useUser()

  // const {} = useAdminActions()
  const closeCollapsedItemCb = useRef<(() => void) | undefined>()

  useEffect(() => {
    closeCollapsedItemCb.current = undefined
  }, [selectedCollection])

  const {
    data: collections,
    isLoading,
    isSuccess,
    isFetching,
  } = useCollectionDocsQuery(selectedCollection)
  const [updateDoc, { isLoading: isUpdating }] = useUpdateDocMutation()
  const [delDoc, { isLoading: isDeleting }] = useDeleteDocMutation()

  const cb = {
    onSubmitDocForm: (data: {
      data: ICollectionsValues
      images: Record<string, IImageData[] | IImageData>
    }) => {
      updateDoc(data)
    },
    onItemClose: (cb: () => void) => {
      closeCollapsedItemCb.current = cb
    },
    onDelete: useCallback(
      (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        delDoc(id)
      },
      []
    ),
  }

  if (formType === 'create') return null
  if (isLoading || !isSuccess) return <Spinner />
  if (collections.length === 0) return <Text>Not found</Text>

  const titleField = adminCollections[selectedCollection].titleField

  return (
    <>
      <List items={collections} isFetching={isFetching} styles={collapsedList}>
        {(el) => (
          <CollapsedItem
            onOpenCbRef={closeCollapsedItemCb}
            closeCallback={cb.onItemClose}
            styles={collapsedItem}
            collapsedContent={
              <AdminForm
                buttonText="Save"
                collectionInfo={collectionInfo}
                initialData={el}
                isLoading={isUpdating}
                onSubmit={cb.onSubmitDocForm}
              />
            }
            content={
              <Flex>
                <Text styles={{}}>{el[titleField]}</Text>
                {(collectionInfo.deleting === 'all' || (collectionInfo.deleting === 'admin' && user?.role === 'admin')) && (
                  <Button disabled={isDeleting} styles={delBtnStyles} onClick={cb.onDelete(el.id)}>
                    <Icon Icon={AiOutlineDelete} />
                  </Button>
                )}
              </Flex>
            }
          />
        )}
      </List>
    </>
  )
}

export default memo(DocList)
