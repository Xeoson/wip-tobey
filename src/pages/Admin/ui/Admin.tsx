import PageLayout from 'app/ui/PageLayout'
import Flex from 'shared/kit/ui/Flex/Flex'
import Grid from 'shared/kit/ui/Grid/Grid'
import withReducerLoader from 'shared/lib/components/withReducerLoader'
import { AdminReducer } from '../model/slice'
import CreateDoc from './CreateDoc'
import DocList from './DocList'
import NavList from './NavList'
import SearchArea from './SearchArea'

const Admin = () => {
  return (
    <PageLayout mobileHeaderTitle="Admin" withNavbarOn="all">
      <Grid direction="row" columns="_1_3_">
        <NavList />
        <Flex gapY="md" px="md" direction="column">
					<SearchArea />
          <CreateDoc />
          <DocList />
        </Flex>
      </Grid>
    </PageLayout>
  )
}

export default withReducerLoader({
  Component: Admin,
  reducers: { admin: AdminReducer },
  // removeOnUnmount: true,
})
