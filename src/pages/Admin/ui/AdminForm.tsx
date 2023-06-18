/* eslint-disable no-case-declarations */
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Form, { type FormStyles } from 'shared/kit/ui/Form/Form'
import Text from 'shared/kit/ui/Text/Text'
import ImageInput from 'shared/kit/ui/inputs/ImageInput/ImageInput'
import FormInput from 'shared/ui/Inputs/FormInput'
import { type ICollectionInfo } from '../lib/helpers/createCollectionSchema'
import { type IAdminCollections } from '../lib/types'
import { ICollectionsValues } from 'app/api/firestore/types'

const formStyles: FormStyles = {
  gap: 'sm',
}
const addBtnStyles: ButtonStyles = {
  theme: 'secondary',
  px: 'md',
  py: 'xs',
}

interface AdminFormProps {
  initialData?: ICollectionsValues[]
  collectionInfo: ICollectionInfo<keyof IAdminCollections>
  onSubmit: (data: any) => void
  isLoading: boolean
  buttonText: string
}

const AdminForm = ({
  initialData,
  onSubmit,
  collectionInfo,
  isLoading,
  buttonText,
}: AdminFormProps) => {
  return (
    <Form
      initialData={initialData}
      styles={formStyles}
      schema={collectionInfo.schema}
      onSubmit={onSubmit}
      returnInput={(
        { register, setValue },
        p: { field: keyof typeof collectionInfo.formFields }
      ) => {
        switch (collectionInfo.formFields[p.field]) {
          case 'img':
            return (
              <ImageInput
                onChangeImages={(images) => setValue('_images', images)}
                initialUrls={initialData ? [initialData[p.field]] : undefined}
                limit={1}
              />
            )
          case 'img_multiple':
            return (
              <ImageInput
                onChangeImages={(images) => setValue('_images', images)}
                initialUrls={initialData ? initialData[p.field] : undefined}
                limit={5}
              />
            )
          case 'text':
            return (
              <FormInput
                {...register(p.field)}
                disabled={isLoading}
                placeholder={p.field}
              />
            )
          case 'select':
            return <Text>SELECT</Text>
        }
      }}
    >
      <Button
        as="button"
        type="submit"
        disabled={isLoading}
        styles={addBtnStyles}
      >
        {buttonText}
      </Button>
    </Form>
  )
}

export default AdminForm
