import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[85vh] flex items-center justify-end overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url('/hero-bg.jpg')`,
          backgroundPosition: "center 40%",
          backgroundAttachment: "revert-layer", 
        }}
      />


      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left flex flex-col items-start">
        <h1 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-4 drop-shadow-lg">
          Transforma Tu Cuerpo, <br />
          <span className="text-fit-orange">Transforma Tu Vida</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Únete a la comunidad de fitness más motivadora. Equipamiento de última
          generación y resultados garantizados.
        </p>


        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="#contacto"
            className="bg-fit-orange text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-all shadow-lg"
          >
            Comienza Hoy
          </Link>
          <Link
            href="#precios"
            className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-all"
          >
            Ver Precios
          </Link>
        </div>
      </div>
    </section>
  );
}
