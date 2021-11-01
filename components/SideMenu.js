import Image from "next/image";
import Link from "next/link";

const SideMenu = () => {
  return (
    <aside className="sidemenu">
      <div
        className="sidemenu-wrapper ps-container ps-theme-default ps-active-y"
        data-ps-id="1ebf8690-aa1c-6f29-d475-4a46b76d2d16"
      >
        <div className="sidemenu-header">
          <Link href="/">
            <a className="sidemenu-logo">
              <Image src="assets/images/logo.png" alt="logo" />
            </a>
          </Link>
        </div>

        <ul className="metismenu">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              Pages <span className="sidemenu-icon"></span>
            </a>
            <ul aria-expanded="false" className="collapse">
              <li>
                <Link href="#">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>404 Page</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              Shop <span className="sidemenu-icon"></span>
            </a>
            <ul aria-expanded="false" className="collapse">
              <li>
                <Link href="#">
                  <a>Shopping Cart</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Checkout</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Sign In</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Sign Up</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <a aria-expanded="false">
                Portfolio<span className="sidemenu-icon"></span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a aria-expanded="false">
                Blog<span className="sidemenu-icon"></span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Buy Shopo!</a>
            </Link>
          </li>
        </ul>
        <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
          <div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div>
        </div>
        <div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "150px", right: "0px" }}>
          <div className="ps-scrollbar-y" tabIndex="0" style={{ top: "0px", height: "48px" }}></div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
