import { useCallback, useRef, useState, type ReactElement } from 'react'
import {
  type IMargin,
  type IPadding,
  type ThemeValues,
} from 'shared/kit/lib/types'
import cn from 'shared/lib/helpers/classNames'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import s from './CollapsedItem.module.scss'

export interface CollapsedItemStyles extends IMargin, IPadding {
  theme?: ThemeValues
}

interface CollapsedItemProps {
  styles: CollapsedItemStyles
  content: ReactElement
  collapsedContent: ReactElement
}

const mcn = createClassNames(s)

const CollapsedItem = ({
  styles,
  content,
  collapsedContent,
}: CollapsedItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const cb = {
    onToggle: useCallback(() => {
      if (isOpen) {
        setClosing(true)
        setTimeout(() => {
          setIsOpen(false)
          setClosing(false)
        }, 600)
      } else {
        setIsOpen(true)
      }
    }, [isOpen]),
  }

  return (
    <div className={mcn(styles) + ' ' + cn(isOpen && !closing && s.open)}>
      <div onClick={cb.onToggle} className={s.item}>
        {content}
      </div>
      {isOpen && (
        <div className={cn(s.content, isOpen && s.open)}>
          {collapsedContent}
        </div>
      )}
    </div>
  )
}

export default CollapsedItem
