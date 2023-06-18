/* eslint-disable no-case-declarations */
import { useAppSelector } from 'app/model/redux'
import { memo, useCallback, useEffect, useRef } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import CollapsedItem, {
  type CollapsedItemStyles,
} from 'shared/kit/ui/CollapsedItem/CollapsedItem'
import Flex from 'shared/kit/ui/Flex/Flex'
import { type FormStyles } from 'shared/kit/ui/Form/Form'
import Icon from 'shared/kit/ui/Icon/Icon'
import List, { type ListStyles } from 'shared/kit/ui/List/List'
import Text from 'shared/kit/ui/Text/Text'
import Spinner from 'shared/ui/Loaders/Spinner'
import {
  useCollectionDocsQuery,
  useDeleteDocMutation,
  useUpdateDocMutation,
} from '../api/queries'
import { adminCollections } from '../lib/const'
import {
  getSelectedCollectionData,
  useFormType,
  useSelectedCollection,
} from '../model/selectors'
import AdminForm from './AdminForm'

const collapsedList: ListStyles = {
  gap: 'sm',
}
const collapsedItem: CollapsedItemStyles = {
  theme: 'primary',
  px: 'lg',
  py: 'sm',
}
const formStyles: FormStyles = {
  gap: 'sm',
}

// const addBtnStyles: ButtonStyles = {
//   theme: 'secondary',
//   px: 'md',
//   py: 'xs',
// }
const delBtnStyles: ButtonStyles = {
  ml: 'auto',
}

interface DocListProps {}

const DocList = (props: DocListProps) => {
  const collectionInfo = useAppSelector(getSelectedCollectionData)
  const selectedCollection = useSelectedCollection()
  const formType = useFormType()

  // const {} = useAdminActions()
  const closeCollapsedItemCb = useRef<(() => void) | undefined>()

  useEffect(() => {
    closeCollapsedItemCb.current = undefined
  }, [selectedCollection])

  const {
    data: collections,
    isLoading,
    isSuccess,
  } = useCollectionDocsQuery(selectedCollection)
  const [updateDoc, { isLoading: isUpdating }] = useUpdateDocMutation()
  const [delDoc, { isLoading: isDeleting }] = useDeleteDocMutation()

  const cb = {
    onSubmitDocForm: (data: any) => {
      console.log('data :>> ', data)
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
    onChangeImages: (images: string[]) => {},
  }

  if (formType === 'create') return null
  if (isLoading || !isSuccess) return <Spinner />

  const titleField = adminCollections[selectedCollection].titleField

  return (
    <>
      <List items={collections} styles={collapsedList}>
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
              // <Form
              //   initialData={el}
              //   styles={formStyles}
              //   schema={collectionInfo.schema}
              //   onSubmit={cb.onSubmitDocForm}
              //   returnInput={(
              //     { register, setValue },
              //     p: { field: keyof typeof collectionInfo.formFields }
              //   ) => {
              //     switch (collectionInfo.formFields[p.field]) {
              //       case 'img':
              //         const img = el[p.field]
              //         const isArr = Array.isArray(img)
              //         return (
              //           <ImageInput
              //             onChangeImages={(images) =>
              //               setValue('_images', images)
              //             }
              //             initialUrls={isArr ? img : [img]}
              //             limit={isArr ? 5 : 1}
              //           />
              //         )
              //       case 'text':
              //         return (
              //           <FormInput
              //             {...register(p.field)}
              //             disabled={isUpdating}
              //             placeholder={p.field}
              //           />
              //         )
              //       case 'select':
              //         return <Text>SELECT</Text>
              //     }
              //   }}
              // >
              //   <Button
              //     as="button"
              //     type="submit"
              //     disabled={isUpdating}
              //     styles={addBtnStyles}
              //   >
              //     Save
              //   </Button>
              // </Form>
            }
            content={
              <Flex>
                <Text styles={{}}>{el[titleField]}</Text>
                {collectionInfo.deleting && (
                  <Button
                    disabled={isDeleting}
                    styles={delBtnStyles}
                    onClick={cb.onDelete(el.id)}
                  >
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
