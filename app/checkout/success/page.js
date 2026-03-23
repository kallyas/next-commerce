"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { clearCart } from "../../../features/cart/cartSlice";

export default function CheckoutSuccessPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearCart());

    const timeout = window.setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [dispatch, router]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full border-none bg-card/90 shadow-sm">
        <CardContent className="space-y-5 py-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Payment complete
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Order placed successfully.</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            You will be redirected to the home page in 5 seconds.
          </p>
          <div className="flex justify-center">
            <Button className="rounded-full" onClick={() => router.replace("/")}>
              Return home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
