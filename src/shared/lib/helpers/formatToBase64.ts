export default async (files: File[]) => {
  const promises: Array<Promise<any>> = []

  for (const file of files) {
    const filePromise = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (ev) => resolve(ev.target?.result)
      reader.onerror = (ev) => reject(ev)
      reader.readAsDataURL(file)
    })
    promises.push(filePromise)
  }
  return await Promise.all(promises) as string[]
}
