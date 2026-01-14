import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "29",
    features: [
      "Acceso al gimnasio 24/7",
      "Uso de pesas libres",
      "Vestidores y duchas",
      "Wi-Fi gratuito",
    ],
    popular: false,
  },
  {
    name: "Estándar",
    price: "49",
    features: [
      "Todo lo del Básico",
      "Clases grupales ilimitadas",
      "Evaluación física mensual",
      "Acceso a todas las sedes",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "79",
    features: [
      "Todo lo del Estándar",
      "Entrenador personal",
      "Plan de nutrición",
      "Acceso a Spa y Masajes",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase italic">
            Nuestros Planes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Elige el nivel de entrenamiento que se adapte a tus objetivos y
            comienza hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-3xl flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-fit-orange shadow-2xl scale-105 z-10 bg-white"
                  : "border border-gray-100 shadow-sm hover:shadow-lg bg-gray-50/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fit-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Más Popular
                </span>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800 uppercase tracking-wider">
                  {plan.name}
                </h3>
                <div className="flex justify-center items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 font-medium">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <Check className="w-5 h-5 text-fit-orange shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-fit-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-200"
                    : "border-2 border-fit-orange text-fit-orange hover:bg-fit-orange hover:text-white"
                }`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
