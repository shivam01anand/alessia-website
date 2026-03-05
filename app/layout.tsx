import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Alessia Forcellati | Luxury Event Manager | Dubai",
  description: "Italian luxury event manager based in Dubai. Trained by Valentino, Chanel, and Dior. Creating unforgettable moments for fashion houses, private clients, and exclusive venues.",
  keywords: "luxury event manager Dubai, Italian event manager, fashion event management, Dubai events, Valentino events, luxury private events, destination weddings Dubai",
  authors: [{ name: "Alessia Forcellati" }],
  metadataBase: new URL("https://alessiaforcellati.com"),
  openGraph: {
    title: "Alessia Forcellati",
    description: "Luxury Event Manager. Dubai.",
    type: "website",
    locale: "en_US",
    siteName: "Alessia Forcellati",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alessia Forcellati - Luxury Event Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessia Forcellati",
    description: "Luxury Event Manager. Dubai.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F7F4F0] text-[#2C2825] antialiased">
        <Navigation />
        <main>
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
