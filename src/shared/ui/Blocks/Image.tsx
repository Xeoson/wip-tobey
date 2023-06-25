import cn from '@/shared/lib/helpers/classNames'
import { type DPImage } from '@/shared/lib/types'
import { useEffect, useState } from 'react'
import s from './Image.module.scss'

const CLOUD_NAME = import.meta.env.VITE_CD_CLOUD_NAME

export interface ISource {
  transform: string[]
  srcSet?: string
  media?: string
  sizes?: string
}

interface ImageProps extends DPImage {
  sources: ISource[]
  publicPath: string
  defaultTransf?: string[]
  isVisible?: boolean
}

const Image = ({
  className,
  publicPath,
  sources,
  isVisible = true,
  defaultTransf = ['q_auto:420', 'f_auto', 'fl_progressive'],
  ...props
}: ImageProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible && isVisible) {
      setVisible(true)
    }
  }, [isVisible])

  const thumbnailTransform = visible ? [] : ['q_1:420', 'c_thumb', 'w_50']

  return (
    <picture className={cn(s.main, className)}>
      {sources.map((el, i) => (
        <source
          key={i}
          srcSet={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${[
            ...defaultTransf,
            ...el.transform,
            ...thumbnailTransform,
          ].join(',')}/${publicPath}`}
          sizes={el.sizes}
          media={el.media}
        />
      ))}
      <img
        src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${defaultTransf.join(
          ','
        )}/${publicPath}`}
        sizes=""
      />
    </picture>
  )
}

export default Image
