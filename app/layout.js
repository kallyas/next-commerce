import "../styles/globals.css";
import Layout from "../components/Layout";
import Providers from "./providers";

export const metadata = {
  title: "Next Commerce",
  description: "A sample storefront rebuilt with Tailwind CSS v4 and shadcn-style components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
