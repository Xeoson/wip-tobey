import s from './Spinner.module.scss'

interface SpinnerProps {}

const Spinner = (props: SpinnerProps) => {
  return (
    <div className={s.main}>
      <span className={s.spinner}></span>
    </div>
  )
}

export default Spinner
