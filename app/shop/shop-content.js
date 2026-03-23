"use client";

import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Filter from "../../components/Filter";
import ProductCard from "../../components/product-card";
import { Badge } from "../../components/ui/badge";
import { addToCart } from "../../features/cart/cartSlice";

export default function ShopContent({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Added to cart");
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="space-y-4">
        <Badge variant="outline" className="rounded-full px-4 py-2">
          Live catalog
        </Badge>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Shop the full edit</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Clean product grid, component-level styling, and zero Bootstrap layout dependencies.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{products.length} items available</p>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <Filter />
        <main className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} compact />
          ))}
        </main>
      </section>
    </div>
  );
}
