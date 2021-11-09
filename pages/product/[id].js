import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

const Product = ({ product, products }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success(`Added to ${product.title} to cart`);
  };
  console.log(product);
  return (
    <>
      <Head>
        <title>{product.title} | Next Commerce</title>
      </Head>
      <section className="padding-y mt-5">
        <div className="container">
          <header className="section-heading">
            <h2 className="section-title">Product Details</h2>
          </header>
        </div>
      </section>
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="card">
            <div className="row no-gutters">
              <aside className="col-md-6">
                <article className="gallery-wrap">
                  <div className="img-big-wrap">
                    <a href="#">
                      <Image src={product.image} layout="fill" alt={product.title} />
                    </a>
                  </div>
                </article>
              </aside>
              <main className="col-md-6 border-left">
                <article className="content-body">
                  <h2 className="title">{product.title}</h2>

                  <div className="rating-wrap my-3">
                    <ul className="rating-stars">
                      <li style={{ width: "80%" }} className="stars-active">
                        <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <small className="label-rating text-muted">
                      {product.rating.count} reviews
                    </small>
                    <small className="label-rating text-success">
                      <i className="fa fa-clipboard-check"></i> 154 orders
                    </small>
                  </div>

                  <div className="mb-3">
                    <var className="price h4">${product.price}</var>
                    <span className="text-muted">/per item</span>
                  </div>

                  <p>{product.description}</p>

                  <dl className="row">
                    <dt className="col-sm-3">Model</dt>
                    <dd className="col-sm-9">N/A</dd>

                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">N/A</dd>

                    <dt className="col-sm-3">Delivery</dt>
                    <dd className="col-sm-9">World Wide </dd>
                  </dl>

                  <hr />
                  <div className="row">
                    <div className="form-group col-md flex-grow-0">
                      <label>Quantity</label>
                      <div className="input-group mb-3 input-spinner">
                        <div className="input-group-prepend">
                          <button
                            onClick={increaseQuantity}
                            className="btn btn-light"
                            type="button"
                            id="button-plus"
                          >
                            +
                          </button>
                        </div>
                        <input type="text" className="form-control" value={quantity} readOnly/>
                        <div className="input-group-append">
                          <button
                            onClick={reduceQuantity}
                            className="btn btn-light"
                            type="button"
                            id="button-minus"
                          >
                            −
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a onClick={handleCart} className="btn  btn-outline-primary">
                    <span className="text">Add to cart</span>
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </article>
              </main>
            </div>
          </div>
          <div className="card card-body mt-5">
            <header className="mb-4">
              <h4 className="card-title">Other products you may like</h4>
            </header>
            <div className="row">
              {products.slice(0, 4).map((product) => (
                <div className="col-md-3" key={product.id}>
                  <figure className="itemside mb-2">
                    <div className="aside">
                      <Image
                        src={product.image}
                        height={100}
                        width={100}
                        alt={product.title}
                        className="border img-sm"
                      />
                    </div>
                    <figcaption className="info align-self-center">
                      <Link href="/product/[id]" as={`/product/${product.id}`}>
                        <a className="title">{product.title.substr(0, 20)}</a>
                      </Link>
                      <strong className="price">${product.price}</strong>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const res2 = await fetch("https://fakestoreapi.com/products");
  const products = await res2.json();
  const product = await res.json();
  return {
    props: {
      product,
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
