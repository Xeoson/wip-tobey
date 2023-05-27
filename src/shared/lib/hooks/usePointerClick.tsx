import { useMemo, useRef } from 'react'

export default <T extends HTMLElement>(
  onPointerUpCallback: (e: React.PointerEvent<T>) => any
) => {
  const isDown = useRef(false)

  return useMemo(() => {
    const onPointerDown = (e: React.PointerEvent<T>) => {
      if (e.pointerType !== 'mouse' || e.button === 0) {
        isDown.current = true
      }
    }
    const onPointerUp = (e: React.PointerEvent<T>) => {
      if (isDown.current) {
        onPointerUpCallback(e)
      }
    }
    const onPointerLeave = () => {
      isDown.current = false
    }
    const onPointerCancel = () => {
      isDown.current = false
    }
    return { onPointerCancel, onPointerDown, onPointerLeave, onPointerUp }
  }, [])
}
