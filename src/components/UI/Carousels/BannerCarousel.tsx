import { useState } from "react";
import CarouselPagination from "../Blocks/CarouselPagination";
import s from "./BannerCarousel.module.scss";
import Carousel from "./Carousel";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

interface BannerCarouselProps {
  images: string[];
}

const BannerCarousel = ({ images }: BannerCarouselProps) => {
  const [idx, setIdx] = useState(0);

  const onPrev = () => {
    if (idx > 0) {
      setIdx((prev) => prev - 1);
    } else {
			setIdx(images.length - 1)
		}
  };

  const onNext = () => {
    if (idx >= images.length - 1) {
			setIdx(0)
		} else {
			setIdx((prev) => prev + 1);
		}
  };

  return (
    <div className={s.main}>
      <Carousel currentIdx={idx} images={images}>
        <button onClick={onPrev} className={s.prevBtn}>
          <AiOutlineRight />
        </button>
        <button onClick={onNext} className={s.nextBtn}>
          <AiOutlineRight />
        </button>
      </Carousel>
      <CarouselPagination
        currentIdx={idx}
        itemsCount={images.length}
        onSetCurrentIdx={(i) => setIdx(i)}
      />
    </div>
  );
};

export default BannerCarousel;
