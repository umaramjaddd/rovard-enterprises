import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "../Redux/ReduxProvider";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      {/* Set selection styling to Maroon brand colors */}
      <body className="bg-black text-foreground min-h-screen selection:bg-maroon/30 selection:text-white">
        <ReduxProvider>
          <Navbar />
          <main className="pt-[60px] md:pt-[100px]">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}