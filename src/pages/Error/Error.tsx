import Button from 'shared/ui/Buttons/Button'
import s from './Error.module.scss'

interface ErrorProps {}

const Error = (props: ErrorProps) => {
  const handleReload = () => {
    location.reload()
  }

  return (
    <div className={s.main}>
      <h1>ERROR</h1>
      <Button size='lg' onClick={handleReload}>RELOAD</Button>
    </div>
  )
}

export default Error
