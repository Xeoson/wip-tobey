import Navbar from "../../components/Navbar/Navbar";
import ProductCarousel from "../../components/UI/Carousels/ProductCarousel";
import Categories from "../../components/UI/Categories";
import PageLayout from "../../components/UI/Containers/PageLayout";
import Hr from "../../components/UI/Other/Hr";
import products from "../../mocks/products";
import s from "./Home.module.scss";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <PageLayout>
      <Navbar />
      <Categories />
      <Hr size="full" />
      <div className={s.content}>
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
