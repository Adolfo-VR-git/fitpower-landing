import { Dumbbell, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-fit-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold italic">
              <Dumbbell className="w-8 h-8 text-fit-orange" />
              <span>FitPower</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Más que un gimnasio, somos una comunidad dedicada a potenciar tu mejor versión física y mental.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-fit-orange transition-colors"><Instagram /></Link>
              <Link href="#" className="hover:text-fit-orange transition-colors"><Facebook /></Link>
              <Link href="#" className="hover:text-fit-orange transition-colors"><Twitter /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-fit-orange">Explora</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#beneficios" className="hover:text-white transition-colors">Beneficios</Link></li>
              <li><Link href="#precios" className="hover:text-white transition-colors">Planes</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Horarios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-fit-orange">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Términos de Uso</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-fit-orange">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-fit-orange shrink-0" />
                <span>Av. Salud 456, Gimnasio City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-fit-orange shrink-0" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-fit-orange shrink-0" />
                <span>contacto@fitpower.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 FitPower Gym. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}