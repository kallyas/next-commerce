"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";
import { cartSelector } from "../features/cart/cartSlice";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  const { totalItems } = useSelector(cartSelector);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-foreground text-background">
              <ShoppingBag className="size-5" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.26em] text-muted-foreground">
                Next Commerce
              </p>
              <p className="text-lg font-semibold tracking-tight">Curated essentials</p>
            </div>
          </Link>
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search for jackets, electronics, bags..." />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="hidden rounded-full px-4 py-2 md:inline-flex">
              Free shipping over $100
            </Badge>
            <Button asChild variant="outline" className="relative">
              <Link href="/cart">
                <ShoppingBag className="size-4" />
                Cart
                <span className="ml-1 inline-flex size-6 items-center justify-center rounded-full bg-foreground text-xs text-background">
                  {totalItems}
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <nav className="flex items-center gap-3 overflow-auto text-sm">
          <Link href="/" className="rounded-full bg-secondary px-4 py-2 font-medium text-secondary-foreground">
            Home
          </Link>
          <Link
            href="/shop"
            className="rounded-full px-4 py-2 font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            Shop
          </Link>
          <span className="rounded-full px-4 py-2 text-muted-foreground">New arrivals</span>
          <span className="rounded-full px-4 py-2 text-muted-foreground">Accessories</span>
          <span className="rounded-full px-4 py-2 text-muted-foreground">Seasonal edits</span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
