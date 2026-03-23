import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full rounded-[36px]">
        <CardContent className="space-y-5 p-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Checkout canceled
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Your cart is still intact.</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            No charge was made. You can return to the cart or keep browsing the catalog.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <Link href="/cart">Back to cart</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/shop">Browse products</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
