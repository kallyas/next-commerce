import Link from "next/link";
import Image from "next/image";

export default function Home({ data }) {

  return (
    <>
      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  <li>
                    <a href="#">Best clothes</a>
                  </li>
                  <li>
                    <a href="#">Automobiles</a>
                  </li>
                  <li>
                    <a href="#">Home interior</a>
                  </li>
                  <li>
                    <a href="#">Electronics</a>
                  </li>
                  <li>
                    <a href="#">Technologies</a>
                  </li>
                  <li>
                    <a href="#">Digital goods</a>
                  </li>
                  <li className="has-submenu">
                    <a href="#">More items</a>
                    <ul className="submenu">
                      <li>
                        <a href="#">Submenu name</a>
                      </li>
                      <li>
                        <a href="#">Great submenu</a>
                      </li>
                      <li>
                        <a href="#">Another menu</a>
                      </li>
                      <li>
                        <a href="#">Some others</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article className="banner-wrap">
                <Image
                  src="/images/banners/2.jpg"
                  className="w-100 rounded"
                  alt="banner"
                  layout="fill"
                />
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Popular products</h3>
          </header>
          <div className="row">
          {data.slice(0,8).map((item, index) => (
            <div className="col-md-3" key={index}>
            <div href="#" className="card card-product-grid">
              <a href="#" className="img-wrap"> 
              <Image src={item.image} alt={item.title} width={220} height={200} />
              </a>
              <figcaption className="info-wrap">
               <Link href="/product/[id]" as={`/product/${item.id}`}>
               <a className="title">{item.title.substr(0, 20)}</a>
               </Link>
                <div className="price mt-1">${item.price}</div>
              </figcaption>
            </div>
          </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}

export  async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}