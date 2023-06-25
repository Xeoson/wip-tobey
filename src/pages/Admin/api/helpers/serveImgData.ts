import { uploadImage } from '@/shared/api/cloudinary/uploadImage'
import { type IImageData } from '@/shared/kit/ui/inputs/ImageInput/ImageInput'

const CLOUD_NAME = import.meta.env.VITE_CD_CLOUD_NAME
const API_KEY = import.meta.env.VITE_CD_API_KEY
const API_SECRET = import.meta.env.VITE_CD_API_SECRET

export default async (imgsData: Record<string, IImageData | IImageData[]>) => {
  // const imgIdsToDelete: string[] = []
  const newImagesArr = Object.entries(imgsData).map(async ([field, imgs]) => {
    if (Array.isArray(imgs)) {
      const promiseArr = imgs.map(async (el: IImageData) => {
        if (el instanceof Object) {
          if (el.deleted) {
            // imgIdsToDelete.push(el.url)
            return undefined
          }
          if (!el.isInitial) {
            return await uploadImage(el.url, {
              preset: 'dd2duinx',
              cloudName: CLOUD_NAME,
            })
          }
          return el.url
        } else {
          return el
        }
      })
      const img = await Promise.all(promiseArr)
      return [field, img.filter(Boolean)]
    } else {
      if (!imgs.isInitial) {
        const img = await uploadImage(imgs.url, {
          preset: 'dd2duinx',
          cloudName: CLOUD_NAME,
        })
        return [field, img]
      }
      return [field, imgs]
    }
  })
  // deleteImages(imgIdsToDelete, {
  //   apiKey: API_KEY,
  //   apiSecret: API_SECRET,
  //   cloudName: CLOUD_NAME,
  // })
  const arr = await Promise.all(newImagesArr)
  return Object.fromEntries(arr) as Record<string, string | string[]>
}
