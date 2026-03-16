import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crescent Technosofts - Leading Software Solutions Provider",
  description: "Comprehensive software solutions for healthcare, education, and business management. Hospital Management, Lab Management, Clinic Management, and more.",
  keywords: "hospital management software, lab management software, clinic management, pharmacy software, school management, inventory management",
  icons: {
    icon: "/Assets/logo.webp",
    shortcut: "/Assets/logo.webp",
    apple: "/Assets/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
