import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siempre Cartoons",
  description: "Busca, crea y edita tus Cartoons favoritos!",
};

export default function RootLayout({ children }) {
  //TODO: include a message with disclaimer about countries and genres information required before a creation of directors, actors and movies
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
