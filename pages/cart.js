import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cartSelector } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { reduceQuantity, increaseQuantity, removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const { cart, totalPrice } = useSelector(cartSelector);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  const createCheckoutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });

    const { session } = await checkoutSession.json();
    const sessionId = session.id;
    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
      console.error(result.error);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Your Shopping cart</h2>
        </div>
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" className="text-right" width="200"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length < 1 && (
                      <tr>
                        <td colSpan="4" className="text-center">
                          <h5>Your cart is empty</h5>
                        </td>
                      </tr>
                    )}
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <figure className="itemside">
                            <div className="aside">
                              <Image
                                src={item.image}
                                alt={item.title}
                                height={100}
                                width={100}
                                className="img-sm"
                              />
                            </div>
                            <figcaption className="info">
                              <a href="#" className="title text-dark">
                                {item.title}
                              </a>
                              <p className="text-muted small">
                                Size: XL, Color: blue, <br /> Brand: Gucci
                              </p>
                            </figcaption>
                          </figure>
                        </td>
                        <td>
                          <div className="input-group input-spinner">
                            <div className="input-group-prepend">
                              <button
                                onClick={() => dispatch(reduceQuantity({ product: item }))}
                                className="btn btn-light"
                                type="button"
                                id="button-plus"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              value={item.quantity}
                              readOnly
                            />
                            <div className="input-group-append">
                              <button
                                onClick={() => dispatch(increaseQuantity({ product: item }))}
                                className="btn btn-light"
                                type="button"
                                id="button-minus"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="price-wrap">
                            <var className="price">${(item.price * item.quantity).toFixed(2)}</var>
                            <small className="text-muted"> ${item.price} each </small>
                          </div>
                        </td>
                        <td className="text-right">
                          <a
                            data-original-title="Save to Wishlist"
                            title=""
                            className="btn btn-light"
                            data-toggle="tooltip"
                          >
                            <i className="fa fa-heart"></i>
                          </a>
                          <a
                            onClick={() => dispatch(removeFromCart({ product: item }))}
                            className="btn btn-light"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="card-body border-top">
                  {cart.length > 0 && (
                    <Link href="#">
                      <a 
                      onClick={createCheckoutSession}
                      className="btn btn-primary float-md-right">
                        Make Purchase <i className="fa fa-chevron-right"></i>
                      </a>
                    </Link>
                  )}
                  <Link href="/shop">
                    <a className="btn btn-light">
                      <i className="fa fa-chevron-left"></i> Continue shopping
                    </a>
                  </Link>
                </div>
              </div>

              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
                </p>
              </div>
            </main>
            <aside className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          placeholder="Coupon code"
                        />
                        <span className="input-group-append">
                          <button className="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">USD {totalPrice.toFixed(2)}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">USD 658</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img src="/images/misc/payments.png" height="26" />
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="section-name bg padding-y">
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>
            Shopo may, but are under no obligation to, honor requests for refunds for the following
            reasons:
          </p>{" "}
          <p>
            Non-delivery of the product: Due to an issue with the mail or courier service, you do
            not receive a delivery e-mail from us. Depending on the price of the product,Shopo may
            require you to first submit proof that you have submitted a report to the mail service
            or courier company describing the missing item;
          </p>
        </div>
      </section>
    </>
  );
};

export default Cart;
