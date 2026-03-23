import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <Card className="group overflow-hidden rounded-[32px] border-border/70 bg-card/90 backdrop-blur">
      <CardContent className="p-0">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted/60 p-8">
          <Image
            src={product.image}
            alt={product.title}
            width={compact ? 180 : 220}
            height={compact ? 180 : 220}
            className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <Badge variant="outline" className="absolute left-4 top-4 bg-background/80 backdrop-blur">
            {product.category}
          </Badge>
        </div>
        <div className="space-y-4 p-5">
          <div className="space-y-2">
            <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">{product.title}</h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Price</p>
              <p className="text-xl font-semibold">${product.price}</p>
            </div>
            <div className="flex items-center gap-2">
              {onAddToCart ? (
                <Button variant="secondary" onClick={() => onAddToCart(product)}>
                  Add
                </Button>
              ) : null}
              <Button asChild variant="outline">
                <Link href={`/product/${product.id}`}>
                  Details <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
