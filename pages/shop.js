import React from "react";
import Filter from "../components/Filter";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import {addToCart} from "../features/cart/cartSlice"
import { useDispatch } from "react-redux";

const Shop = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Added to cart");
  }
  return (
    <>
      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">All products</h2>
        </div>
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <Filter />
            <main className="col-sm-9">
              <header className="border-bottom mb-4 pb-3">
                <div className="form-inline">
                  <span className="mr-md-auto">{products.length} Items found</span>
                </div>
              </header>
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-4" key={product.id}>
                    <figure className="card card-product-grid">
                      <div className="img-wrap">
                        {/* <span className="badge badge-danger"> NEW </span> */}
                        <Image src={product.image} height={220} width={220} alt={product.title} />
                        <a className="btn-overlay" href="#">
                          <i className="fa fa-search-plus"></i> Quick view
                        </a>
                      </div>
                      <figcaption className="info-wrap">
                        <div className="fix-height">
                          <Link href="/product/[id]" as={`/product/${product.id}`}>
                            <a className="title">{product.title.substr(0, 20)}</a>
                          </Link>
                          <div className="price-wrap mt-2">
                            <span className="price">${product.price}</span>
                            {/* <del className="price-old">$1980</del> */}
                          </div>
                        </div>
                        <a 
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-block btn-primary">Add to cart</a>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
