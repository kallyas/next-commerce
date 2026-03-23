"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShieldCheck, ShoppingCart, TicketPercent, Trash2, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { buttonVariants } from "../../lib/button-styles";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  cartSelector,
  increaseQuantity,
  reduceQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

export default function CartPage() {
  const { cart, totalPrice } = useSelector(cartSelector);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createCheckoutSession = async () => {
    setLoading(true);

    try {
      const checkoutSession = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const { session, message } = await checkoutSession.json();

      if (!checkoutSession.ok) {
        throw new Error(message || "Unable to create checkout session.");
      }

      if (!session?.url) {
        throw new Error("Checkout session URL is missing.");
      }

      window.location.assign(session.url);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Unable to start checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Checkout
        </p>
        <h1 className="text-5xl font-semibold tracking-tight">Your shopping bag</h1>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card className="border-none bg-card/90 shadow-sm">
          <CardContent className="space-y-4 py-6 sm:py-8">
            {cart.length < 1 ? (
              <div className="flex min-h-72 flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-border bg-muted/30 text-center">
                <ShoppingCart className="size-10 text-muted-foreground" />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                  <p className="text-sm text-muted-foreground">
                    Add a few items from the catalog and come back here.
                  </p>
                </div>
                <Link href="/shop" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full")}>
                  Continue shopping
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="rounded-[2rem] border border-border/70 bg-background p-4 shadow-sm sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex size-28 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent),var(--color-muted)] p-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={90}
                        height={90}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div className="space-y-1">
                        <h2 className="line-clamp-2 text-lg font-semibold">{item.title}</h2>
                        <p className="text-sm text-muted-foreground">${item.price} each · Ready to ship</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center rounded-full border border-border bg-background p-1">
                          <button
                            type="button"
                            className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            onClick={() => dispatch(reduceQuantity({ product: item }))}
                          >
                            <Minus className="size-4" />
                          </button>
                          <div className="min-w-12 text-center text-sm font-medium">{item.quantity}</div>
                          <button
                            type="button"
                            className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                            onClick={() => dispatch(increaseQuantity({ product: item }))}
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="rounded-full"
                          onClick={() => dispatch(removeFromCart({ product: item }))}
                        >
                          <Trash2 className="size-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Line total</p>
                      <p className="text-2xl font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-none bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Order summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="space-y-3 rounded-[1.5rem] bg-secondary/85 p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Truck className="size-4 text-primary" />
                  <span>Estimated delivery in 3-5 business days</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-4 text-primary" />
                  <span>Encrypted payment via Stripe Checkout</span>
                </div>
              </div>
              <Button onClick={createCheckoutSession} disabled={loading || cart.length < 1} className="w-full rounded-full" size="lg">
                {loading ? "Processing..." : "Make purchase"}
              </Button>
              <Link href="/shop" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full rounded-full")}>
                Continue shopping
              </Link>
            </CardContent>
          </Card>

          <Card className="border-none bg-card/90 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TicketPercent className="size-5 text-primary" />
                Promo code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input className="h-10 rounded-full bg-background" placeholder="Enter code" />
              <Button variant="outline" className="w-full rounded-full">
                Apply code
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
