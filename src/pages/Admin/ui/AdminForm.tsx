/* eslint-disable no-case-declarations */
import { type ICollections } from '@/app/api/firestore/types'
import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import Flex from '@/shared/kit/ui/Flex/Flex'
import TextError from '@/shared/kit/ui/TextError/TextError'
import ImageInput, { type IImageData } from '@/shared/kit/ui/inputs/ImageInput/ImageInput'
import Textarea from '@/shared/kit/ui/inputs/Textarea/Textarea'
import FormInput from '@/shared/ui/Inputs/FormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback, useRef, type ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { type ICollectionInfo } from '../lib/helpers/createCollectionSchema'
import selectImgFields from '../lib/helpers/selectImgFields'
import { type AdminCollectionFieldType, type IAdminCollections, type IFieldInfo } from '../lib/types'
import CategorySearch from './CategorySearch/CategorySearch'

const addBtnStyles: ButtonStyles = {
  theme: 'secondary',
  px: 'md',
  py: 'xs',
}
const clearBtnStyles: ButtonStyles = {
  ...addBtnStyles,
  theme: 'primary',
}

export interface ISubmitAdminFormData<C extends keyof ICollections> {
  data: ICollections[C]
  images: Record<string, IImageData[] | IImageData>
}

interface AdminFormProps<C extends keyof IAdminCollections> {
  initialData?: ICollections[C]
  collectionInfo: ICollectionInfo<C>
  onSubmit: (data: ISubmitAdminFormData<C>) => void
  isLoading: boolean
  buttonText: string
}

const AdminForm = <C extends keyof IAdminCollections>({
  initialData,
  onSubmit,
  collectionInfo,
  isLoading,
  buttonText,
}: AdminFormProps<C>) => {
  const {
    reset,
    control,
    formState: { errors },
    register,
    setValue,
    handleSubmit,
  } = useForm<ICollections[C]>({
    resolver: yupResolver(collectionInfo.schema),
    defaultValues: initialData,
  })

  const imgInputListeners = useRef<Array<() => void>>([])

  const cb = {
    onSubmit: (data: ICollections[C]) => {
      const { fieldsInfo } = collectionInfo
      const images = selectImgFields(data, fieldsInfo)
      onSubmit({
        data,
        images,
      })
    },
    handleResetSubscribe: (cb: () => void) => {
      imgInputListeners.current.push(cb)
      return () => imgInputListeners.current.filter((el) => el !== cb)
    },
    onReset: () => {
      reset()
      imgInputListeners.current.forEach((cb) => cb())
    },
  }

  const renderInput = useCallback(
    ({ title, type, required }: IFieldInfo<C>) => {
      const err = errors[title]?.message
      const renders: Record<AdminCollectionFieldType, () => ReactNode> = {
        img: () => (
          <>
            {err && <TextError message={err} />}
            <ImageInput
              disabled={isLoading}
              subscribeReset={cb.handleResetSubscribe}
              onChangeImages={(images) => setValue(title, images)}
              initialUrls={initialData?.[title] ? [initialData[title]] : undefined}
              limit={1}
            />
          </>
        ),
        img_multiple: () => (
          <>
            {err && <TextError message={err} />}
            <ImageInput
              disabled={isLoading}
              subscribeReset={cb.handleResetSubscribe}
              onChangeImages={(images) => setValue(title, images)}
              initialUrls={initialData?.[title] ? initialData[title] : undefined}
              limit={5}
            />
          </>
        ),
        text: () => (
          <FormInput
            {...register(title)}
            disabled={isLoading}
            placeholder={title}
            errorMessage={errors[title]?.message}
          />
        ),
        textarea: () => (
          <>
            {err && <TextError message={err} />}
            <Textarea {...register(title)} disabled={isLoading} placeholder={title} />
          </>
        ),
        number: () => (
          <FormInput
            {...register(title)}
            type={'number'}
            disabled={isLoading}
            placeholder={title}
            errorMessage={errors[title]?.message}
          />
        ),
        category: () => (
          <Controller
            control={control}
            name={title}
            render={({ field, fieldState }) => (
              <CategorySearch
                selectedCategoryId={field.value}
                placeholder={title}
                onSet={(cat) => setValue(title, cat)}
              />
            )}
          />
        ),
      }
      return renders[type]()
    },
    [initialData, errors, isLoading]
  )

  return (
    <form onSubmit={handleSubmit(cb.onSubmit)}>
      <Flex gap="md" direction="column">
        {collectionInfo.fieldsInfo.map(({ title, type }) =>
          renderInput({
            title,
            type,
          })
        )}
        <Flex gap="sm">
          <Button as="button" type="submit" disabled={isLoading} styles={addBtnStyles}>
            {buttonText}
          </Button>
          <Button
            as="button"
            type="button"
            onClick={cb.onReset}
            disabled={isLoading}
            styles={clearBtnStyles}
          >
            Clear
          </Button>
        </Flex>
      </Flex>
    </form>
  )
}

export default AdminForm
