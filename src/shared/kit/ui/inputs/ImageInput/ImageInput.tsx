import formatToBase64 from '@/shared/lib/helpers/formatToBase64'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import Image from '@/shared/ui/Blocks/Image'
import { useCallback, useEffect, useState } from 'react'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import Button from '../../Button/Button'
import Flex, { type FlexStyles } from '../../Flex/Flex'
import Icon from '../../Icon/Icon'
import s from './ImageInput.module.scss'

export interface IImageData {
  isInitial?: boolean
  url: string
  deleted?: boolean
}

export interface ImageInputStyles extends FlexStyles {}

export interface ImageInputProps {
	disabled?: boolean,
  subscribeReset?: (cb: () => void) => () => void
  limit?: number
  styles?: ImageInputStyles
  initialUrls?: string[]
  onChangeImages: (images: IImageData[] | IImageData | undefined) => void
}

const mcn = createClassNames(s)

const ImageInput = ({
  onChangeImages,
  initialUrls = [],
  styles,
  limit = 5,
  subscribeReset,
	disabled
}: ImageInputProps) => {
  const [images, setImages] = useState<IImageData[]>(
    initialUrls.map((el) => ({ url: el, isInitial: true }))
  )

	console.log('initialUrls :>> ', initialUrls);
	console.log('images :>> ', images);

  useEffect(() => {
    return subscribeReset?.(() => {
      setImages([])
      if (limit === 1) {
        onChangeImages(undefined)
      } else {
        onChangeImages([])
      }
    })
  }, [])

  const cb = {
    onAdd: useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return
      const selectedFiles = [...e.target.files].slice(0, limit)
      if (selectedFiles.some((el) => !el.type.startsWith('image/'))) return
      const filesBase64 = await formatToBase64(selectedFiles)
      setImages((prev) => {
        const newImages = [...prev, ...filesBase64.map((f) => ({ url: f }))]
        if (limit === 1) {
          onChangeImages(newImages[0])
        } else {
          onChangeImages(newImages)
        }
        return newImages
      })
    }, []),
    onDelete: useCallback(
      (image: IImageData) => () => {
        let filtered: IImageData[] = []
        setImages((images) => {
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
          if (limit === 1) {
            onChangeImages(undefined)
            return []
          } else {
            onChangeImages(filtered)
            return filtered
          }
        })
      },
      []
    ),
  }

  const addBtnVisible = images.filter((el) => !el.deleted).length < limit

  return (
    <Flex disabled={disabled} p="sm" className={mcn(styles)} gap="sm">
      {images.map((el, i) =>
        el.deleted ? null : (
          <div key={i} className={s.imgBlock}>
            {el.url.startsWith('data') ? (
              <img src={el.url} />
            ) : (
              <Image publicPath={el.url} sources={[]} />
            )}
            <Button disabled={disabled} onClick={cb.onDelete(el)}>
              <Icon Icon={IoMdClose} />
            </Button>
          </div>
        )
      )}
      {addBtnVisible && (
        <label className={s.label}>
          <input disabled={disabled} onChange={cb.onAdd} className={s.input} type="file" accept="image/*" multiple />
          <Icon styles={{ size: 'lg' }} Icon={BsPlusCircleDotted} />
        </label>
      )}
    </Flex>
  )
}

export default ImageInput
