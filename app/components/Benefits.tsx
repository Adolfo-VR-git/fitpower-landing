import { Zap, ShieldCheck, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-12 h-12 text-fit-orange" />,
    title: "Equipamiento Top",
    description:
      "Máquinas de última generación y zonas de peso libre diseñadas para el máximo rendimiento.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-fit-orange" />,
    title: "Zona Segura",
    description:
      "Ambiente sanitizado y seguro con entrenadores certificados siempre a tu disposición.",
  },
  {
    icon: <Clock className="w-12 h-12 text-fit-orange" />,
    title: "Acceso Total",
    description:
      "Flexibilidad de horarios para que entrenes cuando tu ritmo de vida lo permita.",
  },
  {
    icon: <Users className="w-12 h-12 text-fit-orange" />,
    title: "Comunidad VIP",
    description:
      "Únete a un grupo de personas que comparten tu pasión por el fitness y la superación.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            ¿Por Qué <span className="text-fit-orange">FitPower</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nos enfocamos en darte las mejores herramientas para que tu única
            preocupación sea superar tus propios límites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-12 lg:p-16 rounded-3xl shadow-sm border border-gray-100 
                   hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                   group text-center flex flex-col items-center"
            >
              <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed max-w-62.5 mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
