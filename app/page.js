import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import ProductCard from "../components/product-card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { fetchProducts } from "../lib/fakestore";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="grid gap-6 lg:grid-cols-[1.25fr,0.75fr]">
        <Card className="overflow-hidden rounded-[36px] border-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_30%),linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#4f46e5_100%)] text-white shadow-2xl shadow-slate-950/20">
          <CardContent className="grid min-h-[430px] gap-10 p-8 sm:p-10 lg:grid-cols-[1fr,0.7fr] lg:p-12">
            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <Badge className="w-fit bg-white/14 text-white backdrop-blur">Tailwind v4 rebuild</Badge>
                <div className="space-y-4">
                  <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    A cleaner storefront with a sharper component system.
                  </h1>
                  <p className="max-w-lg text-base leading-7 text-white/75">
                    Bootstrap is gone. The shell now centers on Tailwind CSS v4, shadcn-style primitives,
                    and a lighter visual language built for App Router.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/shop">
                    Browse catalog <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/25 bg-white/10 text-white hover:bg-white/15">
                  <Link href="/cart">Open cart</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 self-end">
              {[
                { label: "Orders shipped", value: "1.2k" },
                { label: "Avg. rating", value: "4.9/5" },
                { label: "New drops", value: "24 weekly" }
              ].map((item) => (
                <div key={item.label} className="rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/70">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card className="rounded-[32px] bg-card/80">
            <CardContent className="space-y-4 p-7">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="size-4" />
                <span className="text-sm font-medium">What changed</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Component-first storefront</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Rebuilt on utility classes and composable UI primitives instead of fragile page-wide framework CSS.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-[32px] bg-secondary">
            <CardContent className="space-y-5 p-7">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="size-4 fill-current text-amber-500" />
                Featured categories
              </div>
              <div className="flex flex-wrap gap-2">
                {["Minimal bags", "Desk setup", "Cold-weather edits", "Travel gear"].map((item) => (
                  <Badge key={item} variant="outline" className="rounded-full bg-background">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="rounded-[24px] bg-background p-5">
                <p className="text-sm text-muted-foreground">Catalog source</p>
                <p className="mt-2 text-lg font-semibold">Fake Store API</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Popular now
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Selected from the live catalog</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/shop">
              View all <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
