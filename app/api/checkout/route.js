import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const { cart = [] } = await request.json();

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.CLIENT_URL || request.nextUrl.origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: cart.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${origin}/checkout/success`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    return NextResponse.json({
      status: "success",
      session,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 500 },
    );
  }
}
