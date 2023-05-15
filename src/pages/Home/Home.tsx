import Navbar from "../../components/Navbar/Navbar";
import BannerCarousel from "../../components/UI/Carousels/BannerCarousel";
import ProductCarousel from "../../components/UI/Carousels/ProductCarousel";
import Categories from "../../components/UI/Categories";
import PageLayout from "../../components/UI/Containers/PageLayout";
import Hr from "../../components/UI/Other/Hr";
import banners from "../../mocks/banners";
import products from "../../mocks/products";
import s from "./Home.module.scss";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageLayout withNavbarOn='all'>
      <Categories />
      <Hr size="full" />
      <div className={s.content}>
				<BannerCarousel images={banners} />
        <ProductCarousel size="md" title="Hot Sales" products={products} />
        <ProductCarousel
          size="lg"
          title="Recently Viewed"
          products={products}
        />
        <ProductCarousel
          size="lg"
          title="Recently Viewed"
          products={products}
        />
      </div>
    </PageLayout>
  );
};

export default Home;
