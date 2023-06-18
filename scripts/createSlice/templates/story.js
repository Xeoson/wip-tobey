
module.exports = ({
  filename,
  layer,
	slice
}) => `import { type Meta, type StoryObj } from '@storybook/react'
import ${filename} from './${filename}'

const meta: Meta<typeof ${filename}> = {
  title: '${layer}/${slice}/${filename}',
  component: ${filename},
}
export default meta
type S = StoryObj<typeof ${filename}>

export const Primary: S = {
  render: (props) => <${filename} {...props} />,
}`