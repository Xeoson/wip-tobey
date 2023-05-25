import { GoSettings } from 'react-icons/go'
import Button from 'shared/ui/Buttons/Button'
import MinifyCarousel from 'shared/ui/Carousels/MinifyCarousel'
import categories from '../../shared/lib/mocks/categories'
import s from './Categories.module.scss'

interface CategoriesProps {}

const Categories = (props: CategoriesProps) => {
  return (
    <div className={s.main}>
      <Button className={s.filtersBtn} size='max-y'>
        <GoSettings />
      </Button>
      <MinifyCarousel categories={categories} />
    </div>
  )
}

export default Categories
