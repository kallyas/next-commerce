"use client";

import { SlidersHorizontal } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Filter from "../../components/Filter";
import ProductCard from "../../components/product-card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { addToCart } from "../../features/cart/cartSlice";

export default function ShopContent({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Added to cart");
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight">Shop all products</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Browse the full catalog with filters on the left and product cards on the right.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="rounded-[var(--radius)] px-3 py-1.5">
              {products.length} items
            </Badge>
            <Button variant="outline" size="lg" className="rounded-[var(--radius)]">
              <SlidersHorizontal className="size-4" />
              Sort & filter
            </Button>
          </div>
        </div>
      </section>

      <section className="grid items-start gap-6 lg:grid-cols-[280px_1fr]">
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
