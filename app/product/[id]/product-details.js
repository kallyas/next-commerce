"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import ProductCard from "../../../components/product-card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { addToCart } from "../../../features/cart/cartSlice";

export default function ProductDetails({ product, relatedProducts }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success(`Added ${product.title} to cart`);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/shop" className="transition hover:text-foreground">
          Shop
        </Link>{" "}
        / <span>{product.category}</span>
      </div>
      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <Card className="overflow-hidden rounded-[36px] bg-muted/40">
          <CardContent className="relative flex min-h-[520px] items-center justify-center p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_40%)]" />
            <Image
              src={product.image}
              fill
              alt={product.title}
              className="object-contain p-12"
            />
          </CardContent>
        </Card>
        <Card className="rounded-[36px]">
          <CardContent className="space-y-8 p-8">
            <div className="space-y-4">
              <Badge variant="outline" className="rounded-full px-4 py-2">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight">{product.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  {product.rating?.rate ?? "4.8"} rating
                </span>
                <span>{product.rating?.count ?? 0} reviews</span>
                <span>Ready to ship</span>
              </div>
            </div>

            <p className="text-base leading-7 text-muted-foreground">{product.description}</p>

            <div className="rounded-[28px] bg-secondary p-6">
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="mt-2 text-4xl font-semibold">${product.price}</p>
            </div>

            <Separator />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center rounded-full border border-border bg-background p-1">
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Minus className="size-4" />
                </button>
                <div className="min-w-14 text-center text-sm font-medium">{quantity}</div>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <Button onClick={handleCart} size="lg" className="sm:min-w-52">
                <ShoppingCart className="size-4" />
                Add to cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Related picks
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">You may also like</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
