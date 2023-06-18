export default <T,>(fn: (arg: T) => unknown, delay: number) => {
  let timer: NodeJS.Timer

  return (arg: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(arg), delay)
  }
}
