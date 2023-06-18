export default async (file: File) =>
  await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (ev) => resolve(ev.target?.result)
    reader.onerror = (ev) => reject(ev)
    reader.readAsDataURL(file)
  })
