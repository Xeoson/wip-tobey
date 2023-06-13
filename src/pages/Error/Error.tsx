import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import s from './Error.module.scss'

const buttonStyles: ButtonStyles = {
  size: 'lg',
}

interface ErrorProps {}

const Error = (props: ErrorProps) => {
  const handleReload = () => {
    location.reload()
  }

  return (
    <div className={s.main}>
      <h1>ERROR</h1>
      <Button styles={buttonStyles} onClick={handleReload}>
        RELOAD
      </Button>
    </div>
  )
}

export default Error
