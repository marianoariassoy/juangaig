import Footer from "@/components/footer";
import Link from "next/link";
import Shortcuts from "@/components/shortcuts-servicios";

const page = () => {
  const data = [
    {
      title: "Venta de Propiedades",
      description: `Vender una propiedad no es solo una operación inmobiliaria: es una decisión importante que merece ser acompañada con compromiso y claridad.

Desde la tasación hasta la firma, te acompaño en cada paso con una estrategia
diseñada especialmente para vos. Analizo datos, exploro oportunidades y cuido cada detalle, porque sé que detrás de cada propiedad hay historias, proyectos y emociones en juego.

Si estás pensando en vender o querés saber cuánto vale hoy tu propiedad, hablemos.`,
      image: "/assets/Asset-3.svg",
    },
    {
      title: "Alquiler de Propiedades",
      description: `Alquilar una propiedad implica mucho más que publicar un aviso. Se trata de encontrar al inquilino deseado, es decir, a la persona que encaje con el perfil que tu propiedad necesita.

Me ocupo de la búsqueda de candidatos, análisis de perfiles, verificación de garantías y firma del contrato. Trabajo con criterio, responsabilidad y una mirada profesional para proteger tu inversión y garantizarte tranquilidad.
Si estás por poner tu propiedad en alquiler, hablemos.`,
      image: "/assets/Asset-4.svg",
    },
    {
      title: "Sucesiones",
      description: `Detrás de una propiedad, en muchas ocasiones, hay procesos legales que necesitan ser resueltos.
Me especializo en iniciar, gestionar y concluir procesos sucesorios dentro de los 60 días. Trabajo para que puedas avanzar con claridad, resolviendo lo necesario para que la propiedad pueda quedar en condiciones de ser transferida o administrada con seguridad jurídica.

Si necesitás iniciar una sucesión o destrabar una situación hereditaria, hablemos.`,
      image: "/assets/Asset-5.svg",
    },
  ];

  return (
    <section className="max-w-5xl m-auto flex flex-col gap-y-12 mt-40">
      <h1 className="text-2xl lg:text-4xl font-semibold">
        Servicios — ¿Cómo puedo ayudarte?
      </h1>
      <hr className="border-black border-t w-full" />

      <div className="flex flex-col gap-y-16 [&>:last-child]:border-b-0 ">
        {data.map((item, index) => (
          <article
            key={index}
            className="flex border-b border-black pb-16 lg:px-12"
          >
            <div className="w-16 lg:w-20">
              <img src={item.image} alt={item.title} className="h-12 lg:h-14" />
            </div>
            <div className="flex flex-col gap-y-4 flex-1">
              <h2 className="text-xl lg:text-3xl font-semibold">
                {item.title}
              </h2>
              <p className="text-lg lg:text-xl text-wrap whitespace-pre-line">
                {item.description}
              </p>
              <Link
                href="/contacto"
                className="text-lg font-bold mt-4 hover:underline"
              >
                CONTACTAME PARA CONVERSAR
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="bg-black/10 text-black p-12 rounded-3xl text-center text-xl lg:text-3xl flex justify-center items-center">
        <span className="max-w-xl font-lora italic">
          “Saber cuánto vale tu propiedad es el primer paso para tomar
          decisiones con confianza y claridad”
        </span>
      </div>

      <Shortcuts />
      <Footer />
    </section>
  );
};

export default page;
