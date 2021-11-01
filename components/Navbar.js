import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div class="sticky-wrapper">
      <header class="header sticky-header">
        <div class="container">
          <a href="index.html" class="site-logo" title="Shopo - eCommerce Template">
            <Image src="assets/images/logo.png" alt="Logo" />
            <span class="sr-only">Shopo - eCommerce Template</span>
          </a>

          <div class="header-dropdowns">
            <div class="dropdown header-dropdown">
              <Link href="#">
                <a
                  class="dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  USD
                  <i class="fa fa-caret-down"></i>
                </a>
              </Link>
              <ul class="dropdown-menu">
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

            <div class="dropdown header-dropdown">
              <Link href="#">
                <a
                  class="dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  ENG
                  <i class="fa fa-caret-down"></i>
                </a>
              </Link>
              <ul class="dropdown-menu">
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

          <div class="search-form-container">
            <Link href="#">
              <a class="search-form-toggle" title="Toggle Search">
                <i class="fa fa-search"></i>
              </a>
            </Link>
            <form action="#">
              <div class="dropdown search-dropdown">
                <Link href="#">
                  <a
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    All Category
                    <i class="fa fa-caret-down"></i>
                  </a>
                </Link>
                <ul class="dropdown-menu">
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
              <input type="search" class="form-control" placeholder="Search" required="" />
              <button type="submit" title="Search" class="btn">
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>

          <ul class="top-links">
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

          <div class="dropdown cart-dropdown">
            <Link href="#">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                <span class="cart-icon">
                  <Image src="assets/images/bag.png" alt="Cart" />
                  <span class="cart-count">4</span>
                </span>
                <i class="fa fa-caret-down"></i>
              </a>
            </Link>
            <div class="dropdown-menu dropdown-menu-right">
              <p class="dropdown-cart-info">You have 2 products in your cart.</p>
              <div class="dropdown-menu-wrapper">
                <div class="product">
                  <figure class="product-image-container">
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
                      <a class="btn-delete" title="Delete product" role="button"></a>
                    </Link>
                    <h4 class="product-title">
                      <Link href="#">
                        <a>Sunglasses</a>
                      </Link>
                    </h4>
                    <div class="product-price-container">
                      <span class="product-price">$110.00</span>
                    </div>
                    <div class="product-qty">x1</div>
                  </div>
                </div>

                <div class="product">
                  <figure class="product-image-container">
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
                      <a class="btn-delete" title="Delete product" role="button"></a>
                    </Link>
                    <h4 class="product-title">
                      <Link href="#">
                        <a>Leather Belt</a>
                      </Link>
                    </h4>
                    <div class="product-price-container">
                      <span class="product-price">$99.00</span>
                    </div>
                    <div class="product-qty">x1</div>
                  </div>
                </div>
              </div>

              <div class="cart-dropdowm-action">
                <div class="dropdowm-cart-total">
                  <span>TOTAL:</span> $209.00
                </div>
                <Link href="#">
                  <a class="btn btn-primary">Checkout</a>
                </Link>
              </div>
            </div>
          </div>

          <Link href="#">
            <a class="sidemenu-btn" title="Menu Toggle">
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
