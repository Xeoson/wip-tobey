import { useAppSelector } from 'app/model/redux'
import { memo } from 'react'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Form, { type FormStyles } from 'shared/kit/ui/Form/Form'
import Input, { type InputStyles } from 'shared/kit/ui/Input/Input'
import { useCreateDoc } from '../api/queries'
import {
  getFormType,
  getSelectedCollection,
  getSelectedCollectionData,
} from '../model/selectors'

const addBtnStyles: ButtonStyles = {
  theme: 'secondary',
  px: 'md',
  py: 'xs',
}

const inputFormDocStyles: InputStyles = {}
const formStyles: FormStyles = {
  gap: 'sm',
}

interface CreateDocProps {}

const CreateDoc = (props: CreateDocProps) => {
  const selectedCollection = useAppSelector(getSelectedCollection)
  const { schema } = useAppSelector(getSelectedCollectionData)
  const formType = useAppSelector(getFormType)

  const { mutate: createDoc } = useCreateDoc()

  if (formType !== 'create') return null

  const cb = {
    onCreate: (data: any) => {
      createDoc({ collection: selectedCollection, data })
    },
  }

  return (
    <Form
      styles={formStyles}
      schema={schema}
      onSubmit={cb.onCreate}
      returnInput={(p) => (
        <Input
          {...p.register(p.field)}
          placeholder={p.field}
          styles={inputFormDocStyles}
        />
      )}
    >
      <Button styles={addBtnStyles}>Create</Button>
    </Form>
  )
}

export default memo(CreateDoc)
