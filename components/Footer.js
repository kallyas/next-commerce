const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/70 bg-card/35">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Next Commerce
            </p>
            <h2 className="max-w-sm text-2xl font-semibold tracking-tight">
              Fashion, electronics, jewelry, and home essentials in one storefront.
            </h2>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              A simple shopping experience with product discovery, fast checkout, and easy returns.
            </p>
          </div>
          <div className="min-w-[160px]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Departments
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Women</li>
              <li>Men</li>
              <li>Accessories</li>
              <li>Electronics</li>
              <li>Homeware</li>
            </ul>
          </div>
          <div className="min-w-[160px]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Customer Care
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Shipping & Delivery</li>
              <li>Returns</li>
              <li>Payments</li>
              <li>Gift cards</li>
              <li>Help center</li>
            </ul>
          </div>
          <div className="min-w-[160px]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@nextcommerce.dev</li>
              <li>+1 555 012 3344</li>
              <li>Mon - Sat, 9am - 7pm</li>
              <li>Brooklyn, New York</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Next Commerce. All rights reserved.</p>
          <p>Secure payments. Fast dispatch. Easy returns.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
