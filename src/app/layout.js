import "./globals.css";
import "./components/shop/ShopNowManager.css";
import ClientLayout from "./components/layout/ClientLayout";

export const metadata = {
  title: {
    default: "MTBOSS Construction Private Limited",
    template: "%s | MTBOSS",
  },
  description:
    "MTBOSS Construction Private Limited – Expert construction, renovation, and waterproofing services in Moradabad and Bareilly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="_HIsDPgunnMsWo7iWtmz2fX3YW9aG406vj5zL02lWXY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
