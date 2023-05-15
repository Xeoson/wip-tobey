import { DP } from "../../../types";
import s from "./Carousel.module.scss";

interface CarouselProps extends DP {
  images: string[];
  currentIdx: number;
}

const Carousel = ({
  currentIdx,
  images,
  children,
  className,
  ...props
}: CarouselProps) => {
  return (
    <div {...props} className={`${s.main} ${className ?? ""}`}>
      <div
        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        className={s.list}
      >
        {images.map((el) => (
          <span style={{ backgroundImage: `url(${el})` }} className={s.item} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Carousel;
