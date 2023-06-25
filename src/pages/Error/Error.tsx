import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import Flex from '@/shared/kit/ui/Flex/Flex'
import Text from '@/shared/kit/ui/Text/Text'
import Image, { type ISource } from '@/shared/ui/Blocks/Image'

const buttonStyles: ButtonStyles = {
  size: 'lg',
  theme: 'primary',
}

const sources: ISource[] = [
  { media: '(max-width: 767px)', transform: ['ar_1:1', 'w_400'] },
  { media: '(min-width: 768px)', transform: ['ar_1:1', 'w_600', 'c_fill'] },
]

interface ErrorProps {}

const Error = (props: ErrorProps) => {
  const handleReload = () => {
    location.reload()
  }

  return (
    <Flex m="auto" h='2_3' direction="column" align="center" justify="center" gap="lg">
      <Image publicPath="7223073_d2o386" sources={sources} />
      <Text as="h1">Ooops... Error!</Text>
      <Button styles={buttonStyles} onClick={handleReload}>
        RELOAD
      </Button>
    </Flex>
  )
}

export default Error
