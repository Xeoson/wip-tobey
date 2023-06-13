import { useAppSelector } from 'app/model/redux'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import CollapsedItem, {
  type CollapsedItemStyles,
} from 'shared/kit/ui/CollapsedItem/CollapsedItem'
import Flex from 'shared/kit/ui/Flex/Flex'
import Form, { type FormStyles } from 'shared/kit/ui/Form/Form'
import Input, { type InputStyles } from 'shared/kit/ui/Input/Input'
import List, { type ListStyles } from 'shared/kit/ui/List/List'
import Text from 'shared/kit/ui/Text/Text'
import Spinner from 'shared/ui/Loaders/Spinner'
import { useCollectionDocs, useUpdateDoc } from '../api/queries'
import { adminCollections } from '../lib/const'
import {
  getSelectedCollection,
  getSelectedCollectionData,
} from '../model/selectors'

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
const inputFormDocStyles: InputStyles = {}
const addBtnStyles: ButtonStyles = {
  theme: 'secondary',
  px: 'md',
  py: 'xs',
}

interface DocListProps {}

const DocList = (props: DocListProps) => {
  const selectedCollection = useAppSelector(getSelectedCollection)
  const { schema } = useAppSelector(getSelectedCollectionData)

  const { mutate: updateDoc } = useUpdateDoc()

  const {
    data: collDocs,
    isLoading,
    isSuccess,
  } = useCollectionDocs(selectedCollection)

  const cb = {
    onSubmitDocForm: (data: any) => {
      updateDoc({ collection: selectedCollection, data })
    },
  }

  const titleField = adminCollections[selectedCollection].titleField

  if (isLoading || !isSuccess) return <Spinner />

  return (
    <List items={collDocs} styles={collapsedList}>
      {(el) => (
        <CollapsedItem
          styles={collapsedItem}
          collapsedContent={
            <Form
              initialData={el}
              styles={formStyles}
              schema={schema}
              onSubmit={cb.onSubmitDocForm}
              returnInput={(p) => (
                <Input
                  {...p.register(p.field)}
                  placeholder={p.field}
                  styles={inputFormDocStyles}
                />
              )}
            >
              <Button styles={addBtnStyles}>Save</Button>
            </Form>
          }
          content={
            <Flex>
              <Text styles={{}}>{el[titleField]}</Text>
            </Flex>
          }
        />
      )}
    </List>
  )
}

export default DocList
