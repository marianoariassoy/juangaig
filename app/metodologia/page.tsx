"use client";
import Footer from "@/components/footer";
import Confiaron from "@/components/confiaron";
import Shortcuts from "@/components/shortcuts-metodologia";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  title: string;
  text: string;
}

const Metodologia = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/metodology";

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(apiURL);
        if (!res.ok) throw new Error("Error al obtener datos de productos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [apiURL]);

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

      {loading ? (
        <Loader />
      ) : (
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
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      )}

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

export default Metodologia;
