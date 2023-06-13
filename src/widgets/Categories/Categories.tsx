import { GoSettings } from 'react-icons/go'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import MinifyCarousel from 'shared/ui/Carousels/MinifyCarousel'
import categories from '../../shared/lib/mocks/categories'
import s from './Categories.module.scss'

const buttonStyles: ButtonStyles = {
  size: 'max-y',
  shape: 'square',
  theme: 'primary',
  align: 'center',
  justify: 'center',
}

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className={s.main}>
      <Button styles={buttonStyles}>
        <GoSettings />
      </Button>
      <MinifyCarousel categories={categories} />
    </div>
  )
}

export default Categories
