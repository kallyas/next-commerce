import Link from "next/link";
import Image from "next/image";
import SideMenu from "../components/SideMenu";

export default function Home() {
  return (
    <>
      <SideMenu />
      <div className="sidemenu-overlay"></div>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-md-push-3"></div>
            <aside className="col-md-3 col-md-pull-9 sidebar sidebar-shop">
              <div className="widget widget-box widget-shop-category active">
                <h3 className="widget-title">
                  Category{" "}
                  <Link href="#">
                    <a className="btn-filter" role="button">
                      Filter<i className="fa fa-caret-down"></i>
                    </a>
                  </Link>
                </h3>

                <ul className="shop-category-list accordion">
                  <li>
                    <Link href="#">
                      <a>Fashion</a>
                    </Link>
                    <button
                      className="accordion-btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#accordion-ul-1"
                      aria-expanded="false"
                      aria-controls="accordion-ul-1"
                    >
                      <span className="accordion-icon"></span>
                    </button>

                    <ul className="collapse" id="accordion-ul-1" aria-expanded="false">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Women Clothes
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Men Clothes
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Shoes
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Electronics </a>
                    </Link>
                    <button
                      className="accordion-btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#accordion-ul-2"
                      aria-expanded="false"
                      aria-controls="accordion-ul-2"
                    >
                      <span className="accordion-icon"></span>
                    </button>

                    <ul className="collapse" id="accordion-ul-2" aria-expanded="false">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Computers
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Mobile Phones
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Tablets
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Home &amp; Garden</a>
                    </Link>
                    <button
                      className="accordion-btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#accordion-ul-3"
                      aria-expanded="false"
                      aria-controls="accordion-ul-3"
                    >
                      <span className="accordion-icon"></span>
                    </button>

                    <ul className="collapse" id="accordion-ul-3" aria-expanded="false">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Bedding
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Furniture
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Home Decor
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Kitchen, Dining &amp; Bar
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Gardening Supplies
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Outdoor Lightning
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Music Instruments</a>
                    </Link>
                    <button
                      className="accordion-btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#accordion-ul-4"
                      aria-expanded="false"
                      aria-controls="accordion-ul-4"
                    >
                      <span className="accordion-icon"></span>
                    </button>

                    <ul className="collapse" id="accordion-ul-4" aria-expanded="false">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>SubCategory
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>SubCategory
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>SubCategory
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>SubCategory
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Sports Equipments</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Motors Products</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Shopo Pages</a>
                    </Link>
                    <button
                      className="accordion-btn collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#accordion-ul-5"
                      aria-expanded="false"
                      aria-controls="accordion-ul-5"
                    >
                      <span className="accordion-icon"></span>
                    </button>

                    <ul className="collapse" id="accordion-ul-5" aria-expanded="false">
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>About
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Portfolio 4 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Portfolio 3 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Portfolio 2 Columns
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Portfolio Post
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Blog
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Blog Post
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <i className="fa fa-caret-right"></i>Contact
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Buy Theme</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="widget widget-box widget-shop-filter">
                <h3 className="widget-title">
                  Filter{" "}
                  <Link href="#">
                    <a className="btn-category" role="button">
                      Categories<i className="fa fa-caret-down"></i>
                    </a>
                  </Link>
                </h3>

                <div className="filter-box">
                  <h5 className="filter-label">Sort By</h5>
                  <ul className="shop-filter-list">
                    <li>
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Default
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Popularity
                        </a>
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Average Rating
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Newness
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Price: Low to high
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="fa fa-caret-right"></i>Price: high to Low
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="filter-box">
                  <h5 className="filter-label">
                    Price{" "}
                    <span className="filter-price-text">
                      <span className="filter-price-prefix">$</span>
                      <span id="filter-price-range">50.00 - 150.00</span>
                    </span>
                  </h5>
                  <div className="price-slider-wrapper">
                    <div id="price-slider" className="noUi-target noUi-ltr noUi-horizontal">
                      <div className="noUi-base">
                        <div className="noUi-origin" style={{ left: "12.5%" }}>
                          <div
                            className="noUi-handle noUi-handle-lower"
                            data-handle="0"
                            style="z-index: 5;"
                          ></div>
                        </div>
                        <div className="noUi-connect" style="left: 12.5%; right: 62.5%;"></div>
                        <div className="noUi-origin" style={{ left: "37.5%" }}>
                          <div
                            className="noUi-handle noUi-handle-upper"
                            data-handle="1"
                            style={{ zIndex: "6" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="filter-box">
                  <h5 className="filter-label">Color</h5>
                  <div className="row">
                    <div className="col-xs-6">
                      <ul className="filter-color-list">
                        <li>
                          <span
                            className="filter-color"
                            style={{ backgroundColor: "#1e73be" }}
                          ></span>
                          <span className="filter-color-text">Blue</span>
                        </li>
                        <li>
                          <span
                            className="filter-color"
                            style={{ backgroundColor: "#c0c0c0" }}
                          ></span>
                          <span className="filter-color-text">Gray</span>
                        </li>
                        <li>
                          <span
                            className="filter-color"
                            style={{ backgroundColor: "#dc9814" }}
                          ></span>
                          <span className="filter-color-text">Orange</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-xs-6">
                      <ul className="filter-color-list">
                        <li>
                          <span
                            className="filter-color"
                            style={{ backgroundColor: "#736751" }}
                          ></span>
                          <span className="filter-color-text">Brown</span>
                        </li>
                        <li>
                          <span
                            className="filter-color"
                            style={{ backgroundColor: "#05ac92" }}
                          ></span>
                          <span className="filter-color-text">Green</span>
                        </li>
                        <li>
                          <span className="filter-color" style={{ backgroundColor: "#fff" }}></span>
                          <span className="filter-color-text">White</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Link href="#">
                  <a className="btn btn-apply btn-block">Apply Filter</a>
                </Link>
              </div>

              <div className="widget widget-banner">
                <div className="banner banner-image">
                  <Link href="#">
                    <a title="Brown Woman Shoes">
                      <Image
                        src="/assets/images/banners/widget-banner.png"
                        alt="Banner name"
                        height={50}
                        height={50}
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="widget widget-newsletter">
                <h3 className="widget-title">Newsletter</h3>
                <p>Enter your email address below to subscribe to my newsletter</p>

                <form action="#">
                  <div className="form-group">
                    <Image
                      src="/assets/images/icon-newsletter-email.png"
                      alt="Email"
                      height={50}
                      width={50}
                    />
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <input type="submit" value="subscribe now" className="btn btn-block" />
                </form>
              </div>

              <div className="widget widget-testimonial">
                <div
                  className="owl-data-carousel owl-carousel owl-loaded owl-drag"
                  data-owl-settings='{ "items":1, "margin": 5, "loop": false, "nav": false, "dots":true }'
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "705px",
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: "230px", marginRight: "5px" }}
                      >
                        <div className="testimonial">
                          <Image
                            src="/assets/images/testimonials/user1.png"
                            alt="User image"
                            height={50}
                            width={50}
                          />
                          <h5 className="testimonial-owner">John Smith</h5>
                          <div className="testimonial-owner-position">Ceo &amp; Founder Okler</div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                          </p>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "230px", marginRight: "5px" }}>
                        <div className="testimonial">
                          <Image
                            src="/assets/images/testimonials/user2.png"
                            alt="User image"
                            width={50}
                            height={50}
                          />
                          <h5 className="testimonial-owner">Susan Smith</h5>
                          <div className="testimonial-owner-position">CPO &amp; Co-Founder</div>
                          <p>
                            Distinctio, corrupti nesciunt aperiam, eaque, reiciendis dummy
                            consequunt.
                          </p>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "230px", marginRight: "5px" }}>
                        <div className="testimonial">
                          <Image
                            src="/assets/images/testimonials/user3.png"
                            alt="User image"
                            width={50}
                            height={50}
                          />
                          <h5 className="testimonial-owner">David Lee</h5>
                          <div className="testimonial-owner-position">Senior Developer</div>
                          <p>
                            Adipisci esse nobis alias magnam dolores debitis non odit porro nost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <div className="owl-prev"></div>
                    <div className="owl-next"></div>
                  </div>
                  <div className="owl-dots">
                    <div className="owl-dot active">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                    <div className="owl-dot">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
