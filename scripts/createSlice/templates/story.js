
module.exports = ({
  filename,
  layer,
}) => `import { type Meta, type StoryObj } from '@storybook/react'
import ${filename} from './${filename}'

const meta: Meta<typeof ${filename}> = {
  title: '${layer}/${filename}',
  component: ${filename},
}
export default meta
type S = StoryObj<typeof ${filename}>

export const Primary: S = {
  render: (props) => <${filename} {...props} />,
}`