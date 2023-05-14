import { useRef, useState } from "react";
import s from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images, ...props }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pointerDownPositionRef = useRef<number | null>(null);

  const onPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      pointerDownReset();
    }
  };

  const onNext = () => {
    if (currentIndex >= images.length - 1) return;
    setCurrentIndex((prev) => prev + 1);
    pointerDownReset();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDownPositionRef.current = e.clientX;
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownPositionRef.current) return;

    const diff = pointerDownPositionRef.current - e.clientX;

    if (diff < -10) {
      onPrev();
    } else if (diff > 10) {
      onNext();
    }
  };

  const pointerDownReset = () => {
    pointerDownPositionRef.current = null;
  };

  return (
    <div className={s.main}>
      <div
        className={s.block}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={pointerDownReset}
        onPointerOut={pointerDownReset}
      >
        <div
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          className={s.itemList}
        >
          {images.map((el) => (
            <span
              style={{ backgroundImage: `url(${el})` }}
              className={s.item}
            />
          ))}
        </div>
      </div>
      <div className={s.minifyList}>
        {images.map((el, i) => (
          <button
            className={`${s.minifyItem} ${i == currentIndex ? s.current : ""}`}
            onClick={() => setCurrentIndex(i)}
          >
            <span style={{ backgroundImage: `url(${el})` }}></span>
          </button>
        ))}
      </div>
      <div className={s.pagination}>
        {images.map((el, i) => (
          <span
            className={`${s.paginationItem} ${
              i == currentIndex ? s.current : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
