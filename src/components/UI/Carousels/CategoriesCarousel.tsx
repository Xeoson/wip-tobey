import categories from "../../../mocks/categories";
import s from "./CategoriesCarousel.module.scss";

interface CategoriesCarouselProps {}

const CategoriesCarousel = (props: CategoriesCarouselProps) => {
  return (
    <div className={s.main}>
      {categories.map((el) => (
        <button className={s.item}>
          <img src={el.preview} alt="category_preview" />
					<div>{el.title}</div>
        </button>
      ))}
    </div>
  );
};

export default CategoriesCarousel;
