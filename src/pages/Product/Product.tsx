import Header from "../../components/UI/Blocks/Header";
import ProductDetailsInfo from "../../components/UI/Blocks/ProductDetailsInfo";
import ImageCarousel from "../../components/UI/Carousels/ImageCarousel";
import PageLayout from "../../components/UI/Containers/PageLayout";
import products from "../../mocks/products";

interface ProductProps {}

const product = products[0]

const Product = (props: ProductProps) => {
  return (
    <PageLayout>
      <Header
        onBack={() => {}}
        popupContent={<>Some content</>}
        title="Product Details"
      />
      <ImageCarousel images={product.images} />
			<ProductDetailsInfo />
    </PageLayout>
  );
};

export default Product;
