
interface IOptions {
  preset: string
  cloudName: string
}

export const uploadImage = async (
  image: File | string,
  { preset, cloudName }: IOptions
) => {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', preset)
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${
      cloudName
    }/image/upload`,
    {
      body: formData,
      method: 'POST',
    }
  )
  const json = await res.json()
  return json.public_id as string
}
