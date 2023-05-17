
import FavoriteProducts from "../../components/Sections/FavoriteProducts";
import PageLayout from "../../components/UI/Containers/PageLayout";
import products from "../../mocks/products";

interface MobileFavoritesProps {}

const MobileFavorites = (props: MobileFavoritesProps) => {
  return (
    <PageLayout mobileHeaderTitle="Favorites">
      <FavoriteProducts />
    </PageLayout>
  );
};

export default MobileFavorites;
