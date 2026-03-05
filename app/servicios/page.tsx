"use client";
import Footer from "@/components/footer";
import Link from "next/link";
import Shortcuts from "@/components/shortcuts-servicios";
import { useState, useEffect } from "react";
import Loader from "@/components/loading";

interface data {
  id: number;
  title: string;
  text: string;
  image: string;
}

const Services = () => {
  const [data, setData] = useState<data[]>([]);
  const [loading, setLoading] = useState(true);

  const apiURL = process.env.NEXT_PUBLIC_API_URL + "/services";

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
    <section className="max-w-5xl m-auto flex flex-col gap-y-12 mt-40">
      <h1 className="text-2xl lg:text-4xl font-semibold">
        Servicios — ¿Cómo puedo ayudarte?
      </h1>
      <hr className="border-black border-t w-full" />

      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-y-16 [&>:last-child]:border-b-0 ">
          {data.map((item, index) => (
            <article
              key={index}
              className="flex border-b border-black pb-16 lg:px-12"
            >
              <div className="w-16 lg:w-20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 lg:h-14"
                />
              </div>
              <div className="flex flex-col gap-y-4 flex-1">
                <h2 className="text-xl lg:text-3xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-lg lg:text-xl text-wrap whitespace-pre-line">
                  {item.text}
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
      )}

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

export default Services;
