"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react"; // Importamos el icono

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center gap-2 text-2xl font-bold italic">
            <Dumbbell className="w-8 h-8 text-fit-orange" />
            <span>FitPower</span>
          </div>

          <nav className="hidden md:flex grow justify-center space-x-8">
            <Link
              href="#inicio"
              className="text-fit-gray hover:text-fit-orange transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#beneficios"
              className="text-fit-gray hover:text-fit-orange transition-colors"
            >
              Beneficios
            </Link>
            <Link
              href="#precios"
              className="text-fit-gray hover:text-fit-orange transition-colors"
            >
              Precios
            </Link>
            <Link
              href="#footer"
              className="text-fit-gray hover:text-fit-orange transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden md:block bg-fit-orange text-white px-5 py-2 rounded-md font-bold hover:bg-orange-600 transition-all"
            >
              Únete Ya
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
          <Link
            href="#inicio"
            className="block py-3 text-fit-gray hover:text-fit-orange w-full text-center"
          >
            Inicio
          </Link>

          <Link
            href="#beneficios"
            className="block py-3 text-fit-gray hover:text-fit-orange w-full text-center"
          >
            Beneficios
          </Link>

          <Link
            href="#precios"
            className="block py-3 text-fit-gray hover:text-fit-orange w-full text-center"
          >
            Precios
          </Link>

          <Link
            href="#contacto"
            className="block py-3 text-fit-gray hover:text-fit-orange w-full text-center"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
