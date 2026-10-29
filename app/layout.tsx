import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  /* Required for link previews. Without it Next emits og:image as a relative
     path, and a scraper fetching the URL from outside the site has nothing to
     resolve it against — the card comes back blank. Everything else here can
     stay relative because this exists. */
  metadataBase: new URL("https://yingwliu.com"),
  title: "Ying Liu | UX & Product Designer Portfolio",
  description:
    "Ying Liu is a UX and product designer in Sacramento, CA. Take a look at her case studies in help centers, event tools and social apps.",
  openGraph: {
    title: "Ying Liu | UX & Product Designer Portfolio",
    description:
      "Ying Liu is a UX and product designer in Sacramento, CA. Take a look at her case studies in help centers, event tools and social apps.",
    url: "https://yingwliu.com",
    siteName: "Ying Liu",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Ying Liu, product designer, Sacramento",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* No font <link> here: Inter, Intel One Mono and Bootzy TM are all self-hosted
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
