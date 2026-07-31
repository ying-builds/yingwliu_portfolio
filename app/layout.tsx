import type { Metadata } from "next";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=PT+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
