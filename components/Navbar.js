import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky-wrapper">
      <header className="header sticky-header">
        <div className="container">
          <a href="index.html" className="site-logo" title="Shopo - eCommerce Template">
            <Image src="/assets/images/logo.png" alt="Logo" height={50} width={50} />
            <span className="sr-only">Shopo - eCommerce Template</span>
          </a>

          <div className="header-dropdowns">
            <div className="dropdown header-dropdown">
              <Link href="#">
                <a
                  className="dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  USD
                  <i className="fa fa-caret-down"></i>
                </a>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">
                    <a title="Euro">EUR</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a title="Pound">PND</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a title="Yen">YEN</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="dropdown header-dropdown">
              <Link href="#">
                <a
                  className="dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  ENG
                  <i className="fa fa-caret-down"></i>
                </a>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">
                    <a title="Spanish">SPA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a title="Turkish">TUR</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a title="German">GER</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="search-form-container">
            <Link href="#">
              <a className="search-form-toggle" title="Toggle Search">
                <i className="fa fa-search"></i>
              </a>
            </Link>
            <form action="#">
              <div className="dropdown search-dropdown">
                <Link href="#">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    All Category
                    <i className="fa fa-caret-down"></i>
                  </a>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="#">
                      <a>Fashion</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Electronics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Furniture</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Equipments</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <input type="search" className="form-control" placeholder="Search" required="" />
              <button type="submit" title="Search" className="btn">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <ul className="top-links">
            <li>
              <Link href="#">
                <a>Sign In</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Cart</a>
              </Link>
            </li>
          </ul>

          <div className="dropdown cart-dropdown">
            <Link href="#">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span className="cart-icon">
                  <Image src="assets/images/bag.png" alt="Cart" />
                  <span className="cart-count">4</span>
                </span>
                <i className="fa fa-caret-down"></i>
              </a>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <p className="dropdown-cart-info">You have 2 products in your cart.</p>
              <div className="dropdown-menu-wrapper">
                <div className="product">
                  <figure className="product-image-container">
                    <Link href="#">
                      <a title="Product Name">
                        <Image
                          src="assets/images/products/small/product2.jpg"
                          alt="Product Image"
                        />
                      </a>
                    </Link>
                  </figure>

                  <div>
                    <Link href="#">
                      <a className="btn-delete" title="Delete product" role="button"></a>
                    </Link>
                    <h4 className="product-title">
                      <Link href="#">
                        <a>Sunglasses</a>
                      </Link>
                    </h4>
                    <div className="product-price-container">
                      <span className="product-price">$110.00</span>
                    </div>
                    <div className="product-qty">x1</div>
                  </div>
                </div>

                <div className="product">
                  <figure className="product-image-container">
                    <Link href="#">
                      <a title="Product Name">
                        <Image
                          src="assets/images/products/small/product1.jpg"
                          alt="Product Image"
                        />
                      </a>
                    </Link>
                  </figure>

                  <div>
                    <Link href="#">
                      <a className="btn-delete" title="Delete product" role="button"></a>
                    </Link>
                    <h4 className="product-title">
                      <Link href="#">
                        <a>Leather Belt</a>
                      </Link>
                    </h4>
                    <div className="product-price-container">
                      <span className="product-price">$99.00</span>
                    </div>
                    <div className="product-qty">x1</div>
                  </div>
                </div>
              </div>

              <div className="cart-dropdowm-action">
                <div className="dropdowm-cart-total">
                  <span>TOTAL:</span> $209.00
                </div>
                <Link href="#">
                  <a className="btn btn-primary">Checkout</a>
                </Link>
              </div>
            </div>
          </div>

          <Link href="#">
            <a className="sidemenu-btn" title="Menu Toggle">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
