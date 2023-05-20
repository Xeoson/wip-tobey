import s from './MinifyImageList.module.scss'

interface MinifyImageListProps {
  images: string[]
  currentIdx: number
  onSetCurrentIdx: (idx: number) => void
}

const MinifyImageList = ({
  currentIdx,
  images,
  onSetCurrentIdx,
}: MinifyImageListProps) => {
  return (
    <div className={s.main}>
      {images.map((el, i) => (
        <button
          key={el}
          className={`${s.item} ${i === currentIdx ? s.current : ''}`}
          onClick={() => {
            onSetCurrentIdx(i)
          }}
        >
          <span style={{ backgroundImage: `url(${el})` }}></span>
        </button>
      ))}
    </div>
  )
}

export default MinifyImageList
