import FavoriteProducts from '../../components/Sections/FavoriteProducts'
import PageLayout from '../../components/UI/Containers/PageLayout'

interface MobileFavoritesProps {}

const MobileFavorites = (props: MobileFavoritesProps) => {
  return (
    <PageLayout mobileHeaderTitle="Favorites">
      <FavoriteProducts />
    </PageLayout>
  )
}

export default MobileFavorites
