import { type Meta, type StoryObj } from '@storybook/react'
import Modal from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
}
export default meta
type S = StoryObj<typeof Modal>

export const Primary: S = {
  render: (props) => <Modal {...props}>Some Text</Modal>,
}
