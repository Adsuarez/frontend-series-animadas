import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Form from "@/components/Form";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siempre Cartoons",
  description: "Busca, crea y edita tus Cartoons favoritos!",
};

export default function RootLayout({ children }) {
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
