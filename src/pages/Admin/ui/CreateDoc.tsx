import { useAppSelector } from 'app/model/redux'
import { memo } from 'react'
import { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import { type FormStyles } from 'shared/kit/ui/Form/Form'
import { useAddDocMutation } from '../api/queries'
import { getSelectedCollectionData, useFormType } from '../model/selectors'
import AdminForm from './AdminForm'

const addBtnStyles: ButtonStyles = {
  theme: 'secondary',
  px: 'md',
  py: 'xs',
}

const formStyles: FormStyles = {
  gap: 'sm',
}

interface CreateDocProps {}

const CreateDoc = (props: CreateDocProps) => {
  const collectionInfo = useAppSelector(getSelectedCollectionData)
  const formType = useFormType()

  const [addDoc, { isLoading: isCreating }] = useAddDocMutation()

  if (formType !== 'create') return null

	console.log('collectionInfo :>> ', collectionInfo);

  const cb = {
    onCreate: (doc: any) => {
      addDoc(doc)
    },
  }

  return (
    <AdminForm
      buttonText="Create"
      collectionInfo={collectionInfo}
      isLoading={isCreating}
      onSubmit={cb.onCreate}
    />
    // <Form
    //   styles={formStyles}
    //   schema={schema}
    //   onSubmit={cb.onCreate}
    //   returnInput={({register}, p) => (
    //     <FormInput
    //       {...register(p.field)}
    //       disabled={isCreating}
    //       placeholder={p.field}
    //     />
    //   )}
    // >
    //   <Button disabled={isCreating} styles={addBtnStyles}>
    //     Create
    //   </Button>
    // </Form>
  )
}

export default memo(CreateDoc)
