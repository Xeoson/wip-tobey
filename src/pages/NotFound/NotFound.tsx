import { memo } from 'react'
import PageLayout from '../../app/ui/PageLayout'

interface NotFoundProps {}

const NotFound = (props: NotFoundProps) => {
  return <PageLayout>NOT FOUND</PageLayout>
}

export default memo(NotFound)
