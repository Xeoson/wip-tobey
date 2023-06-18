import { useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import formatToBase64 from 'shared/lib/helpers/formatToBase64'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import Button from '../../Button/Button'
import Flex, { type FlexStyles } from '../../Flex/Flex'
import Icon from '../../Icon/Icon'
import s from './ImageInput.module.scss'

interface IImageData {
  isInitial?: boolean
  url: string
  file?: File
  deleted?: boolean
}

export interface ImageInputStyles extends FlexStyles {}

export interface ImageInputProps {
  limit?: number
  styles?: ImageInputStyles
  initialUrls?: string[]
  onChangeImages: (images: IImageData[]) => void
}

const mcn = createClassNames(s)

const ImageInput = ({
  onChangeImages,
  initialUrls = [],
  styles,
  limit = 5,
}: ImageInputProps) => {
  const [images, setImages] = useState<IImageData[]>(
    initialUrls.map((el) => ({ url: el, isInitial: true }))
  )

  const cb = {
    onAdd: async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return
      const filesBase64: string[] = []
      const selectedFiles = [...e.target.files].slice(0, limit)
      for (const el of selectedFiles) {
        const base64 = await formatToBase64(el)
        filesBase64.push(base64 as string)
      }
      setImages((prev) => {
        const newImages = [
          ...prev,
          ...filesBase64.map((base64, i) => ({
            url: base64,
            file: selectedFiles[i],
          })),
        ]
        onChangeImages(newImages)
        return newImages
      })
    },
    onDelete: (image: IImageData) => () => {
      let filtered: IImageData[] = []
      if (image.isInitial) {
        filtered = images.map((el) => {
          if (el.url === image.url) {
            return { ...el, deleted: true }
          }
          return el
        })
      } else {
        filtered = images.filter((el) => el.url !== image.url)
      }
      onChangeImages(filtered)
      setImages(filtered)
    },
  }

  const addBtnVisible = images.filter((el) => !el.deleted).length < limit

  return (
    <Flex p="sm" className={mcn(styles)} gap="sm">
      {images.map((el, i) =>
        el.deleted ? null : (
          <div key={i} className={s.imgBlock}>
            <img src={el.url} />
            <Button onClick={cb.onDelete(el)}>
              <Icon Icon={IoMdClose} />
            </Button>
          </div>
        )
      )}
      {addBtnVisible && (
        <label className={s.label}>
          <input
            onChange={cb.onAdd}
            className={s.input}
            type="file"
            accept="image/*"
            multiple
          />
          <Icon styles={{ size: 'lg' }} Icon={BsPlusCircleDotted} />
        </label>
      )}
    </Flex>
  )
}

export default ImageInput
