import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../components/product-card";
import { buttonVariants } from "../lib/button-styles";
import { cn } from "../lib/utils";
import { Card, CardContent } from "../components/ui/card";
import { fetchProducts } from "../lib/fakestore";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Featured products</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">Top products right now</h2>
          </div>
          <Link href="/shop" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-[var(--radius)]")}>
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Men's clothing", copy: "Simple pieces for daily wear and layering." },
          { title: "Electronics", copy: "Work-ready gadgets and daily tech essentials." },
          { title: "Jewelry", copy: "Giftable pieces and timeless accessories." },
        ].map((item) => (
          <Card key={item.title} className="border-none bg-card shadow-sm">
            <CardContent className="space-y-2 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Category
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{item.copy}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
