import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Coatings - Advanced Eco-Friendly Nano Coatings",
    description: "Leading manufacturer of advanced, eco-friendly nano-based coatings.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-black text-white">
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
