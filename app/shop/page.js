import { fetchProducts } from "../../lib/fakestore";
import ShopContent from "./shop-content";

export const metadata = {
  title: "Shop | Next Commerce",
};

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const products = await fetchProducts();
  return <ShopContent products={products} />;
}
