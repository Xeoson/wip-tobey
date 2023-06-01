import { useEffect, useState } from 'react'
import { type DP } from 'shared/lib/types'
import s from './Image.module.scss'
import cn from 'shared/lib/helpers/classNames'

const CLOUD_NAME = 'ds3ctqoro'

export interface ISource {
  transf?: string
  srcSet?: string
  media?: string
  sizes?: string
}

interface ImageProps extends DP {
  sources: ISource[]
  publicPath: string
  defaultTransf?: string
  isVisible: boolean
}

const Image = ({
  className,
  publicPath,
  sources,
  isVisible,
  defaultTransf = 'q_auto:420,f_auto,',
  ...props
}: ImageProps) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible && isVisible) {
      setVisible(true)
    }
  }, [isVisible])

  const thumbnailTransform = visible ? '' : ',q_1:420,c_thumb,w_50'

  return (
    <picture className={cn(s.main, className)}>
      {sources.map((el, i) => (
        <source
          key={i}
          srcSet={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${defaultTransf}${
            el.transf ?? ''
          }${thumbnailTransform}/${publicPath}`}
          sizes={el.sizes}
          media={el.media}
        />
      ))}
      <img
        src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_1:420,c_thumb,w_50/${publicPath}`}
        sizes=""
      />
    </picture>
  )
}

export default Image
