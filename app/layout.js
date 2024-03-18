import "./globals.css";
import { TwNav } from "@/components/NavBar";
import { Footer } from "@/components/footer";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "Beach Haus",
  description:
    "Beach Haus Brewery, 801 Craft Kitchen, and The Rooftop at Beach Haus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body
        class="flex min-h-screen flex-col justify-between"
        className={nunito.className}
      >
        <>

          <main class="flex-grow">{children}</main>

        </>
      </body>
    </html>
  );
}
