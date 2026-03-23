import { fetchProduct, fetchProducts } from "../../../lib/fakestore";
import ProductDetails from "./product-details";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Product | Next Commerce",
};

export default async function ProductPage({ params }) {
  const [product, products] = await Promise.all([fetchProduct(params.id), fetchProducts()]);
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);

  return <ProductDetails product={product} relatedProducts={relatedProducts} />;
}
