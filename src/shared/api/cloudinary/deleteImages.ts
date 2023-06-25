interface IOptions {
  cloudName: string
  apiKey: string
  apiSecret: string
}

export default async (
  publicIds: string[],
  { cloudName, apiKey, apiSecret }: IOptions
) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`
  // const url = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`
  const idsString = publicIds.map((el) => `public_ids[]=${el}`).join('&')
	await fetch(url, {
    body: idsString,
    // body: JSON.stringify({ public_ids: publicIds }),
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${apiKey}:${apiSecret}`),
    },
    // headers: { 'Content-Type': 'application/json' },
  })
}
