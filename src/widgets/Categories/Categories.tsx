import { GoSettings } from 'react-icons/go'
import categories from '../../shared/lib/mocks/categories'
import s from './Categories.module.scss'
import Button from 'shared/ui/Buttons/Button'
import MinifyCarousel from 'shared/ui/Carousels/MinifyCarousel'

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className={s.main}>
      <Button icon={<GoSettings />} />
      <MinifyCarousel categories={categories} />
    </div>
  )
}

export default Categories
