import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="info-bar">
          <div className="info-bar-col">
            <h5 className="info-bar-title">FREE SHIPPING &amp; RETURN</h5>
            <p>Free shipping on all orders over $99</p>
          </div>
          <div className="info-bar-col">
            <h5 className="info-bar-title">MONEY BACK GUARANTEE</h5>
            <p>100% money back guarantee</p>
          </div>
          <div className="info-bar-col">
            <h5 className="info-bar-title">ONLINE SUPPORT 24/7</h5>
            <p>Highly customer satisfaction</p>
          </div>
        </div>
      </div>
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-about">
                <h4 className="widget-title">Contact Information</h4>

                <address>
                  <span>123 Shopo St</span>
                  <span>Commerce Land, EC 12345</span>
                  <span>+123 456 7890</span>
                  <Link href="mailto:email@example.com">
                    <a>info@domain.com</a>
                  </Link>
                </address>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="widget">
                <h4 className="widget-title">Collection</h4>

                <ul className="links">
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
                      <a>Home &amp; Garden</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Music</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Sports</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Motors</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="clearfix visible-sm"></div>

            <div className="col-sm-6 col-md-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="links">
                  <li>
                    <Link href="#">
                      <a>Account</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Login</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>My cart</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Wishlist</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Checkout</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="widget widget-newsletter">
                <h4 className="widget-title">Newsletter</h4>
                <p>Signup for our newsletter</p>

                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required=""
                    />
                    <input type="submit" value="GO" className="btn" />
                  </div>
                </form>

                <div className="social-icons">
                  <Link href="#">
                    <a className="social-icon" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="social-icon" title="Twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="social-icon" title="Linkedin">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">Online © 2017. All Rights Reserved</p>
          <Image
            src="/assets/images/cards.png"
            alt="Payment Methods"
            className="Image-cards"
            width={50}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
