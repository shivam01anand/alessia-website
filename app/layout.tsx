import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Alessia Forcellati | Project Event Manager | Dubai",
  description: "Project Event Manager at Digital Minds, MC Holding Group. Luxury events, real estate, and global marketing. Based in Dubai.",
  keywords: "Alessia Forcellati, project event manager Dubai, Digital Minds, MC Holding Group, luxury events Dubai, Dubai real estate",
  authors: [{ name: "Alessia Forcellati" }],
  metadataBase: new URL("https://alessiaforcellati.com"),
  openGraph: {
    title: "Alessia Forcellati",
    description: "Luxury Events & Real Estate. Dubai.",
    type: "website",
    locale: "en_US",
    siteName: "Alessia Forcellati",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alessia Forcellati - Luxury Events & Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessia Forcellati",
    description: "Luxury Events & Real Estate. Dubai.",
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
