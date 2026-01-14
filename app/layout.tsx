import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FitPower | Transforma Tu Vida",
  description:
    "Gimnasio de alto rendimiento con tecnología de punta y entrenadores certificados.",
  keywords: ["gimnasio", "fitness", "entrenamiento", "crossfit", "salud"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
