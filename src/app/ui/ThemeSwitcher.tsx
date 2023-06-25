import { useAppDispatch } from '@/app/model/redux'
import { getIsDarkTheme } from '@/app/model/redux/main/selectors'
import { MainActions } from '@/app/model/redux/main/slice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SwitcherButton from '@/shared/ui/Buttons/SwitcherButton'
import s from '../styles/theme.module.scss'

interface ThemeSwitcherProps {}

document.body.className = s.light

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const isDark = useSelector(getIsDarkTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.body.className = isDark ? s.dark : s.light
  }, [isDark])

  const toggleTheme = () => {
    dispatch(MainActions.set({ isDarkTheme: !isDark }))
  }

  return <SwitcherButton isOn={isDark} onToggle={toggleTheme} />
}

export default ThemeSwitcher
