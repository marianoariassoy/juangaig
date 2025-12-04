import Footer from "@/components/footer";
import Confiaron from "@/components/confiaron";
import Shortcuts from "@/components/shortcuts-metodologia";

const page = () => {
  const data = [
    {
      title: "Tasación precisa",
      description:
        "Brindo una valoración clara, realista y fundamentada, basada en el análisis del mercado, datos comparables y más de 15 años de experiencia.",
    },
    {
      title: "Análisis de documentación",
      description:
        "Reviso cada aspecto legal y técnico de la propiedad para asegurar que esté en condiciones óptimas de salir al mercado, anticipando posibles obstáculos.",
    },
    {
      title: "Estrategia de comercialización personalizada",
      description:
        "Diseño un plan específico para cada propiedad, con un plazo de venta acordado entre las partes. No aplico fórmulas genéricas: cada caso es único.",
    },
    {
      title: "Preparación visual de la propiedad",
      description:
        "Coordinamos fotografía profesional, plano, recorrido virtual 360°, video y tomas con dron (según las características del inmueble) para mostrarlo en su mejor versión.",
    },
    {
      title: "Publicación en portales líderes",
      description:
        "Difundimos tu propiedad en las principales plataformas del mercado, como Zonaprop y Argenprop, con presencia destacada.",
    },
    {
      title: "Red de contactos profesional",
      description:
        "Formo parte de MLS CABA y de CRS Internacional (Certified Residential Specialist), lo que me permite trabajar en conjunto con más de 40 inmobiliarias activas en el merca",
    },
    {
      title: "Atención y seguimiento de interesados",
      description:
        "Acompaño personalmente cada visita, filtro los perfiles y realizo un seguimiento activo para generar encuentros realmente efectivos. Además, te mantengo informado en todo momento sobre el estado del proceso.",
    },
    {
      title: "Negociación y cierre de operación",
      description:
        "Te acompaño hasta el cierre de la venta, cuidando cada detalle del proceso para que todo se concrete de forma segura.",
    },
  ];

  return (
    <section className="max-w-5xl m-auto flex flex-col mt-40 gap-y-12">
      <h1 className="text-2xl lg:text-4xl font-semibold">Metodología</h1>

      <div className="lg:px-32 py-12 lg:py-20 border-b border-t border-black flex flex-col gap-y-8 mb-8">
        <h2 className="text-xl lg:text-3xl font-semibold">¿Cómo trabajo?</h2>
        <p className="text-lg lg:text-xl text-wrap whitespace-pre-line">
          La forma de vender propiedades cambió. Hoy, la tecnología, la
          digitalización y el trabajo en red son herramientas clave para una
          comercialización realmente efectiva.
          <br />
          <br />
          A lo largo de mi carrera trabajé en inmobiliarias de distintos estilos
          y escalas. Esa experiencia me permitió desarrollar una metodología
          propia, basada en el profesionalismo, la franqueza y una atención
          personalizada.
          <br />
          <br />
          Si confías en mí la venta de tu propiedad, te voy a acompañar en cada
          etapa del proceso, con una mirada integral y una gestión enfocada en
          lograr una venta ágil, segura y con resultados concretos.
        </p>
      </div>

      <div className="flex flex-col gap-y-8 lg:px-12 [&>:last-child]:border-b-0 mb-8">
        {data.map((item, index) => (
          <article key={index} className="flex">
            <div className="w-16 lg:w-20">
              <span className="text-5xl lg:text-6xl font-lora italic">
                {index + 1}
              </span>
            </div>
            <div className="flex-1 text-xl leading-6 mt-1">
              <span className="font-bold">{item.title}</span>{" "}
              <span>{item.description}</span>
            </div>
          </article>
        ))}
      </div>

      <hr className="border-black border-t w-full mb-8" />

      <Confiaron />

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
