import s from './MinifyCarousel.module.scss'

interface MinifyCarouselProps {
  categories: Array<{ preview: string, title: string }>
}

const MinifyCarousel = ({ categories }: MinifyCarouselProps) => {
  return (
    <div className={s.main}>
      {categories.map((el) => (
        <button key={el.title} className={s.item}>
          <div className={s.imgWrapper}>
            <img src={el.preview} alt="category_preview" />
          </div>
          <div>{el.title}</div>
        </button>
      ))}
    </div>
  )
}

export default MinifyCarousel
