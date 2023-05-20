import { GoSettings } from 'react-icons/go'
import categories from '../../mocks/categories'
import Button from '../UI/Buttons/Button'
import CategoriesCarousel from '../UI/Carousels/CategoriesCarousel'
import s from './Categories.module.scss'

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className={s.main}>
      <Button icon={<GoSettings />} />
      <CategoriesCarousel categories={categories} />
    </div>
  )
}

export default Categories
