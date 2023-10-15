import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codewar Software Solution",
  description:
    "Empowering Businesses with Innovative Software Solutions. Expertise in Web Development, Mobile Apps, and Custom Software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
