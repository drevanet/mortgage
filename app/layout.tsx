
import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "The Preferred Mortgage",
  description:
    "Clear, personalized mortgage guidance for homebuyers, homeowners, and property investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

