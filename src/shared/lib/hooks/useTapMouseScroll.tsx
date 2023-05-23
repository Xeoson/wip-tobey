import { useMemo, useRef } from 'react'

export default <T extends HTMLElement>() => {
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const isDownRef = useRef(false)

  return useMemo(() => {
    const onMouseDown = (e: React.MouseEvent<T>) => {
      const { offsetLeft, scrollLeft } = e.currentTarget
      startXRef.current = e.pageX - offsetLeft
      scrollLeftRef.current = scrollLeft
      isDownRef.current = true
    }
    const onMouseMove = (e: React.MouseEvent<T>) => {
      if (isDownRef.current) {
        const { offsetLeft } = e.currentTarget
        const startX = e.pageX - offsetLeft
        const diff = startX - startXRef.current
        e.currentTarget.scrollTo({
          left: scrollLeftRef.current - diff,
          behavior: 'smooth',
        })
      }
    }
    const onMouseLeave = (e: React.MouseEvent<T>) => {
      isDownRef.current = false
    }
    const onMouseUp = (e: React.MouseEvent<T>) => {
      isDownRef.current = false
    }
    return { onMouseDown, onMouseLeave, onMouseMove, onMouseUp }
  }, [])
}
