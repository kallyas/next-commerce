"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, RotateCcw, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import ProductCard from "../../../components/product-card";
import { buttonVariants } from "../../../lib/button-styles";
import { cn } from "../../../lib/utils";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
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
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/shop" className="transition hover:text-foreground">
          Shop
        </Link>{" "}
        / <span>{product.category}</span>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="overflow-hidden border-none bg-card py-0 shadow-sm">
          <CardContent className="relative flex min-h-[560px] items-center justify-center bg-muted/40 p-8">
            <Image
              src={product.image}
              fill
              alt={product.title}
              className="object-contain p-8"
              priority
              loading="eager"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </CardContent>
        </Card>

        <Card className="border-none bg-card shadow-sm">
          <CardContent className="space-y-8 py-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="rounded-[var(--radius)] px-3 py-1.5">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight">{product.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  {product.rating?.rate ?? "4.8"} rating
                </span>
                <span>{product.rating?.count ?? 0} reviews</span>
                <span>In stock</span>
              </div>
            </div>

            <p className="text-base leading-7 text-muted-foreground">{product.description}</p>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Price</p>
              <p className="text-4xl font-semibold">${product.price}</p>
              <p className="text-sm text-muted-foreground">Free standard shipping on this item.</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center rounded-[var(--radius)] border border-border bg-background p-1 w-fit">
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-[var(--radius)] text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Minus className="size-4" />
                </button>
                <div className="min-w-14 text-center text-sm font-medium">{quantity}</div>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-[var(--radius)] text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={handleCart} size="lg" className="rounded-[var(--radius)] px-6">
                  <ShoppingCart className="size-4" />
                  Add to cart
                </Button>
                <Link
                  href="/cart"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-[var(--radius)]")}
                >
                  Buy now
                </Link>
              </div>
            </div>

            <Separator />

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Truck, title: "Fast dispatch", copy: "Ships within 24 hours." },
                { icon: ShieldCheck, title: "Trusted quality", copy: "Rated by verified buyers." },
                { icon: RotateCcw, title: "Easy returns", copy: "14-day return policy." },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-[var(--radius)] bg-secondary/70 p-4">
                  <Icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Related picks
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight">Complete the look</h2>
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
