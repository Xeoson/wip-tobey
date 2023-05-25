import { useMemo, useRef } from 'react'

export default <T extends HTMLElement>() => {
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const isDownRef = useRef(false)
  const isScrollingRef = useRef(false)

  return useMemo(() => {
    const onPointerDown = (e: React.MouseEvent<T>) => {
      const { offsetLeft, scrollLeft } = e.currentTarget
      startXRef.current = e.pageX - offsetLeft
      scrollLeftRef.current = scrollLeft
      isDownRef.current = true
    }
    const onPointerMove = (e: React.MouseEvent<T>) => {
      if (isDownRef.current) {
        const { offsetLeft } = e.currentTarget
        const startX = e.pageX - offsetLeft
        const diff = startX - startXRef.current
        if (!isScrollingRef.current && Math.abs(diff) > 10) {
          isScrollingRef.current = true
        }
        e.currentTarget.scrollTo({
          left: scrollLeftRef.current - diff,
          behavior: 'smooth',
        })
      }
    }
    const onPointerUpCapture = (e: React.MouseEvent<HTMLDivElement>) => {
      if (isScrollingRef.current) {
        e.stopPropagation()
        isScrollingRef.current = false
      }
      isDownRef.current = false
    }
    const onPointerLeave = (e: React.MouseEvent<T>) => {
      isDownRef.current = false
    }

    return {
      onPointerDown,
      onPointerLeave,
      onPointerMove,
      onPointerUpCapture,
    }
  }, [])
}
