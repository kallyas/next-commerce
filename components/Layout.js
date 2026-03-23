import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main className="relative z-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
