import { type ICategory } from '../../../types/model'
import s from './CategoriesCarousel.module.scss'

interface CategoriesCarouselProps {
  categories: ICategory[]
}

const CategoriesCarousel = ({ categories }: CategoriesCarouselProps) => {
  return (
    <div className={s.main}>
      {categories.map((el) => (
        <button key={el.slug} className={s.item}>
          <img src={el.preview} alt="category_preview" />
          <div>{el.title}</div>
        </button>
      ))}
    </div>
  )
}

export default CategoriesCarousel
