import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Alessia Forcellati | Luxury Event Designer | Dubai",
  description: "Italian luxury event designer based in Dubai. Trained by Valentino, Chanel, and Dior. Creating unforgettable moments for fashion houses, private clients, and exclusive venues.",
  keywords: "luxury event planner Dubai, Italian event designer, fashion event management, Dubai events, Valentino events, luxury private events, destination weddings Dubai",
  authors: [{ name: "Alessia Forcellati" }],
  openGraph: {
    title: "Alessia Forcellati | Luxury Event Designer",
    description: "Italian elegance meets Dubai grandeur. Luxury event design for fashion houses and discerning clients.",
    type: "website",
    locale: "en_US",
    siteName: "Alessia Forcellati",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessia Forcellati | Luxury Event Designer",
    description: "Italian elegance meets Dubai grandeur. Luxury event design for fashion houses and discerning clients.",
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
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
