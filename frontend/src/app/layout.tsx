import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: {
    default: "Excel Coatings - Advanced Eco-Friendly Nano Coatings",
    template: "%s | Excel Coatings"
  },
  description: "Leading manufacturer of advanced, eco-friendly nano-based coatings for industrial and commercial applications. Sustainable solutions for tomorrow's challenges.",
  keywords: ["nano coatings", "eco-friendly coatings", "industrial coatings", "sustainable coatings", "protective coatings"],
  authors: [{ name: "Excel Coatings" }],
  creator: "Excel Coatings",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://excelcoatings.com",
    title: "Excel Coatings - Advanced Eco-Friendly Nano Coatings",
    description: "Leading manufacturer of advanced, eco-friendly nano-based coatings for industrial and commercial applications.",
    siteName: "Excel Coatings",
    images: [
      {
        url: "https://excelcoatings.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Excel Coatings - Advanced Eco-Friendly Nano Coatings"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Coatings - Advanced Eco-Friendly Nano Coatings",
    description: "Leading manufacturer of advanced, eco-friendly nano-based coatings.",
    images: ["https://excelcoatings.com/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://excelcoatings.com/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Excel Coatings",
              "url": "https://excelcoatings.com",
              "logo": "https://excelcoatings.com/logo.png",
              "sameAs": [
                "https://instagram.com/excelcoatings_india/",
                "https://www.youtube.com/@excelcoatings-heatreflecti1903",
                "https://www.linkedin.com/company/excel-coatings-india/"
              ]
            })
          }}
        />
        <link rel="canonical" href="https://excelcoatings.com/" />
        <meta property="og:image" content="https://excelcoatings.com/og-image.jpg" />
        <meta name="twitter:image" content="https://excelcoatings.com/og-image.jpg" />
      </head>
      <body className="antialiased bg-black text-white font-sans">
        <CartProvider>
          <Banner />
          <Header />
          <main className="flex-1">
        {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
