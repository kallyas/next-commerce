"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { cartSelector } from "../features/cart/cartSlice";
import { buttonVariants } from "../lib/button-styles";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

const Navbar = () => {
  const { totalItems } = useSelector(cartSelector);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-[var(--radius)] bg-primary text-primary-foreground shadow-sm">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">Next Commerce</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Everyday ecommerce
              </p>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="relative w-full max-w-2xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="h-11 rounded-[var(--radius)] border-border/80 bg-card pl-11 pr-4 shadow-sm"
                placeholder="Search fashion, electronics, jewelry, home..."
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Badge variant="secondary" className="hidden rounded-[var(--radius)] px-3 py-1 md:inline-flex">
              Secure checkout
            </Badge>
            <Link
              href="/cart"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "gap-3 rounded-[var(--radius)] px-4")}
            >
              <ShoppingBag className="size-4" />
              <span>Cart</span>
              <span className="inline-flex min-w-6 items-center justify-center rounded-[var(--radius)] bg-white/15 px-1.5 text-xs">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>

        <nav className="flex items-center gap-2 overflow-auto pb-1 text-sm">
          <Link href="/" className="rounded-[var(--radius)] bg-primary px-4 py-2 font-medium text-primary-foreground">
            Home
          </Link>
          <Link
            href="/shop"
            className="rounded-[var(--radius)] border border-border/70 bg-card px-4 py-2 font-medium text-foreground transition hover:bg-secondary"
          >
            Shop
          </Link>
          {["Women", "Men", "Electronics", "Jewelry", "Home"].map((item) => (
            <span
              key={item}
              className="rounded-[var(--radius)] px-4 py-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
