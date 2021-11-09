import Image from "next/image";
import Link from "next/link";
import { cartSelector } from "../features/cart/cartSlice";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalItems } = useSelector(cartSelector);
  return (
    <>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <Link href="/">
                  <a className="brand-wrap">E-Commerce</a>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header  mr-3">
                   <Link href="/cart">
                   <a className="icon icon-sm rounded-circle border">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                   </Link>
                    <span className="badge badge-pill badge-danger notify">{totalItems}</span>
                  </div>
                  <div className="widget-header icontext">
                    <a href="#" className="icon icon-sm rounded-circle border">
                      <i className="fa fa-user"></i>
                    </a>
                    <div className="text">
                      <span className="text-muted">Welcome!</span>
                      <div>
                        <a href="#">Sign in</a> |<a href="#"> Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop">
                  <a className="nav-link">Shop</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
