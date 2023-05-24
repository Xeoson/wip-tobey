import { useEffect, useRef, useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type MobileScrollableCarouselProps } from './MobileScrollableCarousel'
import s from './MouseScrollableCarousel.module.scss'

interface MouseScrollableCarouselProps extends MobileScrollableCarouselProps {}

const MouseScrollableCarousel = ({
  currentIdx,
  images,
  onSetIdx,
}: MouseScrollableCarouselProps) => {
  const ref = useRef<HTMLUListElement | null>(null)

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft, offsetWidth } = ref.current!
    const isScrollEnding = Math.round(scrollLeft) % offsetWidth === 0
    if (isScrollEnding) {
      const idx = Math.trunc((scrollLeft + offsetWidth / 2) / offsetWidth)
      onSetIdx(idx)
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.children[currentIdx].scrollIntoView()
    }
  }, [currentIdx])

  const [isMouseDown, setIsMouseDown] = useState(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const isDownRef = useRef(false)

  const handleDocMouseUp = () => {
    isDownRef.current = false
    setIsMouseDown(false)
    document.removeEventListener('mousemove', handleDocMouseMove)
    document.removeEventListener('mouseup', handleDocMouseUp)
  }

  const handleDocMouseMove = (e: any) => {
    if (isDownRef.current) {
      const { offsetLeft } = ref.current!
      const startX = e.pageX - offsetLeft
      const diff = startX - startXRef.current
      ref.current!.scrollTo({
        left: scrollLeftRef.current - diff,
        behavior: 'smooth',
      })
    }
  }

  const onMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    const { offsetLeft, scrollLeft } = ref.current!
    startXRef.current = e.pageX - offsetLeft
    scrollLeftRef.current = scrollLeft
    isDownRef.current = true
    setIsMouseDown(true)
    document.addEventListener('mouseup', handleDocMouseUp)
    document.addEventListener('mousemove', handleDocMouseMove)
  }
  // const onMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
  //   if (isDownRef.current) {
  //     const { offsetLeft } = ref.current
  //     const startX = e.pageX - offsetLeft
  //     const diff = startX - startXRef.current
  //     ref.current.scrollTo({
  //       left: scrollLeftRef.current - diff,
  //       behavior: 'smooth',
  //     })
  //   }
  // }
  // const onMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
  //   console.log('mouse up')
  //   isDownRef.current = false
  //   setIsMouseDown(false)
  // }

  return (
    <ul
      ref={ref}
      className={cn(s.main, isMouseDown && s.down)}
      onMouseDown={onMouseDown}
      onScroll={handleScroll}
    >
      {images.map((el) => (
        <li
          style={{ backgroundImage: `url(${el})` }}
          className={s.item}
          key={el}
        ></li>
      ))}
    </ul>
  )
}

export default MouseScrollableCarousel
