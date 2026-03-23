import Link from "next/link";
import { buttonVariants } from "../../../lib/button-styles";
import { cn } from "../../../lib/utils";
import { Card, CardContent } from "../../../components/ui/card";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full border-none bg-card/90 shadow-sm">
        <CardContent className="space-y-5 py-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Checkout canceled
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Your cart is still intact.</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            No charge was made. You can return to the cart or keep browsing the catalog.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/cart" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full")}>
              Back to cart
            </Link>
            <Link href="/shop" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}>
              Browse products
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
