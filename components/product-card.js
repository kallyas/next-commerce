import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { buttonVariants } from "../lib/button-styles";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <Card className="group gap-0 overflow-hidden border-none bg-card py-0 shadow-sm ring-1 ring-black/5">
      <CardContent className="p-0">
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted/60 p-8">
            <Image
              src={product.image}
              alt={product.title}
              width={compact ? 180 : 220}
              height={compact ? 180 : 220}
              className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <Badge variant="secondary" className="absolute left-4 top-4 bg-background/90">
              {product.category}
            </Badge>
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-[var(--radius)] bg-background/90 px-2.5 py-1 text-xs text-muted-foreground">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              {product.rating?.rate ?? "4.8"}
            </div>
          </div>
        </Link>

        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">{product.title}</h3>
            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Price</p>
              <p className="text-2xl font-semibold">${product.price}</p>
            </div>
            <p className="text-xs text-muted-foreground">{product.rating?.count ?? 0} reviews</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t border-border/60 bg-background/70">
        <Link href={`/product/${product.id}`} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-[var(--radius)]")}>
          View details
        </Link>
        {onAddToCart ? (
          <Button variant="default" size="sm" className="rounded-[var(--radius)]" onClick={() => onAddToCart(product)}>
            <ShoppingBag className="size-4" />
            Add to cart
          </Button>
        ) : (
          <span className="text-xs text-muted-foreground">Ready to ship</span>
        )}
      </CardFooter>
    </Card>
  );
}
