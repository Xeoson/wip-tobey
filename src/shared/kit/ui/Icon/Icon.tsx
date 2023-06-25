import { type IconType } from 'react-icons'
import { type IPadding } from '@/shared/kit/lib/types'
import {
  type DefaultSizesType,
  type ThemeValues,
} from '@/shared/kit/lib/types/const'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import s from './Icon.module.scss'

export interface IconStyles extends IPadding {
  theme?: ThemeValues
  size?: DefaultSizesType
}

interface IconProps {
  Icon: IconType
  styles?: IconStyles
}

const mcn = createClassNames(s)

const Icon = ({ Icon, styles }: IconProps) => {
  return <Icon className={mcn(styles)} />
}

export default Icon
