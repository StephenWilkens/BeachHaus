import "./globals.css";
import { Inter } from "next/font/google";
import { TwNav } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beach Haus",
  description: "Beach Haus Brewery, 801 Craft Kitchen, and The Rooftop at Beach Haus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="min-h-screen flex flex-col justify-between" className={inter.className}>
        <>
          <TwNav />
          <main class="flex-grow">{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
