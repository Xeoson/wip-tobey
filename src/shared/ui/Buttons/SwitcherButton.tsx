import { useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import s from './SwitcherButton.module.scss'

interface SwitcherButtonProps {
  isOn: boolean
  onToggle: () => void
}

const SwitcherButton = ({ onToggle, isOn }: SwitcherButtonProps) => {
  const [on, setOn] = useState(isOn)

	console.log('isOn', isOn)

  const handleToggle = () => {
    setOn((prev) => !prev)
    onToggle()
  }

  return (
    <button onClick={handleToggle} className={cn(s.main, on && s.on)}></button>
  )
}

export default SwitcherButton
