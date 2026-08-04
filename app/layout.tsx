import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ying Liu — Product Designer",
  description:
    "Ying Liu is a Product Designer who designs thoughtful, scalable experiences grounded in real user needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* No font <link> here: Inter, PT Mono and Bootzy TM are all self-hosted
          and declared in styles/globals.css, so type rendering does not wait on
          a third-party request. */}
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
