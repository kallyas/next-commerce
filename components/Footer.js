const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr,1fr,1fr,1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Next Commerce
          </p>
          <h2 className="max-w-sm text-2xl font-semibold tracking-tight">
            Tailored storefront rebuilt with Tailwind CSS v4 and shadcn-style primitives.
          </h2>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Modern layout, lighter CSS, and a component system that matches the App Router setup.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Shop
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Clothing</li>
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Bags</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Support
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Checkout</li>
            <li>Store policy</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>info@nextcommerce.dev</li>
            <li>+1 555 012 3344</li>
            <li>Kampala to Brooklyn shipping</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
